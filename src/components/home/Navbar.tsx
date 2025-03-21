import { MessageSquareQuote } from "lucide-react";
import React from "react";
import { ThemeToggle } from "../theme-toggle";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full pt-3 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 font-bold">
          <MessageSquareQuote className="h-6 w-6 text-primary" />
          <Link href="/">
            <span>TastyMonial</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link href="/docs" className="text-sm font-medium">
            Docs
          </Link>
          <Link href="/dashboard">
            <Button variant="outline">Dashboard</Button>
          </Link>
          {/* <Link href="/login">
            <Button variant="outline">Login</Button>
          </Link> */}
        </div>
      </div>
    </header>
  );
}
