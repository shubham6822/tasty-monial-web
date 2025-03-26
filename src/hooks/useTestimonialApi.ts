"use client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "../components/ui/use-toast";
import api from "../lib/axiosInstance";
import { Testimonial } from "../types/testimonial.type";

// Fetch Testimonials
export function useGetTestimonials() {
  const { toast } = useToast();

  return useQuery<Testimonial[]>({
    queryKey: ["testimonial"],
    queryFn: async (): Promise<Testimonial[]> => {
      const res = await api.get<Testimonial[]>("/api/testimonials");
      if (!res) {
        toast({
          title: "Error fetching Testimonials",
          description: "Failed to fetch Testimonials",
          variant: "destructive",
        });
      }
      return res.data;
    },
  });
}

// Create Project
export function useCreateTestimonial() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (project: Partial<Testimonial>) => {
      const res = await api.post("/api/testimonials", project);
      return res.data;
    },
    onSuccess: () => {
      toast({
        title: "Project created successfully",
        description: "Project created successfully",
      });
      queryClient.invalidateQueries({ queryKey: ["testimonial"] });
    },
    onError: (error: any) => {
      toast({
        title: "Error creating Project",
        description: error.message || "An unexpected error occurred",
        variant: "destructive",
      });
    },
  });
}
