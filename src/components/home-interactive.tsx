"use client";

import { useState } from "react";
import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";

export function HomeInteractive() {
  const [activeTab, setActiveTab] = useState("step1");

  return (
    <section className="container py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Three simple steps to start collecting and showcasing testimonials
          </p>
        </div>

        <Tabs
          defaultValue="step1"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger
              value="step1"
              className={cn(
                "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
                activeTab === "step1"
                  ? "bg-primary text-primary-foreground"
                  : ""
              )}
            >
              <div className="flex items-center">
                <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                  1
                </div>
                <span className="hidden sm:inline">Sign Up</span>
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="step2"
              className={cn(
                "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
                activeTab === "step2"
                  ? "bg-primary text-primary-foreground"
                  : ""
              )}
            >
              <div className="flex items-center">
                <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                  2
                </div>
                <span className="hidden sm:inline">Collect</span>
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="step3"
              className={cn(
                "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
                activeTab === "step3"
                  ? "bg-primary text-primary-foreground"
                  : ""
              )}
            >
              <div className="flex items-center">
                <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                  3
                </div>
                <span className="hidden sm:inline">Showcase</span>
              </div>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="step1" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Sign Up & Get a Dashboard</CardTitle>
                <CardDescription>
                  Create your account and access your personal dashboard
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-lg border bg-card p-4">
                    <h3 className="mb-2 font-medium">Create an Account</h3>
                    <p className="text-sm text-muted-foreground">
                      Sign up for free with your email or connect with
                      Google/GitHub
                    </p>
                  </div>
                  <div className="rounded-lg border bg-card p-4">
                    <h3 className="mb-2 font-medium">Access Dashboard</h3>
                    <p className="text-sm text-muted-foreground">
                      Get an overview of all your testimonials in one place
                    </p>
                  </div>
                </div>
                <div className="rounded-lg bg-muted p-4">
                  <p className="text-sm">
                    <strong>Pro Tip:</strong> Set up your profile and company
                    details to personalize your testimonial collection forms.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="step2" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Share Your Testimonial Form</CardTitle>
                <CardDescription>
                  Generate a shareable link for your clients
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-lg border bg-card p-4">
                    <h3 className="mb-2 font-medium">Create a Form</h3>
                    <p className="text-sm text-muted-foreground">
                      Customize your testimonial collection form with your
                      branding
                    </p>
                  </div>
                  <div className="rounded-lg border bg-card p-4">
                    <h3 className="mb-2 font-medium">Share the Link</h3>
                    <p className="text-sm text-muted-foreground">
                      Send the form to clients via email, social media, or embed
                      it on your site
                    </p>
                  </div>
                </div>
                <div className="rounded-lg bg-muted p-4">
                  <p className="text-sm">
                    <strong>Pro Tip:</strong> Add custom fields to collect
                    specific information relevant to your business.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="step3" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Showcase Testimonials</CardTitle>
                <CardDescription>
                  Display testimonials on your website with a simple widget
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-lg border bg-card p-4">
                    <h3 className="mb-2 font-medium">Choose a Display Style</h3>
                    <p className="text-sm text-muted-foreground">
                      Select from various layouts: slider, grid, or cards
                    </p>
                  </div>
                  <div className="rounded-lg border bg-card p-4">
                    <h3 className="mb-2 font-medium">Embed the Widget</h3>
                    <p className="text-sm text-muted-foreground">
                      Copy and paste a simple code snippet to your website
                    </p>
                  </div>
                </div>
                <div className="rounded-lg bg-muted p-4">
                  <p className="text-sm">
                    <strong>Pro Tip:</strong> Use the API to create custom
                    integrations or fetch testimonials programmatically.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
