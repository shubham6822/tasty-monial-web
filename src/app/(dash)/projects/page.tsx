"use client";
import React from "react";
import ProjectCard from "../../../components/cards/ProjectCard";
import { Button } from "../../../components/ui/button";
import CreateAndEditProject from "../../../components/modals/CreateAndEditProject";
import { useCreateProject, useGetProjects } from "../../../hooks/useProjectApi";
import NoProjects from "../../../components/NoProject";

export default function ProjectsPage() {
  const { data: projects, isLoading } = useGetProjects();
  const createProjectMutation = useCreateProject();

  const [isCreateModalOpen, setIsCreateModalOpen] = React.useState(false);
  const [projectForm, setProjectForm] = React.useState({
    name: "",
    description: "",
  });

  const handleCreateProject = async () => {
    await createProjectMutation.mutateAsync(projectForm);
    setIsCreateModalOpen(false);
    setProjectForm({ name: "", description: "" });
  };

  if (!isLoading) {
    if (!projects || projects.length === 0) {
      return (
        <>
          <h1 className="text-3xl  text-left flex items-center gap-3 justify-between  mb-4">
            <div className=" items-center gap-1 text-2xl font-bold text-gray-900 dark:text-white">
              <h1>Project</h1>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-normal">
                Manage your projects here
              </p>
            </div>
          </h1>
          <NoProjects />
        </>
      );
    }
  }

  return (
    <>
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
          className="bg-white text-primary border border-primary hover:border-primary hover:bg-primary hover:text-white dark:bg-[#1F1F23] dark:border-gray-800 dark:text-gray-300"
          onClick={() => setIsCreateModalOpen(true)}
        >
          New Project
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-1 gap-2">
        {projects?.map((project, index) => (
          <ProjectCard
            key={index}
            id={project._id}
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
    </>
  );
}
