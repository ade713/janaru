import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-cover bg-no-repeat bg-[url('../app/images/japan-bg.jpg')] min-h-screen flex items-center pl-8">
      <header>
        <h1 className="text-6xl">Janaru</h1>
        <p className="text-3xl">Share your day</p>
      </header>

      <section className="ml-14">
        <p>
          Anything new to share?{" "}
          <Link href="/login" className="underline text-red-900">
            Login
          </Link>
        </p>
        <p>
          New to Janaru?{" "}
          <Link href="/signup" className="underline text-red-900">
            Sign Up
          </Link>
        </p>
      </section>
    </main>
  );
}
