import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface CreateAndEditProjectProps {
  isProjectModalOpen: boolean;
  setIsProjectModalOpen: (isOpen: boolean) => void;
  projectForm: {
    name: string;
    description: string;
  };
  setProjectForm: (form: { name: string; description: string }) => void;
  projectFormMode: "create" | "edit";
  handleProjectFormSubmit: () => void;
}

export default function CreateAndEditProject({
  isProjectModalOpen,
  setIsProjectModalOpen,
  projectForm,
  setProjectForm,
  projectFormMode,
  handleProjectFormSubmit,
}: CreateAndEditProjectProps) {
  return (
    <div>
      <Dialog open={isProjectModalOpen} onOpenChange={setIsProjectModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {projectFormMode === "create"
                ? "Create New Project"
                : "Edit Project"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label htmlFor="project-name" className="text-sm font-medium">
                Project Name <span className="text-destructive">*</span>
              </label>
              <Input
                id="project-name"
                value={projectForm.name}
                onChange={(e) =>
                  setProjectForm({ ...projectForm, name: e.target.value })
                }
                placeholder="Enter project name"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="project-description"
                className="text-sm font-medium"
              >
                Description
              </label>
              <Input
                id="project-description"
                value={projectForm.description}
                onChange={(e) =>
                  setProjectForm({
                    ...projectForm,
                    description: e.target.value,
                  })
                }
                placeholder="Enter project description (optional)"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsProjectModalOpen(false)}
            >
              Cancel
            </Button>
            <Button
              onClick={handleProjectFormSubmit}
              disabled={!projectForm.name.trim()}
            >
              {projectFormMode === "create" ? "Create Project" : "Save Changes"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
