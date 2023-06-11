import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface LocalItem {
  id: string;
  name: string;
}

type ProjectsHook = {
  projects: LocalItem[];
  addProject: (name: string) => void;
  removeProject: (id: string) => void;
  editProject: (id: string, newName: string) => void;
};

const useLocalProjects = (): ProjectsHook => {
  const [projects, setProjects] = useState<LocalItem[]>([]);

  useEffect(() => {
    const storedProjects = localStorage.getItem('projects');
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  const addProject = (name: string) => {
    const newProject: LocalItem = {
      id: uuidv4(),
      name,
    };

    setProjects([...projects, newProject]);
  };

  const removeProject = (id: string) => {
    const updatedProjects = projects.filter(project => project.id !== id);
    setProjects(updatedProjects);
  };

  const editProject = (id: string, newName: string) => {
    const updatedProjects = projects.map(project => {
      if (project.id === id) {
        return { ...project, name: newName };
      }
      return project;
    });
    setProjects(updatedProjects);
  };

  return {
    projects,
    addProject,
    removeProject,
    editProject,
  };
};

export default useLocalProjects;
