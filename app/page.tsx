"use client";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { DarkmodeToggle } from "@/components/darkmode-toggle";

export default function Home() {
  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <div className="text-center">
      <div className="flex justify-end p-6 gap-2">
        <DarkmodeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
      <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
        <Button className="md:text-lg p-4 md:p-6">Get Started</Button>
      </Link>
    </div>
  );
}
