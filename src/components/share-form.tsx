"use client";

import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Copy, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface ShareFormProps {
  className?: string;
}

export default function ShareForm({ className }: ShareFormProps) {
  const [copied, setCopied] = useState(false);
  const router = useRouter();
  const formLink = `${window.location.origin}/submit/user123`;
  const copyToClipboard = () => {
    navigator.clipboard.writeText(formLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("space-y-4", className)}>
      <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-100 dark:border-indigo-800">
        <h3 className="text-sm font-medium text-indigo-800 dark:text-indigo-300 mb-2">
          Your Unique Form Link
        </h3>
        <p className="text-xs text-indigo-700 dark:text-indigo-400 mb-4">
          Share this link with your clients to collect testimonials
        </p>

        <div className="flex gap-2">
          <Input
            value={formLink}
            readOnly
            className="text-sm bg-white dark:bg-[#1F1F23] border-indigo-200 dark:border-indigo-800"
          />
          <Button
            onClick={copyToClipboard}
            variant="outline"
            className="border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/50"
          >
            {copied ? "Copied!" : <Copy className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        <Button className="w-full" variant="default">
          Customize Form
        </Button>
        <Button
          className="w-full"
          variant="outline"
          onClick={() => router.push(formLink)}
        >
          <ExternalLink className="mr-2 h-4 w-4" />
          Preview Form
        </Button>
      </div>

      <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
        <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
          Embed on your website
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
          Add this code to your website to embed the testimonial form
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md text-xs font-mono text-gray-800 dark:text-gray-300 overflow-x-auto">
          {
            '<iframe src="https://tasty-monial.com/form/abc123" width="100%" height="500px"></iframe>'
          }
        </div>
      </div>
    </div>
  );
}
