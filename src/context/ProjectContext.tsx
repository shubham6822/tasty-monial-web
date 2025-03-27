"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useGetProjects } from "../hooks/useProjectApi";

type Project = {
  id: string;
  name: string;
};

type ProjectContextType = {
  project: Project;
  setProject: (value: string) => void;
};

const Context = createContext<ProjectContextType>({
  project: {
    id: "",
    name: "",
  },
  setProject: () => {},
});
export default function ProjectContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: projectListData } = useGetProjects();
  const [project, setProject] = useState<Project>({
    id: "",
    name: "",
  });

  useEffect(() => {
    if (projectListData) {
      const projectId = localStorage.getItem("projectId");
      if (projectId) {
        setProject({
          id: projectId,
          name:
            projectListData?.find((project) => project._id === projectId)
              ?.name || "",
        });
      } else {
        setProject({
          id: projectListData[0]?._id || "",
          name: projectListData[0]?.name || "",
        });
        localStorage.setItem("projectId", projectListData[0]?._id || "");
      }
    }
  }, [projectListData]);

  const handleProjectChange = (value: string) => {
    setProject({
      id: value,
      name:
        projectListData?.find((project) => project._id === value)?.name || "",
    });
    localStorage.setItem("projectId", value);
  };

  return (
    <Context.Provider value={{ project, setProject: handleProjectChange }}>
      {children}
    </Context.Provider>
  );
}

export function useProjectContext() {
  return useContext(Context);
}
