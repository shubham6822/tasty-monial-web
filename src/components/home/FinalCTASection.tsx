import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export default function FinalCTASection() {
  return (
    <div>
      <section className="container py-16 md:py-24 bg-primary text-primary-foreground rounded-3xl">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
            Start Collecting Testimonials Today!
          </h2>
          <p className="mb-8 text-lg opacity-90 max-w-2xl mx-auto">
            Join thousands of developers and businesses who are already using
            TastyMonial to collect and showcase testimonials.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/signup">
              <Button size="lg" variant="secondary" className="h-12 px-8">
                Get Started for Free
              </Button>
            </Link>
            <Link href="/demo">
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                See How It Works
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
