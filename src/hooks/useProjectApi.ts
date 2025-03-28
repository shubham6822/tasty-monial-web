"use client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "../components/ui/use-toast";
import { Project } from "../types/project.type";
import api from "../lib/axiosInstance";

// Fetch Projects
export function useGetProjects() {
  const { toast } = useToast();

  return useQuery<Project[]>({
    queryKey: ["projects"],
    queryFn: async (): Promise<Project[]> => {
      const res = await api.get<Project[]>("/api/project");
      if (!res) {
        toast({
          title: "Error fetching Projects",
          description: "Failed to fetch Projects",
          variant: "destructive",
        });
      }
      return res.data;
    },
  });
}

export function useGetProjectById(projectId: string) {
  const { toast } = useToast();

  return useQuery<Project>({
    queryKey: ["project", projectId],
    queryFn: async (): Promise<Project> => {
      const res = await api.get<Project>(`/api/project/${projectId}`);
      if (!res) {
        toast({
          title: "Error fetching Project",
          description: "Failed to fetch Project",
          variant: "destructive",
        });
      }
      return res.data;
    },
    enabled: !!projectId,
  });
}

// Create Project
export function useCreateProject() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (project: Partial<Project>) => {
      const res = await api.post("/api/project", project);
      return res.data;
    },
    onSuccess: () => {
      toast({
        title: "Project created successfully",
        description: "Project created successfully",
      });
      queryClient.invalidateQueries({ queryKey: ["projects"] });
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

// Update Project
export function useUpdateProject() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (project: Partial<Project>) => {
      const res = await api.patch(`/api/project/${project._id}`, project);
      return res.data;
    },
    onSuccess: () => {
      toast({
        title: "Project updated successfully",
        description: "Project updated successfully",
      });
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
    onError: (error: any) => {
      toast({
        title: "Error updating Project",
        description: error.message || "An unexpected error occurred",
        variant: "destructive",
      });
    },
  });
}

// Delete Project
export function useDeleteProject() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (projectId: string) => {
      await api.delete(`/api/project/${projectId}`);
    },
    onSuccess: () => {
      toast({
        title: "Project deleted successfully",
        description: "Project deleted successfully",
      });
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
    onError: (error: any) => {
      toast({
        title: "Error deleting Project",
        description: error.message || "An unexpected error occurred",
        variant: "destructive",
      });
    },
  });
}
