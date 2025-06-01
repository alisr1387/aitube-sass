"use client";

import Link from "next/link";
import AgentPulse from "./AgentPulse";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
// import { Ghost } from "lucide-react"; 
import { useFormStatus } from "react-dom";

const Header = () => {
  const { pending } = useFormStatus();
  return (
    <header className="top-0 sticky z-50 right-0 left-0 px-4 bg-white/80 backdrop-blur-sm border-b border-gray-200 w-full">
      <div className="container mx-auto ">
        <div className="flex items-center justify-between h-16">

        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-4">
            <AgentPulse size="small" color="blue" />
            <h2
              className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text  text-transparent bg-blue" >
              AgentTube
            </h2>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <SignedIn>
            <Link href="/manage-plan">
              <Button variant="outline" className="mr-2 border-blue-200 cursor-pointer max-sm:p-2 max-sm:ml-2 max-sm:" disabled={pending}>{pending ? "prepare plans...." : "manage plan"}</Button>
            </Link>
            <div className="p-2 w-10 h-10 flex items-center justify-center rounded-full border bg-blue-100 border-blue-200">
              <UserButton/>
            </div>
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">

<Button variant="ghost" className="px-6 py-2 text-white bg-gradient-to-r from-blue-600 to-blue-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium cursor-pointer hover:text-white "   disabled={pending}>
{pending ? "Signing..." : "Signin"}
</Button>
            </SignInButton>
            
          </SignedOut>
        </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
