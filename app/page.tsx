"use client";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { DarkmodeToggle } from "@/components/darkmode-toggle";
import HeroBanner from "@/components/hero-banner";

export default function Home() {
  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <main>
      <div className="absolute top-0 right-0 p-6 gap-2">
        <DarkmodeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
      <HeroBanner />
    </main>
  );
}
