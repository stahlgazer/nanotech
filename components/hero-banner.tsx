"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { useUser } from "@clerk/nextjs";
export default function HeroBanner() {
  const { isLoaded, isSignedIn, user } = useUser();
  return (
    <div className="flex flex-col justify-center items-center h-screen touch-none">
      <h1 className="underline decoration-rose-500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
        Nanotech Health
      </h1>
      <p className="text-white bg-slate-600 rounded-full mt-2 p-2 text-xs sm:text-sm md:text-base lg:text-lg">
        Revolutionizing the way users interact with their healthcare
      </p>
      <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
        <Button className="md:text-lg p-4 m-4 md:p-6">Get Started</Button>
      </Link>

      <video
        autoPlay
        loop
        muted
        className="absolute z-[-1] w-auto min-h-full min-w-full max-w-none"
      >
        <source src="animated-background.mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
