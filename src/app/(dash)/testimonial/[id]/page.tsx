"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Star,
  ArrowLeft,
  Calendar,
  Mail,
  Building,
  MapPin,
  Twitter,
  Linkedin,
  Package,
  Clock,
  Check,
  X,
  Trash2,
} from "lucide-react";
import Image from "next/image";
import { Button } from "../../../../components/ui/button";
import { Badge } from "../../../../components/ui/badge";
import { cn } from "../../../../lib/utils";
import DeleteConfirmationModal from "../../../../components/modals/DeleteConfirmationModal";

// Sample testimonial data - same as in testimonials-page.tsx
export type Testimonial = {
  id: string;
  clientName: string;
  message: string;
  date: string;
  rating: number;
  email: string;
  company: string;
  status: "published" | "pending" | "rejected";
  position: string;
  location: string;
  avatar: string;
  socialMedia: {
    twitter?: string;
    linkedin?: string;
  };
  productUsed: string;
  usageDuration: string;
  additionalComments: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    clientName: "Sarah Johnson",
    message:
      "This product has completely transformed our workflow. The interface is intuitive and the support team is incredibly responsive. We've been able to reduce our project completion time by 30% since implementing this solution.",
    date: "2023-05-15",
    rating: 5,
    email: "sarah.j@example.com",
    company: "Design Co.",
    status: "published",
    position: "Creative Director",
    location: "San Francisco, CA",
    avatar: "/placeholder.svg?height=200&width=200",
    socialMedia: {
      twitter: "@sarahjdesign",
      linkedin: "sarahjohnson",
    },
    productUsed: "Enterprise Plan",
    usageDuration: "1 year",
    additionalComments:
      "The onboarding process was smooth and the customer success team was very helpful in getting us set up quickly.",
  },
  {
    id: "2",
    clientName: "Michael Chen",
    message:
      "I've tried many similar tools, but this one stands out for its simplicity and powerful features. Highly recommended for any development team. The API documentation is comprehensive and the integration was seamless with our existing systems.",
    date: "2023-05-10",
    rating: 4,
    email: "michael.c@example.com",
    company: "Tech Solutions Inc.",
    status: "published",
    position: "Lead Developer",
    location: "Austin, TX",
    avatar: "/placeholder.svg?height=200&width=200",
    socialMedia: {
      twitter: "@michaelcdev",
      linkedin: "michaelchen",
    },
    productUsed: "Team Plan",
    usageDuration: "6 months",
    additionalComments:
      "Would love to see more advanced analytics features in future updates.",
  },
  {
    id: "3",
    clientName: "Emily Rodriguez",
    message:
      "The API documentation is excellent and integration was seamless. Our team was up and running in less than a day. The webhooks functionality has been particularly useful for our automation workflows.",
    date: "2023-05-05",
    rating: 5,
    email: "emily.r@example.com",
    company: "WebDev Agency",
    status: "published",
    position: "CTO",
    location: "Chicago, IL",
    avatar: "/placeholder.svg?height=200&width=200",
    socialMedia: {
      linkedin: "emilyrodriguez",
    },
    productUsed: "Enterprise Plan",
    usageDuration: "2 years",
    additionalComments:
      "The recent updates to the dashboard have made it even more user-friendly.",
  },
  {
    id: "4",
    clientName: "David Kim",
    message:
      "Great product with excellent performance. The only thing I'd improve is adding more customization options. Otherwise, it's been a reliable tool for our daily operations and has significantly improved our team's productivity.",
    date: "2023-04-28",
    rating: 4,
    email: "david.k@example.com",
    company: "Startup Labs",
    status: "published",
    position: "Product Manager",
    location: "Seattle, WA",
    avatar: "/placeholder.svg?height=200&width=200",
    socialMedia: {
      twitter: "@davidkpm",
      linkedin: "davidkim",
    },
    productUsed: "Pro Plan",
    usageDuration: "8 months",
    additionalComments:
      "The mobile app could use some improvements, but the web version is excellent.",
  },
  {
    id: "5",
    clientName: "Jessica Williams",
    message:
      "The customer service is outstanding. Every time I've had a question, the team has responded quickly and effectively. This level of support is rare these days and makes a huge difference in our experience with the product.",
    date: "2023-04-20",
    rating: 5,
    email: "jessica.w@example.com",
    company: "Marketing Experts",
    status: "pending",
    position: "Marketing Director",
    location: "New York, NY",
    avatar: "/placeholder.svg?height=200&width=200",
    socialMedia: {
      twitter: "@jessicawmktg",
      linkedin: "jessicawilliams",
    },
    productUsed: "Team Plan",
    usageDuration: "3 months",
    additionalComments:
      "Looking forward to the upcoming features mentioned in the product roadmap.",
  },
  {
    id: "6",
    clientName: "Robert Taylor",
    message:
      "We've seen a 30% increase in productivity since implementing this solution. The automation features are game-changing. Our team can now focus on strategic initiatives instead of repetitive tasks.",
    date: "2023-04-15",
    rating: 5,
    email: "robert.t@example.com",
    company: "Efficiency Corp",
    status: "pending",
    position: "Operations Manager",
    location: "Denver, CO",
    avatar: "/placeholder.svg?height=200&width=200",
    socialMedia: {
      linkedin: "roberttaylor",
    },
    productUsed: "Enterprise Plan",
    usageDuration: "1 year",
    additionalComments:
      "The ROI on this product has been exceptional. We've already recovered our investment in just a few months.",
  },
  {
    id: "7",
    clientName: "Amanda Garcia",
    message:
      "The platform is good but could use some improvements in the reporting section. Otherwise, it meets our needs well. The dashboard is intuitive and the learning curve was minimal for our team members.",
    date: "2023-04-10",
    rating: 3,
    email: "amanda.g@example.com",
    company: "Data Insights",
    status: "rejected",
    position: "Data Analyst",
    location: "Boston, MA",
    avatar: "/placeholder.svg?height=200&width=200",
    socialMedia: {
      twitter: "@amandagdata",
      linkedin: "amandagarcia",
    },
    productUsed: "Pro Plan",
    usageDuration: "4 months",
    additionalComments:
      "Would appreciate more advanced data visualization options in future updates.",
  },
  {
    id: "8",
    clientName: "Thomas Wilson",
    message:
      "Exceptional value for the price. We've tried premium alternatives that don't offer half the features. The platform has become an essential part of our daily operations and has streamlined many of our processes.",
    date: "2023-04-05",
    rating: 5,
    email: "thomas.w@example.com",
    company: "Budget Solutions",
    status: "published",
    position: "Finance Director",
    location: "Miami, FL",
    avatar: "/placeholder.svg?height=200&width=200",
    socialMedia: {
      linkedin: "thomaswilson",
    },
    productUsed: "Team Plan",
    usageDuration: "9 months",
    additionalComments:
      "The cost-effectiveness of this solution has allowed us to allocate resources to other areas of our business.",
  },
];

