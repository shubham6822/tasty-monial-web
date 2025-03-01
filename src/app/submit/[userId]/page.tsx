"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { MessageSquareQuote, Star } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from "../../../components/ui/card";
import { Textarea } from "../../../components/ui/textarea";
import { cn } from "../../../lib/utils";
import { Button } from "../../../components/ui/button";
import { ThemeToggle } from "../../../components/theme-toggle";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";

export default function SubmitTestimonialPage({
  params,
}: {
  params: { userId: string };
}) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (rating === 0) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="container flex min-h-screen flex-col items-center justify-center">
        <Card className="w-full max-w-md animate-in">
          <CardHeader>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
              <MessageSquareQuote className="h-10 w-10 text-primary" />
            </div>
            <CardTitle className="text-center text-2xl">Thank You!</CardTitle>
            <CardDescription className="text-center">
              Your testimonial has been submitted successfully.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button className="w-full" onClick={() => router.refresh()}>
              Submit Another Testimonial
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="container flex min-h-screen flex-col items-center justify-center">
      <div className="absolute right-4 top-4 md:right-8 md:top-8">
        <ThemeToggle />
      </div>
      <Card className="w-full max-w-md animate-in">
        <CardHeader>
          <CardTitle className="text-2xl">Share Your Experience</CardTitle>
          <CardDescription>
            We appreciate your feedback! Please share your thoughts about our
            services.
          </CardDescription>
          <CardDescription>
            Submitting as user: <strong>{params.userId}</strong>
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" placeholder="John Doe" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email (Optional)</Label>
              <Input id="email" type="email" placeholder="john@example.com" />
            </div>
            <div className="grid gap-2">
              <Label>Rating</Label>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    type="button"
                    className="rounded-md p-1 focus:outline-none"
                    onClick={() => setRating(value)}
                    onMouseEnter={() => setHoveredRating(value)}
                    onMouseLeave={() => setHoveredRating(0)}
                  >
                    <Star
                      className={cn(
                        "h-6 w-6 transition-all",
                        (
                          hoveredRating
                            ? value <= hoveredRating
                            : value <= rating
                        )
                          ? "fill-primary text-primary"
                          : "text-muted-foreground"
                      )}
                    />
                  </button>
                ))}
              </div>
              {rating === 0 && (
                <p className="text-red-500 text-sm">
                  Please select a rating before submitting.
                </p>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Your Testimonial</Label>
              <Textarea
                id="message"
                placeholder="Share your experience with our product or service..."
                className="min-h-[120px]"
                required
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting || rating === 0}
            >
              {isSubmitting ? "Submitting..." : "Submit Testimonial"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
