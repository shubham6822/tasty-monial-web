"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { useToast } from "../components/ui/use-toast";
import { MoreHorizontal, Star } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

// Mock data for testimonials
const initialTestimonials = [
  {
    id: "1",
    name: "Alex Johnson",
    email: "alex@example.com",
    message:
      "Tasty-Monial has completely transformed how we collect and showcase customer feedback. The interface is intuitive and the results are impressive!",
    date: "2023-05-15T10:30:00Z",
    rating: 5,
  },
  {
    id: "2",
    name: "Sarah Williams",
    email: "sarah@example.com",
    message:
      "As a developer, I appreciate the clean design and ease of implementation. My clients love how professional the testimonial forms look.",
    date: "2023-05-10T14:45:00Z",
    rating: 4,
  },
  {
    id: "3",
    name: "Michael Chen",
    email: "michael@example.com",
    message:
      "The ability to quickly generate shareable links has saved me hours of work. Highly recommended for any business looking to showcase social proof.",
    date: "2023-05-05T09:15:00Z",
    rating: 5,
  },
  {
    id: "4",
    name: "Emily Rodriguez",
    email: "emily@example.com",
    message:
      "I've tried several testimonial platforms, but Tasty-Monial stands out with its developer-friendly approach and beautiful UI components.",
    date: "2023-04-28T11:20:00Z",
    rating: 5,
  },
  {
    id: "5",
    name: "David Kim",
    email: "david@example.com",
    message:
      "The customization options are exactly what I needed. I was able to match the testimonial display perfectly with my brand's aesthetic.",
    date: "2023-04-22T16:10:00Z",
    rating: 4,
  },
  {
    id: "6",
    name: "Lisa Thompson",
    email: "lisa@example.com",
    message:
      "Implementing the testimonial slider on our homepage increased our conversion rate by 15%. The social proof is powerful!",
    date: "2023-04-18T13:45:00Z",
    rating: 5,
  },
  {
    id: "7",
    name: "James Wilson",
    email: "james@example.com",
    message:
      "The API is well-documented and the components are easy to integrate. As a developer, I couldn't ask for more.",
    date: "2023-04-12T09:30:00Z",
    rating: 4,
  },
  {
    id: "8",
    name: "Sophia Garcia",
    email: "sophia@example.com",
    message:
      "Our marketing team loves the analytics dashboard. It helps us understand which testimonials resonate most with our audience.",
    date: "2023-04-05T15:20:00Z",
    rating: 5,
  },
  {
    id: "9",
    name: "Robert Martinez",
    email: "robert@example.com",
    message:
      "The form customization options are extensive. We were able to create a branded experience that matches our website perfectly.",
    date: "2023-03-30T10:15:00Z",
    rating: 4,
  },
  {
    id: "10",
    name: "Jennifer Lee",
    email: "jennifer@example.com",
    message:
      "Tasty-Monial's customer support is exceptional. They helped me implement a custom solution for our unique requirements.",
    date: "2023-03-25T14:40:00Z",
    rating: 5,
  },
  {
    id: "11",
    name: "Daniel Brown",
    email: "daniel@example.com",
    message:
      "The testimonial grid component is responsive and looks great on all devices. Our mobile users have a seamless experience.",
    date: "2023-03-20T11:30:00Z",
    rating: 4,
  },
  {
    id: "12",
    name: "Olivia Taylor",
    email: "olivia@example.com",
    message:
      "We've integrated Tasty-Monial with our CRM system using the API, and it's been a game-changer for our sales team.",
    date: "2023-03-15T09:50:00Z",
    rating: 5,
  },
];