export default function TestimonialDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const [testimonial, setTestimonial] = useState<Testimonial | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Find the testimonial with the matching ID
    const foundTestimonial = TESTIMONIALS.find((t) => t.id === params.id);

    if (foundTestimonial) {
      setTestimonial(foundTestimonial);
    } else {
      // Redirect to testimonials page if testimonial not found
      router.push("/testimonial");
    }
  }, [params.id, router]);

  const handleDelete = () => {
    // In a real app, you would call an API to delete the testimonial
    // For now, we'll just redirect back to the testimonials page
    setIsDeleteModalOpen(false);
    router.push("/testimonial");
  };

  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
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

  if (!testimonial) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Loading testimonial...
          </h2>
        </div>
      </div>
    );
  }

  const StatusIcon = statusConfig[testimonial.status].icon;

  return (
    <>
      <div className="space-y-6">
        <div className=" items-center ">
          <Button variant="outline" onClick={() => router.push("/testimonial")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Testimonials
          </Button>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white pt-6">
            Testimonial Details
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Client Information Card */}
          <div className="bg-white dark:bg-zinc-900/70 rounded-xl border border-zinc-100 dark:border-zinc-800 shadow-sm backdrop-blur-xl p-6">
            <div className="flex flex-col items-center text-center mb-6">
              <div className="relative mb-4">
                <Image
                  src={
                    testimonial.avatar ||
                    "/placeholder.svg?height=100&width=100"
                  }
                  alt={testimonial.clientName}
                  width={100}
                  height={100}
                  className="rounded-full object-cover"
                />
                <div className="absolute -bottom-1 -right-1">
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
                </div>
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                {testimonial.clientName}
              </h2>
              {testimonial.position && (
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {testimonial.position}
                </p>
              )}
              {testimonial.company && (
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.company}
                </p>
              )}
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <Calendar className="h-4 w-4 text-gray-400" />
                <span>Submitted on {formatDate(testimonial.date)}</span>
              </div>

              {testimonial.email && (
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <span>{testimonial.email}</span>
                </div>
              )}

              {testimonial.company && (
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <Building className="h-4 w-4 text-gray-400" />
                  <span>{testimonial.company}</span>
                </div>
              )}

              {testimonial.location && (
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span>{testimonial.location}</span>
                </div>
              )}

              {testimonial.socialMedia && (
                <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                    Social Media
                  </h3>
                  <div className="space-y-2">
                    {testimonial.socialMedia.twitter && (
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <Twitter className="h-4 w-4 text-blue-400" />
                        <span>{testimonial.socialMedia.twitter}</span>
                      </div>
                    )}
                    {testimonial.socialMedia.linkedin && (
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <Linkedin className="h-4 w-4 text-blue-600" />
                        <span>{testimonial.socialMedia.linkedin}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                <Button
                  variant="destructive"
                  className="w-full"
                  onClick={() => setIsDeleteModalOpen(true)}
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete Testimonial
                </Button>
              </div>
            </div>
          </div>

          {/* Testimonial Content Card */}
          <div className="lg:col-span-2 bg-white dark:bg-zinc-900/70 rounded-xl border border-zinc-100 dark:border-zinc-800 shadow-sm backdrop-blur-xl p-6">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "w-5 h-5",
                        i < testimonial.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300 dark:text-gray-600"
                      )}
                    />
                  ))}
                  <span className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                    {testimonial.rating} out of 5
                  </span>
                </div>
              </div>

              <div className="prose dark:prose-invert max-w-none">
                <blockquote className="text-lg italic text-gray-700 dark:text-gray-300 border-l-4 border-gray-300 dark:border-gray-700 pl-4 py-2">
                  &quot;{testimonial.message}&quot;
                </blockquote>
              </div>
            </div>

            <div className="space-y-6 mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-zinc-800/50 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3 flex items-center">
                    <Package className="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                    Product Information
                  </h3>
                  <div className="space-y-2">
                    {testimonial.productUsed && (
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Product/Plan:
                        </span>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {testimonial.productUsed}
                        </span>
                      </div>
                    )}
                    {testimonial.usageDuration && (
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Usage Duration:
                        </span>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {testimonial.usageDuration}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-zinc-800/50 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                    Testimonial Status
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Current Status:
                      </span>
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
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Submission Date:
                      </span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {formatDate(testimonial.date)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {testimonial.additionalComments && (
                <div className="bg-gray-50 dark:bg-zinc-800/50 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                    Additional Comments
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {testimonial.additionalComments}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
        testimonial={testimonial}
      />
    </>
  );
}
