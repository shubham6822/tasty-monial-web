"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function HomeInteractive() {
  const [activeTab, setActiveTab] = useState("react")

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <section className="container py-8 md:py-12 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">How to Use Tasty-Monial</h2>
          <p className="mt-4 text-lg text-muted-foreground">Get started in minutes with our simple integration</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="react">React</TabsTrigger>
            <TabsTrigger value="vue">Vue</TabsTrigger>
            <TabsTrigger value="vanilla">Vanilla JS</TabsTrigger>
          </TabsList>

          <TabsContent value="react" className="mt-6 space-y-6">
            {/* React content */}
            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-4 text-xl font-semibold">1. Install the package</h3>
              <div className="relative">
                <pre className="rounded-md bg-muted p-4 overflow-x-auto text-sm">
                  <code>npm install tasty-monial-react</code>
                </pre>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-2"
                  onClick={() => copyToClipboard("npm install tasty-monial-react")}
                >
                  Copy
                </Button>
              </div>
            </div>

            {/* Add other React content here */}
          </TabsContent>

          <TabsContent value="vue" className="mt-6 space-y-6">
            {/* Vue content */}
            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-4 text-xl font-semibold">1. Install the package</h3>
              <div className="relative">
                <pre className="rounded-md bg-muted p-4 overflow-x-auto text-sm">
                  <code>npm install tasty-monial-vue</code>
                </pre>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-2"
                  onClick={() => copyToClipboard("npm install tasty-monial-vue")}
                >
                  Copy
                </Button>
              </div>
            </div>

            {/* Add other Vue content here */}
          </TabsContent>

          <TabsContent value="vanilla" className="mt-6 space-y-6">
            {/* Vanilla JS content */}
            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-4 text-xl font-semibold">1. Install the package</h3>
              <div className="relative">
                <pre className="rounded-md bg-muted p-4 overflow-x-auto text-sm">
                  <code>npm install tasty-monial</code>
                </pre>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-2"
                  onClick={() => copyToClipboard("npm install tasty-monial")}
                >
                  Copy
                </Button>
              </div>
            </div>

            {/* Add other Vanilla JS content here */}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

