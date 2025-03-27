"use client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "../components/ui/use-toast";
import api from "../lib/axiosInstance";
import { Testimonial } from "../types/testimonial.type";

// Fetch Testimonials
export function useGetTestimonials(projectId?: string) {
  const { toast } = useToast();

  return useQuery<Testimonial[]>({
    queryKey: ["testimonial", projectId],
    queryFn: async (): Promise<Testimonial[]> => {
      const res = await api.get<Testimonial[]>(
        `/api/testimonials?projectId=${projectId}`
      );
      if (!res) {
        toast({
          title: "Error fetching Testimonials",
          description: "Failed to fetch Testimonials",
          variant: "destructive",
        });
      }
      return res.data;
    },
    enabled: !!projectId,
  });
}

// Create Project
export function useCreateTestimonial() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (testimonial: Partial<Testimonial>) => {
      const res = await fetch("/api/testimonials", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(testimonial),
      });
      const data = await res.json();
      return data;
    },
    onSuccess: () => {
      toast({
        title: "Thank you for your feedback",
      });
      queryClient.invalidateQueries({ queryKey: ["testimonial"] });
    },
    onError: (error: any) => {
      toast({
        title: "Something went wrong",
        variant: "destructive",
      });
    },
  });
}
