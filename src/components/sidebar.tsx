"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../components/ui/button";
import {
  MessageSquareQuote,
  LayoutDashboard,
  User,
  LogOut,
  Settings,
} from "lucide-react";
import { cn } from "../lib/utils";
import { ThemeToggle } from "../components/theme-toggle";

export function Sidebar() {
  const pathname = usePathname();

  const routes = [
    {
      href: "/dashboard",
      icon: LayoutDashboard,
      label: "Dashboard",
    },
    {
      href: "/dashboard/account",
      icon: User,
      label: "Account",
    },
    {
      href: "/dashboard/settings",
      icon: Settings,
      label: "Settings",
    },
  ];

  return (
    <div className="flex h-full flex-col border-r bg-background">
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/dashboard" className="flex items-center gap-2 font-bold">
          <MessageSquareQuote className="h-5 w-5 text-primary" />
          <span>Tasty-Monial</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid items-start px-2 text-sm font-medium">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground",
                pathname === route.href && "bg-secondary text-foreground"
              )}
            >
              <route.icon className="h-4 w-4" />
              {route.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mt-auto border-t p-4">
        <div className="flex items-center justify-between">
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <LogOut className="h-4 w-4" />
            <span className="sr-only">Log out</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
