export default function Home() {
  return (
    <main className="bg-cover bg-no-repeat bg-[url('../app/images/japan-bg.jpg')] min-h-screen flex items-center pl-8">
      <header>
        <h1 className="text-6xl">Janaru</h1>
        <p className="text-3xl">Share your day</p>
      </header>

      <section className="ml-14">
        <p>
          Anything new to share? <b>Login</b>
        </p>
        <p>
          New to Janaru? <b>Sign Up</b>
        </p>
      </section>
    </main>
  );
}
