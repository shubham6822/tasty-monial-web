import Link from "next/link";
import { Button } from "../components/ui/button";
import { ThemeToggle } from "../components/theme-toggle";
import {
  MessageSquareQuote,
  Code,
  Laptop,
  Database,
  ArrowRight,
} from "lucide-react";
import { HomeInteractive } from "../components/home-interactive";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <MessageSquareQuote className="h-6 w-6 text-primary" />
            <span>Tasty-Monial</span>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/sign-up">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero section */}
        <section className="space-y-6 pb-8 pt-12 md:pb-12 md:pt-24 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              Collect and showcase
              <span className="text-primary"> testimonials</span> with ease
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              A modern, developer-friendly platform for managing testimonials.
              Create forms, collect feedback, and showcase your success stories.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/sign-up">
                <Button size="lg" className="h-12 px-8">
                  Get Started
                </Button>
              </Link>
              <Link href="/login">
                <Button size="lg" variant="outline" className="h-12 px-8">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features section */}
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

        {/* How to Use section (now using the Client Component) */}
        <HomeInteractive />

        {/* Available Components section */}
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
                  A responsive carousel slider that showcases testimonials one
                  at a time with smooth transitions.
                </p>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">
                    Responsive
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Animated
                  </span>
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
                  <span className="text-sm text-muted-foreground">
                    Paginated
                  </span>
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
                  <span className="text-sm text-muted-foreground">
                    Validated
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Multi-step
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/sign-up">
                <Button className="group">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Tasty-Monial. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
