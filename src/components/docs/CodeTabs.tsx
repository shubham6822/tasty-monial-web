"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { CodeBlock } from "./CodeBlock";

interface CodeTab {
  language: string;
  label: string;
  code: string;
  filename?: string;
}

interface CodeTabsProps {
  tabs: CodeTab[];
  defaultValue?: string;
}

export function CodeTabs({ tabs, defaultValue }: CodeTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue || tabs[0].language);

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="w-full justify-start">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.language} value={tab.language}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.language} value={tab.language}>
          <CodeBlock
            language={tab.language}
            code={tab.code}
            filename={tab.filename}
          />
        </TabsContent>
      ))}
    </Tabs>
  );
}
