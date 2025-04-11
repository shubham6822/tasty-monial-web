"use client";

import type React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "../lib/utils";
import {
  MessageSquare,
  Info,
  Share2,
  MessageCircle,
  Users,
  Home,
  BarChart2,
  Folder,
  Settings,
  LogOut,
  MessageSquareQuote,
} from "lucide-react";
import { deleteCookie, getCookie } from "cookies-next";
import { useEffect, useState } from "react";
import { IUser } from "../models/user.model";
import api from "../lib/axiosInstance";
import Link from "next/link";

interface NavItem {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  isNew?: boolean;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const navigation: NavSection[] = [
  {
    title: "OVERVIEW",
    items: [
      { href: "/dashboard", icon: Home, label: "Dashboard" },
      { href: "/analytics", icon: BarChart2, label: "Analytics", isNew: true },
      { href: "/testimonial", icon: MessageSquare, label: "Testimonial" },
      { href: "/projects", icon: Folder, label: "Project" },
    ],
  },
  {
    title: "HELP & RESOURCES",
    items: [
      { href: "/whats-new", icon: Info, label: "What's new" },
      { href: "/affiliate", icon: Share2, label: "Affiliate Program" },
      { href: "/feedback", icon: MessageCircle, label: "Feedback" },
      { href: "/community", icon: Users, label: "Community" },
    ],
  },
];

function NavItem({
  href,
  icon: Icon,
  children,
  onClick,
}: {
  href: string;
  icon: any;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "flex items-center px-3 py-2 text-sm rounded-md transition-colors",
        "hover:bg-gray-100 dark:hover:bg-gray-800/50",
        isActive
          ? "text-blue-600 dark:text-blue-400 font-semibold bg-gray-100 dark:bg-gray-800"
          : "text-gray-600 dark:text-gray-300"
      )}
    >
      <Icon
        className={cn(
          "h-4 w-4 mr-3",
          isActive ? "text-blue-600 dark:text-blue-400" : ""
        )}
      />
      {children}
    </Link>
  );
}

export default function Sidebar() {
  const pathname = usePathname();
  const [user, setUser] = useState<IUser>();
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      const res = api
        .get("/api/auth/me")
        .then((res) => {
          const userData = res.data as { data: IUser }; // Explicitly type res.data
          setUser(userData.data);
          localStorage.setItem("user", JSON.stringify(userData.data));
          return userData;
        })
        .catch((error) => {
          console.error("Error fetching user:", error);
        });
    } else {
      setUser(JSON.parse(user || "{}"));
    }
  }, []);

  return (
    <div className="w-60 h-screen flex flex-col bg-[#f9fafb] dark:bg-[#1F1F23] dark:border-gray-800 border-r border-gray-200">
      <div className="border-gray-200 border-b dark:border-gray-800">
        <div className="flex items-center gap-3 p-4">
          <Image
            src={user?.picture || "/default.jpg"}
            alt="Avatar"
            width={32}
            height={32}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {user?.name}
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 text-xs bg-gradient-to-r from-blue-400/20 to-purple-400/20 text-blue-500 rounded-full border border-blue-400/20 pointer-events-none">
                Admin
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-auto py-4 p-2">
        {navigation.map((section) => (
          <div key={section.title} className="mb-6">
            <div className="px-4 mb-2">
              <h3 className="text-xs font-medium text-gray-500 dark:text-gray-400 pb-3">
                {section.title}
              </h3>
            </div>
            <nav className="space-y-1">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 text-sm",
                      "hover:bg-gray-100 dark:hover:bg-gray-800/50 rounded-lg",
                      isActive
                        ? "  bg-gray-200 dark:bg-gray-800"
                        : "text-gray-700 dark:text-gray-300"
                    )}
                  >
                    <item.icon className={cn("h-4 w-4")} />
                    <span>{item.label}</span>
                    {item.isNew && (
                      <div className="hidden sm:inline-block px-2 py-0.5 text-xs bg-gradient-to-r from-blue-400/20 to-purple-400/20 text-blue-500 rounded-full border border-blue-400/20 pointer-events-none">
                        Coming Soon
                      </div>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>
        ))}
      </div>
      <div className="px-4 py-4 border-t border-gray-200 dark:border-[#1F1F23]">
        <div className="space-y-1">
          <NavItem href="/" icon={MessageSquareQuote}>
            TastyMonial
          </NavItem>
          <NavItem href="/settings" icon={Settings}>
            Settings
          </NavItem>
          <NavItem
            href="/"
            icon={LogOut}
            onClick={() => {
              deleteCookie("token");
              localStorage.clear();
            }}
          >
            LogOut
          </NavItem>
        </div>
      </div>
    </div>
  );
}
