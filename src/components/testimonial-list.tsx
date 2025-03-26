import { cn, formatDate } from "../lib/utils";
import { Star, Trash2, Eye } from "lucide-react";
import { Button } from "../components/ui/button";
import Link from "next/link";
import api from "../lib/axiosInstance";
import { useGetTestimonials } from "../hooks/useTestimonialApi";
import { Testimonial } from "../types/testimonial.type";

interface TestimonialListProps {
  className?: string;
}

export default function TestimonialList({ className }: TestimonialListProps) {
  const { data: testimonials } = useGetTestimonials();

  if (testimonials?.length === 0) {
    return (
      <div className="flex justify-center items-center h-48">
        No testimonials found
      </div>
    );
  }

  return (
    <div className={cn("space-y-4", className)}>
      {testimonials?.slice(0, 4).map((testimonial: Testimonial) => (
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
                  {formatDate(testimonial.createdAt)}
                </span>
              </div>
            </div>
            <div className="flex space-x-2">
              <Link
                href={`/testimonial/${testimonial._id}`}
                className="h-8 w-8"
              >
                <Eye className="h-4 w-4" />
                <span className="sr-only">View</span>
              </Link>
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
