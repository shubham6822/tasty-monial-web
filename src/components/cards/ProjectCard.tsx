import { EditIcon, Trash2 } from "lucide-react";
import React from "react";
import ProjectDeleteModal from "../modals/ProjectDeleteModal";
import CreateAndEditProject from "../modals/CreateAndEditProject";
import { formatDate } from "../../lib/utils";
import { useDeleteProject, useUpdateProject } from "../../hooks/useProjectApi";

interface ProjectCardProps {
  id: string;
  name: string;
  description: string;
  createdDate: string;
  totalTestimonial: number;
}

export default function ProjectCard({
  id,
  name,
  description,
  createdDate,
  totalTestimonial,
}: ProjectCardProps) {
  const editProjectMutation = useUpdateProject();
  const deleteProjectMutation = useDeleteProject();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);
  const [projectForm, setProjectForm] = React.useState({
    name: name,
    description: description,
  });
  const handleDeleteProject = () => {
    deleteProjectMutation.mutateAsync(id);
    setIsDeleteModalOpen(false);
  };

  const handleEditProject = () => {
    editProjectMutation.mutateAsync({
      _id: id,
      name: projectForm.name,
      description: projectForm.description,
    });
    setIsEditModalOpen(false);
    setProjectForm({ name: "", description: "" });
  };

  return (
    <>
      <div className="shadow-sm w-full h-28 rounded-xl p-3 px-5 border hover:border-gray-300 dark:border-[#1F1F23] dark:bg-[#0F0F12] bg-white">
        <div className="flex h-full justify-between">
          <div className="flex flex-col justify-between ">
            <div>
              <h1 className="text-lg font-bold">{name}</h1>
              <p className="text-xs text-gray-500 font-light max-w-4xl">
                {description}
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-500 opacity-">
                Total Testimonial: {totalTestimonial}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex gap-2 justify-end">
              <EditIcon
                className="w-5 h-5 text-green-500 cursor-pointer"
                onClick={() => setIsEditModalOpen(true)}
              />
              <Trash2
                className="w-5 h-5 text-red-500 cursor-pointer"
                onClick={() => setIsDeleteModalOpen(true)}
              />
            </div>
            <p className="text-sm  text-gray-500">{formatDate(createdDate)}</p>
          </div>
        </div>
      </div>
      <ProjectDeleteModal
        handleDeleteProject={handleDeleteProject}
        isDeleteModalOpen={isDeleteModalOpen}
        setIsDeleteModalOpen={setIsDeleteModalOpen}
        projectName={name}
      />
      <CreateAndEditProject
        handleProjectFormSubmit={handleEditProject}
        isProjectModalOpen={isEditModalOpen}
        setIsProjectModalOpen={setIsEditModalOpen}
        projectFormMode="edit"
        projectForm={projectForm}
        setProjectForm={setProjectForm}
      />
    </>
  );
}
