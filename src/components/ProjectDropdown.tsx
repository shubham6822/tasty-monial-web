"use client";
import React, { useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useGetProjects } from "../hooks/useProjectApi";
import { useProjectContext } from "../context/ProjectContext";

export default function ProjectDropdown() {
  const { data: projects } = useGetProjects();
  const [options, setOptions] = React.useState<IOption[]>([]);
  const { project, setProject } = useProjectContext();
  const [value, setValue] = React.useState("");

  useEffect(() => {
    if (projects) {
      setOptions(
        projects.map((project) => ({ label: project.name, value: project._id }))
      );
      if (!project?.id) {
        setValue(projects[0]?._id);
      }
      setValue(project?.id);
    }
  }, [projects, project]);

  const handleProjectChange = (value: string) => {
    setValue(value);
    setProject(value);
  };

  return (
    <div>
      <Select value={value} onValueChange={handleProjectChange}>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Select a project" />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
