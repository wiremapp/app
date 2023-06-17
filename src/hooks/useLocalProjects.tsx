import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface IProject {
  id: string;
  name: string;
}

interface IType {
  name?: string;
  isLoading: boolean;
  error: string | null;
  success: boolean;
  projects: IProject[];
  setName: Dispatch<SetStateAction<string>>;
  add: () => Promise<void>;
  remove: (projectId: string) => Promise<void>;
  edit: (projectId: string, newName: string) => Promise<void>;
}

const useLocalProjects = (): IType => {
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedProjects = JSON.parse(localStorage.getItem("projects"));
      if(storedProjects !== null) {
        setProjects([...projects, ...storedProjects]);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const add = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Simulate an asynchronous API call
      await new Promise((resolve) => setTimeout(resolve, 200));

      const projectId = Math.random().toString(36).slice(2, 9);
      const newProject: IProject = { id: projectId, name };

      if (projects.some((project) => project.name === name)) {
        setSuccess(false);
        setError("Project already exists.");
      } else {
        setProjects([...projects, newProject]);
        setSuccess(true);
        setName("");
      }
    } catch (error) {
      setSuccess(false);
      setError("Something went wrong. Please try again.");
    }

    setIsLoading(false);
  };

  const remove = async (projectId: string) => {
    setIsLoading(true);
    setError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 200));

      const updatedProjects = projects.filter(
        (project) => project.id !== projectId
      );
      setProjects(updatedProjects);
      setSuccess(true);
    } catch (error) {
      setSuccess(false);
      setError("Something went wrong. Please try again.");
    }

    setIsLoading(false);
  };

  const edit = async (projectId: string, newName: string) => {
    setIsLoading(true);
    setError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 400));

      const updatedProjects = projects.map((project) =>
        project.id === projectId ? { ...project, name: newName } : project
      );
      setProjects(updatedProjects);
      setSuccess(true);
    } catch (error) {
      setSuccess(false);
      setError("Something went wrong. Please try again.");
    }

    setIsLoading(false);
  };

  return {
    name,
    isLoading,
    error,
    success,
    projects,
    setName,
    add,
    remove,
    edit,
  };
};


export default useLocalProjects;
