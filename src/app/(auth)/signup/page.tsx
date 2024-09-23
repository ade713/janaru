import { AuthForm } from "@/components/auth-form";

export default function Page() {
  return (
    <main className="flex justify-center items-center h-screen">
      <AuthForm formType="signup" />
    </main>
  );
}
