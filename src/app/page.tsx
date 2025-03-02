import Link from "next/link";
import { Button } from "../components/ui/button";
import { ThemeToggle } from "../components/theme-toggle";
import {
  MessageSquareQuote,
  Code,
  Laptop,
  Database,
  ArrowRight,
  Check,
  X,
  ChevronDown,
  Building,
  Users,
  Star,
} from "lucide-react";
import { HomeInteractive } from "../components/home-interactive";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { cookies } from "next/headers";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col md:px-32">
      <header className="sticky top-0 z-50 w-full pt-3 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <MessageSquareQuote className="h-6 w-6 text-primary" />
            <span>Tasty-Monial</span>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link href="/dashboard">
              <Button variant="ghost">Dashboard</Button>
            </Link>
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero section */}
        <section className="space-y-6 pb-8 pt-12 md:pb-12">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <div
              className="text-white py-1.5 sm:py-2 md:py-3 px-3 sm:px-4 md:px-6 rounded-full inline-flex items-center space-x-2 text-[13px] sm:text-sm md:text-base border border-gray-700 dark:bg-gradient-to-r from-blue-500/20 to-purple-500/20 "
              style={{ opacity: 1, transform: "none" }}
            >
              <span className=" text-black dark:text-white">
                Trusted by
                <span className="font-bold"> 100+ </span> happy users
              </span>
            </div>
            <h1 className="font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              The Easiest Way to Collect & Showcase
              <span className="text-primary"> Testimonials</span>
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Tasty-Monial helps you gather, manage, and display testimonials
              from your clients and users—effortlessly!
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-5">
              <Link href="/signup">
                <button className="focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 flex-1 bg-gradient-to-r from-blue-400 to-purple-600 text-white hover:from-blue-500 hover:to-purple-700 px-4 sm:px-6 py-3 sm:py-4 rounded-xl flex items-center justify-center space-x-2 text-sm sm:text-base font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-[220px]">
                  <span>Get Started for Free</span>
                </button>
              </Link>
            </div>
            <Image
              src={"/dashboard-light.png"}
              alt="dashhboar-image"
              width={140}
              height={140}
              className=" w-full h-full rounded-3xl border-2 shadow-xl "
              unoptimized
            />
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
              <Link href="/signup">
                <Button className="group">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
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
                  View, filter, and manage all your testimonials with an
                  intuitive dashboard interface.
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
                  Choose from various themes, layouts, and display styles to
                  match your brand.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials & Social Proof Section */}
        <section className="container py-16 md:py-24 bg-muted/50">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Trusted by Developers
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                See what our users are saying about Tasty-Monial
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
                  "Tasty-Monial has completely transformed how we collect and
                  showcase client feedback. The setup was incredibly easy, and
                  our conversion rates have improved by 30%!"
                </p>
                <div className="mt-auto flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">
                      CTO, DevStack
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
                  "As a freelance developer, I needed a simple way to collect
                  testimonials from clients. Tasty-Monial is exactly what I was
                  looking for - it took less than 5 minutes to set up!"
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
                  "The API integration was seamless, and the customization
                  options are exactly what we needed for our SaaS product.
                  Highly recommended for any tech company!"
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

        {/* Why Choose Tasty-Monial? (Comparison Section) */}
        <section className="container py-16 md:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Why Choose Tasty-Monial?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                See how we compare to manual testimonial management
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="py-4 px-6 text-left">Feature</th>
                    <th className="py-4 px-6 text-center">Tasty-Monial</th>
                    <th className="py-4 px-6 text-center">Manual Collection</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-4 px-6">
                      Automated Testimonial Collection
                    </td>
                    <td className="py-4 px-6 text-center text-green-500">
                      <Check className="mx-auto h-5 w-5" />
                    </td>
                    <td className="py-4 px-6 text-center text-red-500">
                      <X className="mx-auto h-5 w-5" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6">Embed with 1 Line of Code</td>
                    <td className="py-4 px-6 text-center text-green-500">
                      <Check className="mx-auto h-5 w-5" />
                    </td>
                    <td className="py-4 px-6 text-center text-red-500">
                      <X className="mx-auto h-5 w-5" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6">No Code Required</td>
                    <td className="py-4 px-6 text-center text-green-500">
                      <Check className="mx-auto h-5 w-5" />
                    </td>
                    <td className="py-4 px-6 text-center text-red-500">
                      <X className="mx-auto h-5 w-5" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6">Responsive Design</td>
                    <td className="py-4 px-6 text-center text-green-500">
                      <Check className="mx-auto h-5 w-5" />
                    </td>
                    <td className="py-4 px-6 text-center text-red-500">
                      <X className="mx-auto h-5 w-5" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6">Moderation Tools</td>
                    <td className="py-4 px-6 text-center text-green-500">
                      <Check className="mx-auto h-5 w-5" />
                    </td>
                    <td className="py-4 px-6 text-center text-red-500">
                      <X className="mx-auto h-5 w-5" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6">API Access</td>
                    <td className="py-4 px-6 text-center text-green-500">
                      <Check className="mx-auto h-5 w-5" />
                    </td>
                    <td className="py-4 px-6 text-center text-red-500">
                      <X className="mx-auto h-5 w-5" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
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

        {/* FAQ Section */}
        <section className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Everything you need to know about Tasty-Monial
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  How do I collect testimonials?
                </AccordionTrigger>
                <AccordionContent>
                  After signing up, you can create a testimonial collection form
                  in your dashboard. You'll receive a unique link that you can
                  share with your clients via email, social media, or embed
                  directly on your website. When clients submit testimonials,
                  they'll appear in your dashboard.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Can I customize the widget?</AccordionTrigger>
                <AccordionContent>
                  Yes! Tasty-Monial offers extensive customization options. You
                  can change colors, fonts, layouts, and display styles to match
                  your brand. Pro and Team plans offer even more advanced
                  customization options.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is there an API available?</AccordionTrigger>
                <AccordionContent>
                  Yes, Pro and Team plans include full API access. This allows
                  you to fetch testimonials programmatically and integrate them
                  into your applications or websites in custom ways. Our API is
                  RESTful and well-documented.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  How do I embed testimonials on my website?
                </AccordionTrigger>
                <AccordionContent>
                  Tasty-Monial provides several ways to embed testimonials. You
                  can use our React component, JavaScript widget, or iframe
                  embed. Simply copy the code from your dashboard and paste it
                  into your website. We also provide WordPress and Webflow
                  plugins.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Can I migrate from another platform?
                </AccordionTrigger>
                <AccordionContent>
                  We offer a simple import tool that allows you to migrate
                  testimonials from other platforms or spreadsheets. Our support
                  team is also available to help with custom migrations for
                  larger datasets.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>
                  Is Tasty-Monial GDPR compliant?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, Tasty-Monial is fully GDPR compliant. We provide all the
                  necessary tools and documentation to help you collect and
                  manage testimonials in compliance with data protection
                  regulations.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="container py-16 md:py-24 bg-primary text-primary-foreground rounded-3xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
              Start Collecting Testimonials Today!
            </h2>
            <p className="mb-8 text-lg opacity-90 max-w-2xl mx-auto">
              Join thousands of developers and businesses who are already using
              Tasty-Monial to collect and showcase testimonials.
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
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Tasty-Monial. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:underline">
              Privacy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
