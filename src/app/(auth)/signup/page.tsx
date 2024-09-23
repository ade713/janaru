import { AuthForm } from "@/components/auth-form";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-2xl mb-6">Sign Up</h1>

      <AuthForm formType="signup" />

      <p className="mt-6 text-sm text-zinc-500">
        Already have an account?{" "}
        <Link href="/login" className="underline text-green-950">
          Login
        </Link>
      </p>
    </main>
  );
}
