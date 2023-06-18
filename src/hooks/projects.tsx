import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface IType {
  name?: string;
  isLoading: boolean;
  error: string | null;
  success: boolean;
  projects: string[];
  setName: Dispatch<SetStateAction<string>>;
  add: () => Promise<void>;
  remove: (projectName: string) => Promise<void>;
  edit: (oldName: string, newName: string) => Promise<void>;
}

const useLocalProjects = (): IType => {
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [projects, setProjects] = useState<string[]>([]);

  useEffect(() => {
    const savedProjects = localStorage.getItem("projects");
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  const add = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Simulate an asynchronous API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (projects.includes(name)) {
        setSuccess(false);
        setError("Project already exists.");
      } else {
        setProjects([...projects, name]);
        setSuccess(true);
        setName("");
      }
    } catch (error) {
      setSuccess(false);
      setError("Something went wrong. Please try again.");
    }

    setIsLoading(false);
  };

  const remove = async (projectName: string) => {
    setIsLoading(true);
    setError(null);

    try {
      // Simulate an asynchronous API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const updatedProjects = projects.filter(
        (project) => project !== projectName
      );
      setProjects(updatedProjects);
      setSuccess(true);
    } catch (error) {
      setSuccess(false);
      setError("Something went wrong. Please try again.");
    }

    setIsLoading(false);
  };

  const edit = async (oldName: string, newName: string) => {
    setIsLoading(true);
    setError(null);

    try {
      // Simulate an asynchronous API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const updatedProjects = projects.map((project) =>
        project === oldName ? newName : project
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
