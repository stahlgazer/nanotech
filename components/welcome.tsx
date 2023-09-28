"use client";
import { useUser } from "@clerk/nextjs";

export default function Welcome() {
  const { isLoaded, isSignedIn, user } = useUser();
  return <h2>Welcome back {user?.firstName}</h2>;
}
