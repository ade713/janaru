import { LogOutButton } from "./log-out-button";
import UsernameDisplay from "./username-display";

export function AppHeader() {
  return (
    <header className="row-span-1 flex justify-between items-center border-b bg-green-600/80 border-green-950 p-2 text-2xl">
      <h1>Janaru</h1>
      <nav className="flex gap-4 items-center">
        <UsernameDisplay />
        <LogOutButton />
      </nav>
    </header>
  );
}
