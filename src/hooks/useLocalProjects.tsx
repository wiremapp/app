import { useState } from "react";

interface LocalItem {
  id: string;
  name: string;
}

type ProjectsHook = {
  projects: LocalItem[];
  isLoading: boolean;
  addProject: (name: string) => void;
  removeProject: (id: string) => void;
  editProject: (id: string, newName: string) => void;
};

const useLocalProjects = (): ProjectsHook => {
  const [projects, setProjects] = useState<LocalItem[]>([]);
  const [isLoading, setLoading] = useState(false);

  const addProject = (name: string) => {
    setLoading(true);
    const newProject: LocalItem = {
      id: Math.random().toString(), // Generate a unique ID
      name,
    };

    setProjects([...projects, newProject]);
    setLoading(false);
  };

  const removeProject = (id: string) => {
    const updatedProjects = projects.filter((project) => project.id !== id);
    setProjects(updatedProjects);
  };

  const editProject = (id: string, newName: string) => {
    const updatedProjects = projects.map((project) => {
      if (project.id === id) {
        return { ...project, name: newName };
      }
      return project;
    });
    setProjects(updatedProjects);
  };

  return {
    isLoading,
    projects,
    addProject,
    removeProject,
    editProject,
  };
};

export default useLocalProjects;
