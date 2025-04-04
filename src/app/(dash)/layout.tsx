"use client";

import type { ReactNode } from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar";
import { Toaster } from "../../components/ui/toaster";
import ProjectContext from "../../context/ProjectContext";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={`flex h-screen ${theme === "dark" ? "dark" : ""}`}>
      <Sidebar />
      <main className="flex-1 overflow-auto pt-6 px-10 bg-white  dark:bg-[#0F0F12] ">
        <Toaster />
        <ProjectContext>{children}</ProjectContext>
      </main>
    </div>
  );
}
