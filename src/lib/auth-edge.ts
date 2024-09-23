import { NextAuthConfig } from "next-auth";
import { prisma } from "./db";

export const nextAuthEdgeConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized: ({ auth, request }) => {
      // runs on every request with middleware
      const isLoggedIn = Boolean(auth?.user);
      const isTryingToAccessApp = request.nextUrl.pathname.includes("/app");

      if (!isLoggedIn && isTryingToAccessApp) return false;

      if (isLoggedIn && isTryingToAccessApp) return true;

      if (
        isLoggedIn &&
        (request.nextUrl.pathname.includes("/login") ||
          request.nextUrl.pathname.includes("/signup"))
      ) {
        return Response.redirect(new URL("/app/home", request.nextUrl));
      }

      if (isLoggedIn && !isTryingToAccessApp) {
        if (
          request.nextUrl.pathname.includes("/login") ||
          request.nextUrl.pathname.includes("/signup")
        ) {
          return Response.redirect(new URL("/app/home", request.nextUrl));
        }

        return true;
      }

      if (!isLoggedIn && !isTryingToAccessApp) return true;

      if (!isTryingToAccessApp) return true;

      return false;
    },
    jwt: async ({ token, user }) => {
      if (user) {
        // on sign in
        token.userId = user.id;
        token.email = user.email!;
      }

      return token;
    },
    session: ({ session, token }) => {
      session.user.id = token.userId;

      return session;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
