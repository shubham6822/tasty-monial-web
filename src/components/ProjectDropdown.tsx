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

export default function ProjectDropdown() {
  const { projects } = useGetProjects();
  const [options, setOptions] = React.useState<IOption[]>([]);
  const [value, setValue] = React.useState("all");

  useEffect(() => {
    if (projects) {
      setOptions(
        projects.map((project) => ({ label: project.name, value: project._id }))
      );
      setValue(projects[0]._id);
    }
  }, [projects]);

  return (
    <div>
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger className="w-[180px]">
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
