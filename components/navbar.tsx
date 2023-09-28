import { DarkmodeToggle } from "@/components/darkmode-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="flex p-4 gap-2 absolute top-0 right-0">
      <DarkmodeToggle />
      <UserButton afterSignOutUrl="/" />
    </nav>
  );
}
