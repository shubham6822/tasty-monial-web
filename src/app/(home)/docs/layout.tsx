import type React from "react";
import type { Metadata } from "next";
import { DocsSidebar } from "../../../components/docs/DocsSidebar";
import { DocsSearch } from "../../../components/docs/DocsSearch";

export const metadata: Metadata = {
  title: "Documentation | Tasty-Monial",
  description:
    "Developer documentation for the Tasty-Monial testimonial management platform",
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <aside className="hidden w-64 shrink-0 border-r md:block">
          <DocsSidebar />
        </aside>
        <main className="flex-1 overflow-auto">
          <div className="container max-w-4xl py-6 lg:py-10">
            <div className="mb-4">
              <DocsSearch />
            </div>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
