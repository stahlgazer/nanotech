import { Button } from "@/components/ui/button";
import { SignIn, SignUp, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>

      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
