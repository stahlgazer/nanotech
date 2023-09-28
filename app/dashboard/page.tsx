"use client";
import { useUser } from "@clerk/nextjs";

export default function Dashboard() {
    const { isLoaded, isSignedIn, user } = useUser();
  
    return (
      <div>
        Welcome back {user?.firstName}
      </div>
    );
  }