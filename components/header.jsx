"use client";

import Image from "next/image";
import React from "react";
import { ModeToggle } from "./theme-toggle";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 w-full border-b bg-background/80 backdrop-blur-md z-10 supports-[backdrop-filter:bg-background/60">
      <nav className="container mx-auto px-4 height-16 flex items-center justify-between ">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="logo"
            width={200}
            height={60}
            className="h-10 w-auto object-contain"
          />
        </Link>
        <div className="flex items-center space-x-2">
          <SignedOut>
            <SignInButton>
              <Button variant="secondary">Sign In</Button>
            </SignInButton>
            <SignUpButton>
              <Button className="bg-[#6c47ff]" variant="secondary">
                Sign Up
              </Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifier: "font-semibold",
                },
              }}
            />
          </SignedIn>
          <div>
            {" "}
            <ModeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
