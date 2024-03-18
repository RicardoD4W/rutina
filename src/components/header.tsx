import { UserButton } from "@clerk/clerk-react";

export default function Header() {
  return (
    <>
      <header className="bg-navegación flex justify-between items-center p-4">
        <h1 className="text-white text-3xl font-semibold">Rutina</h1>
        <UserButton afterSignOutUrl="/sign-in" />
      </header>
    </>
  );
}
