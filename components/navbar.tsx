import { DarkmodeToggle } from "@/components/darkmode-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="flex p-3 gap-2 lg:p-4 lg:gap-4 absolute top-0 right-0">
      <DarkmodeToggle />
      <UserButton afterSignOutUrl="/" />
    </nav>
  );
}
