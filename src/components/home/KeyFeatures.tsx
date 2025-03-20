import {
  Building,
  Code,
  Database,
  Laptop,
  MessageSquareQuote,
  Users,
} from "lucide-react";
import React from "react";

export default function KeyFeatures() {
  return (
    <div>
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Key Features
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to collect and showcase testimonials
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col space-y-3 rounded-lg border p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <MessageSquareQuote className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Testimonial Collection</h3>
              <p className="text-muted-foreground">
                Generate a unique link and collect testimonials from clients
                with a beautiful form.
              </p>
            </div>

            <div className="flex flex-col space-y-3 rounded-lg border p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Laptop className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Dashboard Management</h3>
              <p className="text-muted-foreground">
                View, filter, and manage all your testimonials with an intuitive
                dashboard interface.
              </p>
            </div>

            <div className="flex flex-col space-y-3 rounded-lg border p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Code className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Embeddable Widget</h3>
              <p className="text-muted-foreground">
                Display testimonials anywhere with a simple React component or
                JavaScript snippet.
              </p>
            </div>

            <div className="flex flex-col space-y-3 rounded-lg border p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Database className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold">API Access</h3>
              <p className="text-muted-foreground">
                Fetch testimonials programmatically with our RESTful API for
                custom integrations.
              </p>
            </div>

            <div className="flex flex-col space-y-3 rounded-lg border p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Team Collaboration</h3>
              <p className="text-muted-foreground">
                Invite team members to help manage and moderate testimonials
                with role-based permissions.
              </p>
            </div>

            <div className="flex flex-col space-y-3 rounded-lg border p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Building className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Customization</h3>
              <p className="text-muted-foreground">
                Choose from various themes, layouts, and display styles to match
                your brand.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
