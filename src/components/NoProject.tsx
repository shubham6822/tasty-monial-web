"use client";

import { FolderPlus, Folder } from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import React from "react";
import CreateAndEditProject from "./modals/CreateAndEditProject";
import { useCreateProject } from "../hooks/useProjectApi";
import { Project } from "../types/project.type";

interface NoProjectsProps {
  className?: string;
}

export default function NoProjects({ className }: NoProjectsProps) {
  const [isCreateModalOpen, setIsCreateModalOpen] = React.useState(false);
  const [projectForm, setProjectForm] = React.useState({
    name: "",
    description: "",
  });

  const createProjectMutation = useCreateProject();

  const onCreateProject = async () => {
    const res = (await createProjectMutation.mutateAsync(
      projectForm
    )) as Project;
    localStorage.setItem("projectId", res._id);
    setIsCreateModalOpen(false);
    setProjectForm({ name: "", description: "" });
  };
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center p-8 rounded-lg border border-dashed border-border",
        "min-h-[400px] bg-muted/20",
        className
      )}
    >
      <div className="space-y-6 max-w-md">
        {/* Illustration */}
        <div className="relative mx-auto w-32 h-32 mb-2">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center">
              <Folder className="h-10 w-10 text-muted-foreground/60" />
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2">
            <div className="w-10 h-10 bg-background rounded-full border border-border flex items-center justify-center shadow-sm">
              <FolderPlus className="h-5 w-5 text-primary" />
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold">No projects yet</h3>
          <p className="text-muted-foreground">
            You haven&apos;t created any projects yet. Projects help you
            organize testimonials for different websites or campaigns.
          </p>
        </div>

        {/* Action button */}
        <div className="pt-4">
          <Button
            onClick={() => setIsCreateModalOpen(true)}
            size="lg"
            className="animate-pulse"
          >
            <FolderPlus className="mr-2 h-5 w-5" />
            Create Your First Project
          </Button>
        </div>

        {/* Help text */}
        <p className="text-xs text-muted-foreground">
          Each project can have its own collection of testimonials, making it
          easy to manage feedback across multiple websites.
        </p>
      </div>
      <CreateAndEditProject
        handleProjectFormSubmit={onCreateProject}
        isProjectModalOpen={isCreateModalOpen}
        setIsProjectModalOpen={setIsCreateModalOpen}
        projectFormMode="create"
        projectForm={projectForm}
        setProjectForm={setProjectForm}
      />
    </div>
  );
}
