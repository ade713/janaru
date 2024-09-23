import { AuthForm } from "@/components/auth-form";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-2xl mb-6">Login</h1>

      <AuthForm formType="login" />

      <p className="mt-6 text-sm text-zinc-500">
        No account yet?{" "}
        <Link href="/signup" className="underline text-green-950">
          Sign up
        </Link>
      </p>
    </main>
  );
}
