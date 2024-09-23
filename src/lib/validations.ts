import { z } from "zod";

export const entoriFormSchema = z.object({
  content: z.string().max(500).min(1),
});

export const authLoginSchema = z.object({
  email: z.string().email().max(100),
  password: z.string().max(100),
});

export const authSignUpSchema = z.object({
  name: z.string().max(100),
  email: z.string().email().max(100),
  password: z.string().max(100),
});

export type TAuthLogin = z.infer<typeof authLoginSchema>;
export type TAuthSignUp = z.infer<typeof authSignUpSchema>;
