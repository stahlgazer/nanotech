"use client";
import { useUser } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import HeroBanner from "@/components/hero-banner";

export default function Home() {
  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <main className="touch-none">
      <div className="absolute top-0 right-0 p-6 gap-2">
        <UserButton afterSignOutUrl="/" />
      </div>
      <HeroBanner />
    </main>
  );
}
