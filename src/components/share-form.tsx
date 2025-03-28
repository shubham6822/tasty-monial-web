"use client";

import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Copy, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getCookie } from "cookies-next";
import { useGetProjectById } from "../hooks/useProjectApi";
import { useProjectContext } from "../context/ProjectContext";

interface ShareFormProps {
  className?: string;
}

export default function ShareForm({ className }: ShareFormProps) {
  const router = useRouter();
  const { project } = useProjectContext();
  const { data: projectData } = useGetProjectById(project?.id);

  const [copied, setCopied] = useState(false);
  const [keyCopied, setKeyCopied] = useState(false);

  const formLink = `${window.location.origin}/review/${encodeURI(
    project?.name
  )}/${project?.id}`;

  const copyToClipboard = (
    text: string,
    setCopyState: (value: boolean) => void
  ) => {
    navigator.clipboard.writeText(text);
    setCopyState(true);
    setTimeout(() => setCopyState(false), 2000);
  };

  return (
    <div className={cn("space-y-4", className)}>
      {/* Form Link Section */}
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
            onClick={() => copyToClipboard(formLink, setCopied)}
            variant="outline"
            className="border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/50"
          >
            {copied ? "Copied!" : <Copy className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Actions Section */}
      <div className="flex gap-3">
        <Button className="w-full" variant="outline">
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

      {/* Secret Key Section */}
      <div className="p-4 bg-gray-50 dark:bg-gray-900/20 rounded-lg border border-gray-100 dark:border-gray-800">
        <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
          Your Secret API Key
        </h3>
        <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
          Use this key to authenticate API requests for managing testimonials
        </p>

        <div className="flex gap-2">
          <Input
            value={projectData?.projectKey}
            readOnly
            className="text-sm bg-white dark:bg-[#1F1F23] border-gray-200 dark:border-gray-800"
          />
          <Button
            onClick={() =>
              copyToClipboard(projectData?.projectKey || "", setKeyCopied)
            }
            variant="outline"
            className="border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900/50"
          >
            {keyCopied ? "Copied!" : <Copy className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Embed Section */}
      <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
        <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
          Embed on your website
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
          Add this code to your website to embed the testimonial form
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md text-xs font-mono text-gray-800 dark:text-gray-300 overflow-x-auto">
          {"npm install @tasty-monial"}
        </div>
        <Link
          href={"https://www.npmjs.com/package/tasty-monial"}
          target="_blank"
          className="text-xs text-blue-500 dark:text-blue-400 mb-3"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
