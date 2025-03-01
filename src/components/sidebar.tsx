"use client";

import type React from "react";

import {
  FileText,
  Upload,
  MessageSquare,
  Search,
  Tags,
  Palette,
  Heart,
  Sparkles,
  Info,
  Share2,
  MessageCircle,
  Users,
  Home,
  BarChart2,
  Folder,
  Settings,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "../lib/utils";
import { Badge } from "../components/ui/badge";

interface NavItem {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  badge?: string;
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
      {
        href: "/dashboard",
        icon: Home,
        label: "Dashboard",
      },
      {
        href: "#",
        icon: BarChart2,
        label: "Analytics",
      },
      {
        href: "#",
        icon: MessageSquare,
        label: "Testimonial",
      },
      {
        href: "#",
        icon: Folder,
        label: "Project",
        isNew: true,
      },
    ],
  },
  // {
  //   title: "COLLECT",
  //   items: [
  //     {
  //       href: "/forms",
  //       icon: FileText,
  //       label: "Forms",
  //     },
  //     {
  //       href: "/import",
  //       icon: Upload,
  //       label: "Import Testimonials",
  //     },
  //   ],
  // },
  // {
  //   title: "MANAGE",
  //   items: [
  //     {
  //       href: "/testimonials",
  //       icon: MessageSquare,
  //       label: "Testimonials",
  //     },
  //     {
  //       href: "/search",
  //       icon: Search,
  //       label: "Search",
  //     },
  //     {
  //       href: "/tags",
  //       icon: Tags,
  //       label: "Tags",
  //     },
  //   ],
  // },
  {
    title: "HELP & RESOURCES",
    items: [
      {
        href: "/whats-new",
        icon: Info,
        label: "What's new",
      },
      {
        href: "/affiliate",
        icon: Share2,
        label: "Affiliate Program",
      },
      {
        href: "/feedback",
        icon: MessageCircle,
        label: "Feedback",
      },
      {
        href: "/community",
        icon: Users,
        label: "Community",
      },
    ],
  },
];

function NavItem({
  href,
  icon: Icon,
  children,
}: {
  href: string;
  icon: any;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="flex items-center px-3 py-2 text-sm rounded-md transition-colors text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-[#1F1F23]"
    >
      <Icon className="h-4 w-4 mr-3 flex-shrink-0" />
      {children}
    </Link>
  );
}

export default function Sidebar() {
  return (
    <div className="w-60 p-2 h-screen flex flex-col bg-gray-50 dark:bg-[#1F1F23]  dark:border-gray-800">
      <div className="p-4 border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <Image
            src="/placeholder.svg?height=32&width=32"
            alt="Avatar"
            width={32}
            height={32}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                Shubham
              </span>
              <Badge variant="secondary" className="h-5 text-xs font-normal">
                Admin
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-auto py-4">
        {navigation.map((section) => (
          <div key={section.title} className="mb-6">
            <div className="px-4 mb-2">
              <h3 className="text-xs font-medium text-gray-500 dark:text-gray-400">
                {section.title}
              </h3>
            </div>
            <nav className="space-y-1">
              {section.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300",
                    "hover:bg-gray-100 dark:hover:bg-gray-800/50",
                    "group relative"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                  {item.isNew && (
                    <Badge variant="secondary" className="ml-auto text-xs">
                      New
                    </Badge>
                  )}
                </Link>
              ))}
            </nav>
          </div>
        ))}
      </div>
      <div className="px-4 py-4 border-t border-gray-200 dark:border-[#1F1F23]">
        <div className="space-y-1">
          <NavItem href="/s" icon={Settings}>
            Settings
          </NavItem>
          <NavItem href="/h" icon={HelpCircle}>
            Help
          </NavItem>
        </div>
      </div>
    </div>
  );
}
