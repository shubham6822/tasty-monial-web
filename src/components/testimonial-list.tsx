import { cn } from "../lib/utils";
import { Star, Trash2, Eye } from "lucide-react";
import { Button } from "../components/ui/button";
import { cookies, headers } from "next/headers";
import Link from "next/link";

interface Testimonial {
  _id: string;
  name: string;
  message: string;
  date: string;
  rating: number;
}

interface TestimonialListProps {
  testimonials?: Testimonial[];
  className?: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    clientName: "Sarah Johnson",
    message:
      "This product has completely transformed our workflow. The interface is intuitive and the support team is incredibly responsive.",
    date: "Today, 2:45 PM",
    rating: 5,
  },
  {
    id: "2",
    clientName: "Michael Chen",
    message:
      "I've tried many similar tools, but this one stands out for its simplicity and powerful features. Highly recommended for any development team.",
    date: "Today, 9:00 AM",
    rating: 4,
  },
  {
    id: "3",
    clientName: "Emily Rodriguez",
    message:
      "The API documentation is excellent and integration was seamless. Our team was up and running in less than a day.",
    date: "Yesterday",
    rating: 5,
  },
  {
    id: "4",
    clientName: "David Kim",
    message:
      "Great product with excellent performance. The only thing I'd improve is adding more customization options.",
    date: "2 days ago",
    rating: 4,
  },
];

export default async function TestimonialList({
  className,
}: TestimonialListProps) {
  const baseUrl = (await headers()).get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const res = await fetch(`${protocol}://${baseUrl}/api/testimonials`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    console.error("Failed to fetch testimonials:", res);
    return;
  }
  const testimonials = await res.json();

  return (
    <div className={cn("space-y-4", className)}>
      {testimonials.slice(0, 4).map((testimonial: Testimonial) => (
        <div
          key={testimonial._id}
          className="p-4 border-b border-gray-100 dark:border-gray-800  dark:hover:border-gray-700 transition-all duration-200"
        >
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white">
                {testimonial.name}
              </h3>
              <div className="flex items-center mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "w-4 h-4",
                      i < testimonial.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300 dark:text-gray-600"
                    )}
                  />
                ))}
                <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
                  {testimonial.date}
                </span>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Eye className="h-4 w-4" />
                <span className="sr-only">View</span>
              </Button>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
            {testimonial.message}
          </p>
        </div>
      ))}
      <Link href="/testimonial">
        <Button className="w-full mt-4" variant="outline">
          View All Testimonials
        </Button>
      </Link>
    </div>
  );
}
