"use client";

import {
  Star,
  Trash2,
  Eye,
  MoreHorizontal,
  Check,
  Clock,
  X,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { Testimonial } from "./TestimonialsPage";

interface TestimonialsTableProps {
  testimonials: Testimonial[];
  onDelete: (testimonial: Testimonial) => void;
}

export default function TestimonialsTable({
  testimonials,
  onDelete,
}: TestimonialsTableProps) {
  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Status badge configuration
  const statusConfig = {
    published: {
      label: "Published",
      icon: Check,
      className:
        "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
    },
    pending: {
      label: "Pending",
      icon: Clock,
      className:
        "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
    },
    rejected: {
      label: "Rejected",
      icon: X,
      className: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
    },
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-800">
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Client
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Testimonial
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Rating
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Status
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Date
            </th>
            <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
          {testimonials.length > 0 ? (
            testimonials.map((testimonial) => {
              const StatusIcon = statusConfig[testimonial.status].icon;

              return (
                <tr
                  key={testimonial.id}
                  className="hover:bg-gray-50 dark:hover:bg-zinc-800/50"
                >
                  <td className="px-4 py-4 whitespace-nowrap">
                    <Link href={`/testimonial/${testimonial.id}`}>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {testimonial.clientName}
                        </span>
                        {testimonial.company && (
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {testimonial.company}
                          </span>
                        )}
                      </div>
                    </Link>
                  </td>
                  <td className="px-4 py-4">
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                      {testimonial.message}
                    </p>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center">
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
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <Badge
                      variant="outline"
                      className={cn(
                        "flex items-center gap-1",
                        statusConfig[testimonial.status].className
                      )}
                    >
                      <StatusIcon className="h-3 w-3" />
                      <span>{statusConfig[testimonial.status].label}</span>
                    </Badge>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                    {formatDate(testimonial.date)}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end gap-2">
                      <Link href={`/testimonial/${testimonial.id}`}>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Eye className="h-4 w-4" />
                          <span className="sr-only">View</span>
                        </Button>
                      </Link>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20"
                        onClick={() => onDelete(testimonial)}
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                      {/* <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">More options</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem asChild>
                            <Link href={`/testimonial/${testimonial.id}`}>
                              <Eye className="mr-2 h-4 w-4" />
                              <span>View Details</span>
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => onDelete(testimonial)}
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            <span>Delete</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu> */}
                    </div>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td
                colSpan={6}
                className="px-4 py-8 text-center text-sm text-gray-500 dark:text-gray-400"
              >
                No testimonials found. Try adjusting your filters.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {testimonials.length > 0 && (
        <div className="flex items-center justify-between border-t border-gray-200 dark:border-gray-800 px-4 py-3 mt-4">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Showing <span className="font-medium">{testimonials.length}</span>{" "}
            testimonials
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled={testimonials.length < 10}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              disabled={testimonials.length < 10}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
