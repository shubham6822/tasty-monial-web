"use client";

import { useState, FormEvent } from "react";
import { MessageSquareQuote, Star } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from "../../../../components/ui/card";
import { Textarea } from "../../../../components/ui/textarea";
import { cn } from "../../../../lib/utils";
import { Button } from "../../../../components/ui/button";
import { Label } from "../../../../components/ui/label";
import { Input } from "../../../../components/ui/input";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { useCreateTestimonial } from "../../../../hooks/useTestimonialApi";

const TeamOptions = [
  { value: "None", label: "None" },
  { value: "Founder", label: "Founder" },
  { value: "CEO", label: "CEO" },
  { value: "Freelancer", label: "Freelancer" },
  { value: "Leadership", label: "Leadership" },
  { value: "Developer", label: "Developer" },
  { value: "Designer", label: "Designer" },
  { value: "Marketing", label: "Marketing" },
  { value: "Sales", label: "Sales" },
  { value: "Support", label: "Support" },
  { value: "Other", label: "Other" },
];

export default function SubmitTestimonialPage({
  params,
}: {
  params: { project: string[] };
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [team, setTeam] = useState(TeamOptions[0].value);

  const createTestimonial = useCreateTestimonial();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (rating === 0) return;

    setIsSubmitting(true);
    const body = {
      name: (e.currentTarget.elements.namedItem("name") as HTMLInputElement)
        .value,
      tagline: (
        e.currentTarget.elements.namedItem("tagline") as HTMLInputElement
      ).value,
      email: (e.currentTarget.elements.namedItem("email") as HTMLInputElement)
        .value,
      company: (
        e.currentTarget.elements.namedItem("company") as HTMLInputElement
      ).value,
      team: team,
      rating: rating,
      message: (
        e.currentTarget.elements.namedItem("message") as HTMLTextAreaElement
      ).value,
      projectId: params?.project[1],
    };
    createTestimonial
      .mutateAsync(body)
      .then(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      })
      .catch(() => {
        setIsSubmitting(false);
      });
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
          <CardFooter className="flex flex-col">
            <p className="text-sm text-gray-400 pt-4">
              Powered by{" "}
              <Link href={"/"} className="dark:text-white text-black">
                Tastymonial.in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="container flex min-h-screen flex-col items-center justify-center">
      <Card className="w-full max-w-md animate-in">
        <CardHeader>
          <CardTitle className="text-2xl">Share Your Experience</CardTitle>
          <CardDescription>
            We appreciate your feedback! Please share your thoughts about our
            services.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" placeholder="John Doe" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="tagline">Tagline</Label>
              <Input id="tagline" placeholder="Head of TastyMonial" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="company">Company</Label>
              <Input id="company" placeholder="Ex. TastyMonial" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="team">Team</Label>
              <Select value={team} onValueChange={(value) => setTeam(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  {TeamOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
                          ? "text-yellow-400 fill-yellow-400"
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
          <CardFooter className="flex flex-col">
            <Button
              type="submit"
              className="w-full "
              disabled={isSubmitting || rating === 0}
            >
              {isSubmitting ? "Submitting..." : "Submit Testimonial"}
            </Button>
            <p className="text-sm text-gray-400 pt-4">
              Powered by{" "}
              <Link href={"/"} className="dark:text-white text-black">
                Tastymonial.in
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
