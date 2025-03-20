import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Check, X } from "lucide-react";

export default function PricingSection() {
  return (
    <div>
      {" "}
      <section className="container py-16 md:py-24 bg-muted/50">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Choose the plan that works best for you
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-4">
                <h3 className="text-xl font-bold">Free</h3>
                <div className="mt-2 flex items-baseline">
                  <span className="text-3xl font-bold">$0</span>
                  <span className="ml-1 text-muted-foreground">/month</span>
                </div>
                <p className="mt-4 text-muted-foreground">
                  Perfect for individuals and small projects
                </p>
              </div>
              <ul className="mb-8 space-y-3">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Up to 10 testimonials</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Basic widget customization</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Email support</span>
                </li>
                <li className="flex items-center text-muted-foreground">
                  <X className="mr-2 h-4 w-4 text-red-500" />
                  <span>API access</span>
                </li>
                <li className="flex items-center text-muted-foreground">
                  <X className="mr-2 h-4 w-4 text-red-500" />
                  <span>Team access</span>
                </li>
              </ul>
              <div className="mt-auto">
                <Link href="/signup">
                  <Button className="w-full">Get Started</Button>
                </Link>
              </div>
            </div>

            <div className="flex flex-col rounded-lg border bg-card p-6 shadow-sm relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-bold">Pro</h3>
                <div className="mt-2 flex items-baseline">
                  <span className="text-3xl font-bold">$19</span>
                  <span className="ml-1 text-muted-foreground">/month</span>
                </div>
                <p className="mt-4 text-muted-foreground">
                  For growing businesses and freelancers
                </p>
              </div>
              <ul className="mb-8 space-y-3">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Unlimited testimonials</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Advanced customization</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>API access</span>
                </li>
                <li className="flex items-center text-muted-foreground">
                  <X className="mr-2 h-4 w-4 text-red-500" />
                  <span>Team access</span>
                </li>
              </ul>
              <div className="mt-auto">
                <Link href="/signup">
                  <Button className="w-full">Get Started</Button>
                </Link>
              </div>
            </div>

            <div className="flex flex-col rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-4">
                <h3 className="text-xl font-bold">Team</h3>
                <div className="mt-2 flex items-baseline">
                  <span className="text-3xl font-bold">$49</span>
                  <span className="ml-1 text-muted-foreground">/month</span>
                </div>
                <p className="mt-4 text-muted-foreground">
                  For teams and larger organizations
                </p>
              </div>
              <ul className="mb-8 space-y-3">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Unlimited testimonials</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Advanced customization</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>API access</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Up to 5 team members</span>
                </li>
              </ul>
              <div className="mt-auto">
                <Link href="/signup">
                  <Button className="w-full">Get Started</Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Need a custom plan?{" "}
              <Link href="/contact" className="text-primary hover:underline">
                Contact us
              </Link>{" "}
              for enterprise pricing.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
