import { Star, Users } from "lucide-react";
import React from "react";

export default function TestimonialSection() {
  return (
    <div>
      <section className="container py-16 md:py-24 bg-muted/50">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Trusted by Developers
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              See what our users are saying about TastyMonial
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-4 flex text-yellow-400">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <p className="mb-4 italic text-muted-foreground">
                &quot;TastyMonial has completely transformed how we collect and
                showcase client feedback. The setup was incredibly easy, and our
                conversion rates have improved by 30%!&quot;
              </p>
              <div className="mt-auto flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div className="ml-3">
                  <p className="font-medium">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">CTO, DevStack</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-4 flex text-yellow-400">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <p className="mb-4 italic text-muted-foreground">
                &quot;As a freelance developer, I needed a simple way to collect
                testimonials from clients. TastyMonial is exactly what I was
                looking for - it took less than 5 minutes to set up!&quot;
              </p>
              <div className="mt-auto flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div className="ml-3">
                  <p className="font-medium">Alex Chen</p>
                  <p className="text-sm text-muted-foreground">
                    Freelance Developer
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-4 flex text-yellow-400">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <p className="mb-4 italic text-muted-foreground">
                &quot;The API integration was seamless, and the customization
                options are exactly what we needed for our SaaS product. Highly
                recommended for any tech company!&quot;
              </p>
              <div className="mt-auto flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div className="ml-3">
                  <p className="font-medium">Michael Torres</p>
                  <p className="text-sm text-muted-foreground">
                    Lead Developer, CloudApp
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-center text-xl font-bold mb-8">
              Trusted by companies worldwide
            </h3>
            <div className="flex flex-wrap justify-center gap-8 opacity-70">
              <div className="h-8 w-32 bg-muted rounded flex items-center justify-center font-bold">
                ACME Inc
              </div>
              <div className="h-8 w-32 bg-muted rounded flex items-center justify-center font-bold">
                TechCorp
              </div>
              <div className="h-8 w-32 bg-muted rounded flex items-center justify-center font-bold">
                DevStack
              </div>
              <div className="h-8 w-32 bg-muted rounded flex items-center justify-center font-bold">
                CloudApp
              </div>
              <div className="h-8 w-32 bg-muted rounded flex items-center justify-center font-bold">
                CodeLabs
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
