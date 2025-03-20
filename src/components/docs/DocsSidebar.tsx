"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageSquareQuote } from "lucide-react";
import { cn } from "../../lib/utils";

const sections = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs#introduction" },
      { title: "Quick Start", href: "/docs#quick-start" },
    ],
  },
  {
    title: "Installation",
    items: [
      { title: "NPM/Yarn", href: "/docs#npm-yarn" },
      { title: "CDN", href: "/docs#cdn" },
      { title: "React", href: "/docs#react" },
      { title: "Vue", href: "/docs#vue" },
    ],
  },
  {
    title: "Usage",
    items: [
      { title: "Basic Usage", href: "/docs#basic-usage" },
      { title: "Advanced Usage", href: "/docs#advanced-usage" },
    ],
  },
  {
    title: "Customization",
    items: [
      { title: "Themes", href: "/docs#themes" },
      { title: "Layouts", href: "/docs#layouts" },
      { title: "Styling", href: "/docs#styling" },
    ],
  },
  {
    title: "API Reference",
    items: [
      { title: "Authentication", href: "/docs#authentication" },
      { title: "Endpoints", href: "/docs#endpoints" },
      { title: "Rate Limits", href: "/docs#rate-limits" },
    ],
  },
  {
    title: "Troubleshooting",
    items: [
      { title: "Common Issues", href: "/docs#common-issues" },
      { title: "Error Codes", href: "/docs#error-codes" },
    ],
  },
  {
    title: "FAQ",
    items: [{ title: "General Questions", href: "/docs#faq" }],
  },
];

export function DocsSidebar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          window.scrollY >= sectionTop - 100 &&
          window.scrollY < sectionTop + sectionHeight - 100
        ) {
          currentSection = section.getAttribute("id") || "";
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex h-full flex-col border-r bg-background">
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <MessageSquareQuote className="h-5 w-5 text-primary" />
          <span>TastyMonial</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-4">
        <div className="px-4 py-2">
          <h2 className="mb-2 text-lg font-semibold tracking-tight">
            Documentation
          </h2>
          <div className="grid grid-flow-row auto-rows-max text-sm">
            {sections.map((section) => (
              <div key={section.title} className="py-2">
                <h3 className="mb-1 font-medium text-muted-foreground">
                  {section.title}
                </h3>
                <nav className="grid grid-flow-row auto-rows-max">
                  {section.items.map((item) => {
                    const isActive = activeSection === item.href.split("#")[1];
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "flex w-full items-center rounded-md px-2 py-1.5 text-sm",
                          "hover:bg-accent hover:text-accent-foreground",
                          isActive &&
                            "bg-accent text-accent-foreground font-medium"
                        )}
                        onClick={(e) => {
                          e.preventDefault();
                          const targetId = item.href.split("#")[1];
                          const targetElement =
                            document.getElementById(targetId);
                          if (targetElement) {
                            window.scrollTo({
                              top: targetElement.offsetTop - 100,
                              behavior: "smooth",
                            });
                          }
                        }}
                      >
                        {item.title}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
