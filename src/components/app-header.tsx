export function AppHeader() {
  return (
    <header className="row-span-1 flex justify-between items-center border-b bg-green-600/80 border-green-950 p-2 text-2xl">
      <h1>Janaru</h1>
      <nav className="flex gap-4">
        <h2>User Home</h2>
        <button>Sign Out</button>
      </nav>
    </header>
  );
}
