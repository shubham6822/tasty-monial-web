"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "../../lib/utils";

interface CodeBlockProps {
  language: string;
  code: string;
  filename?: string;
}

export function CodeBlock({ language, code, filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative my-4 overflow-hidden rounded-lg border bg-muted">
      {filename && (
        <div className="border-b bg-muted px-4 py-2 text-xs font-medium text-muted-foreground">
          {filename}
        </div>
      )}
      <pre className="overflow-x-auto p-4 text-sm">
        <code className={cn("language-" + language)}>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute right-4 top-4 rounded-md border bg-background p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        <span className="sr-only">Copy code</span>
      </button>
    </div>
  );
}
