"use server";

import { signIn, signOut } from "@/lib/auth-no-edge";
import { prisma } from "@/lib/db";
import { checkAuth } from "@/lib/server-utils";
import { authSignUpSchema, entoriFormSchema } from "@/lib/validations";
import { AuthError } from "next-auth";
import { revalidatePath } from "next/cache";

import bcrypt from "bcryptjs";
import { Prisma } from "@prisma/client";

// ----- USER ACTIONS -----
export async function logIn(formData: unknown) {
  if (!(formData instanceof FormData)) return { message: "Invalid form data." };

  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin": {
          return { message: "Invalid credentials." };
        }
        default: {
          return { message: "Error, could not sign in." };
        }
      }
    }

    throw error; // next.js redirect throws error, need to throw error again
  }
}

export async function logOut() {
  await signOut({ redirectTo: "/" });
}

export async function signUp(formData: unknown) {
  // validation
  if (!(formData instanceof FormData)) return { message: "Invalid form data." };

  // convert formData to a plain object
  const formDataEntries = Object.fromEntries(formData.entries());
  const validatedFormData = authSignUpSchema.safeParse(formDataEntries);
  if (!validatedFormData.success) return { message: "Invalid form data." };

  const { email, password, name } = validatedFormData.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await prisma?.user.create({
      data: {
        email,
        hashedPassword,
        name,
      },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") return { message: "Email already exists." };
    }

    return { message: "Could not create user." };
  }

  await signIn("credentials", formData);
}

// ----- ENTORI ACTIONS -----
export async function addEntori(entoriData: unknown) {
  const session = await checkAuth();
  console.log({ entoriData });

  const validatedEntoriData = entoriFormSchema.safeParse(entoriData);
  if (!validatedEntoriData.success) {
    return {
      message: "Invalid pet data.",
    };
  }
  try {
    const email = session.user.email as string;

    await prisma.entori.create({
      data: {
        ...validatedEntoriData.data,
        author: {
          connect: {
            id: session.user.id,
          },
        },
      },
    });
  } catch (error) {
    return {
      message: "Could not add entori...",
    };
  }

  revalidatePath("/app", "page");
}
