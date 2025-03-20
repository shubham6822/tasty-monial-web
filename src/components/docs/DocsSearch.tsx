"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { Input } from "../ui/input";

const searchItems = [
  { title: "Introduction", href: "#introduction", category: "Getting Started" },
  { title: "Quick Start", href: "#quick-start", category: "Getting Started" },
  {
    title: "NPM/Yarn Installation",
    href: "#npm-yarn",
    category: "Installation",
  },
  { title: "CDN Installation", href: "#cdn", category: "Installation" },
  { title: "React Integration", href: "#react", category: "Installation" },
  { title: "Vue Integration", href: "#vue", category: "Installation" },
  { title: "Basic Usage", href: "#basic-usage", category: "Usage" },
  { title: "Advanced Usage", href: "#advanced-usage", category: "Usage" },
  { title: "Themes", href: "#themes", category: "Customization" },
  { title: "Layouts", href: "#layouts", category: "Customization" },
  { title: "Styling", href: "#styling", category: "Customization" },
  {
    title: "Authentication",
    href: "#authentication",
    category: "API Reference",
  },
  { title: "Endpoints", href: "#endpoints", category: "API Reference" },
  { title: "Rate Limits", href: "#rate-limits", category: "API Reference" },
  {
    title: "Common Issues",
    href: "#common-issues",
    category: "Troubleshooting",
  },
  { title: "Error Codes", href: "#error-codes", category: "Troubleshooting" },
  { title: "FAQ", href: "#faq", category: "FAQ" },
];

export function DocsSearch() {
  const [open, setOpen] = useState(false);

  const handleSelect = (href: string) => {
    setOpen(false);
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search documentation..."
          className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/2"
          onClick={() => setOpen(true)}
          readOnly
        />
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search documentation..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {Object.entries(
            searchItems.reduce((acc, item) => {
              if (!acc[item.category]) {
                acc[item.category] = [];
              }
              acc[item.category].push(item);
              return acc;
            }, {} as Record<string, typeof searchItems>)
          ).map(([category, items]) => (
            <CommandGroup key={category} heading={category}>
              {items.map((item) => (
                <CommandItem
                  key={item.href}
                  onSelect={() => handleSelect(item.href)}
                >
                  {item.title}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}
