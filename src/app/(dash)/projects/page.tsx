"use client";
import React from "react";
import ProjectCard from "../../../components/cards/ProjectCard";
import { Button } from "../../../components/ui/button";
import CreateAndEditProject from "../../../components/modals/CreateAndEditProject";
import api from "../../../lib/axiosInstance";
import { useToast } from "../../../components/ui/use-toast";
import { useGetProjects } from "../../../hooks/useProjectApi";

export default function ProjectsPage() {
  const [isCreateModalOpen, setIsCreateModalOpen] = React.useState(false);
  const [projectForm, setProjectForm] = React.useState({
    name: "",
    description: "",
  });
  const { toast } = useToast();
  const { projects } = useGetProjects();
  const handleCreateProject = async () => {
    try {
      const res = await api.post("/api/project", projectForm);
      const response = await res.data;

      if (!res) {
        toast({
          title: "Error creating Project",
          description: "Failed to create Project",
        });
      }

      if (response) {
        toast({
          title: "Project created successfully",
          description: "Project has been created successfully",
        });
        setIsCreateModalOpen(false);
        setProjectForm({ name: "", description: "" });
      }
    } catch (error) {
      console.error("Error creating Project:", error);
      toast({
        title: "Error creating Project",
        description: "Failed to create Project",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="">
      <h1 className="text-3xl  text-left flex items-center gap-3 justify-between  ">
        <div className=" items-center gap-1 text-2xl font-bold text-gray-900 dark:text-white">
          <h1>Project</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm font-normal">
            Manage your projects here
          </p>
        </div>
      </h1>

      <div className=" w-full flex justify-end mb-4">
        <Button
          className="bg-white text-primary border border-primary hover:border-primary hover:bg-primary hover:text-white"
          onClick={() => setIsCreateModalOpen(true)}
        >
          New Project
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-1 gap-2">
        {projects?.map((project, index) => (
          <ProjectCard
            key={index}
            id={index.toString()}
            name={project.name}
            description={project?.description}
            createdDate={project.createdAt || ""}
            totalTestimonial={project.totalTestimonials || 0}
          />
        ))}
      </div>

      <CreateAndEditProject
        isProjectModalOpen={isCreateModalOpen}
        setIsProjectModalOpen={setIsCreateModalOpen}
        handleProjectFormSubmit={handleCreateProject}
        projectFormMode="create"
        projectForm={projectForm}
        setProjectForm={setProjectForm}
      />
    </div>
  );
}