export function TestimonialList() {
  const { toast } = useToast();
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [selectedTestimonial, setSelectedTestimonial] = useState<
    (typeof initialTestimonials)[0] | null
  >(null);
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTestimonials = testimonials.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const handleDelete = (id: string) => {
    setTestimonials(testimonials.filter((t) => t.id !== id));
    setDeleteDialogOpen(false);
    toast({
      title: "Testimonial deleted",
      description: "The testimonial has been permanently removed.",
    });

    // Adjust current page if we deleted the last item on the page
    if (currentTestimonials.length === 1 && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pageNumbers.push(1, 2, 3, 4, "ellipsis", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(
          1,
          "ellipsis",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pageNumbers.push(
          1,
          "ellipsis",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "ellipsis",
          totalPages
        );
      }
    }

    return pageNumbers;
  };

  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>Recent Testimonials</CardTitle>
              <CardDescription>
                Manage testimonials submitted by your clients
              </CardDescription>
            </div>
            <div className="mt-4 flex items-center space-x-2 sm:mt-0">
              <Select
                value={itemsPerPage.toString()}
                onValueChange={(value) => {
                  setItemsPerPage(Number.parseInt(value));
                  setCurrentPage(1); // Reset to first page when changing items per page
                }}
              >
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Show" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5 per page</SelectItem>
                  <SelectItem value="10">10 per page</SelectItem>
                  <SelectItem value="15">15 per page</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {currentTestimonials.length > 0 ? (
              currentTestimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex flex-col space-y-2 rounded-lg border p-4 transition-all hover:bg-accent/50 sm:flex-row sm:space-x-4 sm:space-y-0"
                >
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <div className="flex items-center space-x-1">
                        {Array.from({ length: testimonial.rating }).map(
                          (_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-primary text-primary"
                            />
                          )
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {testimonial.message}
                    </p>
                    <div className="flex items-center pt-2">
                      <Badge variant="outline" className="text-xs">
                        {formatDate(testimonial.date)}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center sm:ml-auto">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">More options</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() => {
                            setSelectedTestimonial(testimonial);
                            setViewDialogOpen(true);
                          }}
                        >
                          View details
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => {
                            setSelectedTestimonial(testimonial);
                            setDeleteDialogOpen(true);
                          }}
                          className="text-destructive focus:text-destructive"
                        >
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex h-40 items-center justify-center rounded-lg border border-dashed">
                <p className="text-muted-foreground">No testimonials found</p>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col-reverse sm:flex-row sm:justify-between sm:space-x-2">
          <div className="mt-4 text-sm text-muted-foreground sm:mt-0">
            Showing {indexOfFirstItem + 1} to{" "}
            {Math.min(indexOfLastItem, testimonials.length)} of{" "}
            {testimonials.length} entries
          </div>

          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  className={
                    currentPage === 1
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>

              {getPageNumbers().map((page, index) =>
                page === "ellipsis" ? (
                  <PaginationItem key={`ellipsis-${index}`}>
                    <PaginationEllipsis />
                  </PaginationItem>
                ) : (
                  <PaginationItem key={page}>
                    <PaginationLink
                      isActive={page === currentPage}
                      onClick={() => setCurrentPage(page as number)}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                )
              )}

              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </CardFooter>
      </Card>

      {/* View Testimonial Dialog */}
      <Dialog open={viewDialogOpen} onOpenChange={setViewDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Testimonial Details</DialogTitle>
            <DialogDescription>Full testimonial information</DialogDescription>
          </DialogHeader>
          {selectedTestimonial && (
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Client</h3>
                <p>{selectedTestimonial.name}</p>
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <p>{selectedTestimonial.email}</p>
              </div>
              <div>
                <h3 className="font-medium">Date</h3>
                <p>{formatDate(selectedTestimonial.date)}</p>
              </div>
              <div>
                <h3 className="font-medium">Rating</h3>
                <div className="flex items-center space-x-1">
                  {Array.from({ length: selectedTestimonial.rating }).map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    )
                  )}
                </div>
              </div>
              <div>
                <h3 className="font-medium">Message</h3>
                <p className="text-sm">{selectedTestimonial.message}</p>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setViewDialogOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Delete Testimonial</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this testimonial? This action
              cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDeleteDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() =>
                selectedTestimonial && handleDelete(selectedTestimonial.id)
              }
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
