"use client";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { Input } from "../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import TestimonialsTable from "../../../components/TestimonialsTable";
import DeleteConfirmationModal from "../../../components/modals/DeleteConfirmationModal";

export interface Testimonial {
  id: string;
  clientName: string;
  message: string;
  date: string;
  rating: number;
  email?: string;
  company?: string;
  status: "published" | "pending" | "rejected";
  position?: string;
  location?: string;
  avatar?: string;
  socialMedia?: {
    twitter?: string;
    linkedin?: string;
  };
  productUsed?: string;
  usageDuration?: string;
  additionalComments?: string;
}

// Sample testimonial data
const INITIAL_TESTIMONIALS: Testimonial[] = [
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

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] =
    useState<Testimonial[]>(INITIAL_TESTIMONIALS);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [ratingFilter, setRatingFilter] = useState<string>("all");

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] =
    useState<Testimonial | null>(null);

  // Filter testimonials based on search query and filters
  const filteredTestimonials = testimonials.filter((testimonial) => {
    const matchesSearch =
      testimonial.clientName
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      testimonial.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (testimonial.company &&
        testimonial.company.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesStatus =
      statusFilter === "all" || testimonial.status === statusFilter;
    const matchesRating =
      ratingFilter === "all" || testimonial.rating.toString() === ratingFilter;

    return matchesSearch && matchesStatus && matchesRating;
  });

  // Delete operation
  const handleDeleteTestimonial = (id: string) => {
    setTestimonials(testimonials.filter((t) => t.id !== id));
    setIsDeleteModalOpen(false);
    setCurrentTestimonial(null);
  };

  const openDeleteModal = (testimonial: Testimonial) => {
    setCurrentTestimonial(testimonial);
    setIsDeleteModalOpen(true);
  };

  return (
    <>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Testimonials
          </h1>
        </div>

        <div className="bg-white dark:bg-zinc-900/70 rounded-xl   backdrop-blur-xl p-6">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search testimonials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-3">
              <div className="w-40">
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SlidersHorizontal className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-40">
                <Select value={ratingFilter} onValueChange={setRatingFilter}>
                  <SelectTrigger>
                    <Filter className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Rating" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Ratings</SelectItem>
                    <SelectItem value="5">5 Stars</SelectItem>
                    <SelectItem value="4">4 Stars</SelectItem>
                    <SelectItem value="3">3 Stars</SelectItem>
                    <SelectItem value="2">2 Stars</SelectItem>
                    <SelectItem value="1">1 Star</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <TestimonialsTable
            testimonials={filteredTestimonials}
            onDelete={openDeleteModal}
          />
        </div>
      </div>
      {/* Delete Confirmation Modal */}
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setCurrentTestimonial(null);
        }}
        onConfirm={() =>
          currentTestimonial && handleDeleteTestimonial(currentTestimonial.id)
        }
        testimonial={currentTestimonial}
      />
    </>
  );
}
