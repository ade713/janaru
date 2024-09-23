import "server-only";

import { prisma } from "./db";
import { User } from "@prisma/client";
import { auth } from "./auth-no-edge";
import { redirect } from "next/navigation";

export async function checkAuth() {
  const session = await auth();
  if (!session?.user) redirect("/login");

  return session;
}

export async function getUserByEmail(email: User["email"]) {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  return user;
}

export async function getEntorisByAuthorId(authorId: User["id"]) {
  const entoris = await prisma.entori.findMany({
    where: {
      authorId,
    },
  });

  return entoris;
}
