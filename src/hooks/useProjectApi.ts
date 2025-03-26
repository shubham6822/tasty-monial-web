import { useEffect, useState } from "react";
import { Project } from "../types/project.type";
import api from "../lib/axiosInstance";
import { useToast } from "../components/ui/use-toast";

export function useGetProjects() {
  const [projects, setProjects] = useState<Project[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { toast } = useToast();
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await api.get("/api/project");
        const response = (await res.data) as Project[];

        if (!res) {
          toast({
            title: "Error fetching Projects",
            description: "Failed to fetch Projects",
          });
        }

        if (response) {
          setProjects(response);
        }
      } catch (error: any) {
        setError(error.message || "An unexpected error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, isLoading, error };
}
