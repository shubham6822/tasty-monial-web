import { MessageSquareQuote } from "lucide-react";
import React from "react";

export default function FeatureSection() {
  return (
    <div>
      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
            <div className="rounded-full bg-primary/10 p-3">
              <MessageSquareQuote className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Easy Collection</h3>
            <p className="text-center text-muted-foreground">
              Create shareable forms to collect testimonials from your clients
              with ease.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
            <div className="rounded-full bg-primary/10 p-3">
              <MessageSquareQuote className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Simple Management</h3>
            <p className="text-center text-muted-foreground">
              Organize, filter, and manage all your testimonials in one place.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
            <div className="rounded-full bg-primary/10 p-3">
              <MessageSquareQuote className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Developer Friendly</h3>
            <p className="text-center text-muted-foreground">
              Built for developers with a clean UI and intuitive experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
