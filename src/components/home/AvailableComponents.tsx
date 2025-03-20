import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight, Code, Database, Laptop } from "lucide-react";

export default function AvailableComponents() {
  return (
    <div>
      <section className="container py-8 md:py-12 lg:py-24 bg-muted/50">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Available Components
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Choose from multiple testimonial display options
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Code className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Testimonial Slider</h3>
              <p className="mb-4 text-muted-foreground">
                A responsive carousel slider that showcases testimonials one at
                a time with smooth transitions.
              </p>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  Responsive
                </span>
                <span className="text-sm text-muted-foreground">Animated</span>
                <span className="text-sm text-muted-foreground">
                  Customizable
                </span>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Laptop className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Testimonial Grid</h3>
              <p className="mb-4 text-muted-foreground">
                Display multiple testimonials in a responsive grid layout with
                filtering options.
              </p>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  Grid Layout
                </span>
                <span className="text-sm text-muted-foreground">
                  Filterable
                </span>
                <span className="text-sm text-muted-foreground">Paginated</span>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Database className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Testimonial Form</h3>
              <p className="mb-4 text-muted-foreground">
                Embed a customizable form to collect testimonials directly on
                your website.
              </p>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  Customizable
                </span>
                <span className="text-sm text-muted-foreground">Validated</span>
                <span className="text-sm text-muted-foreground">
                  Multi-step
                </span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/signup">
              <Button className="group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
