import { LayoutComponent } from "@/components/layout";
import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/button";
import useLocalProjects from "@/hooks/useLocalProjects";

export const DashPage = ({ router }) => {
  const { t } = useTranslation();
  const {
    projects: LocalProjects,
    addProject,
    removeProject,
    editProject,
  } = useLocalProjects();

  const handleAddProject = (e) => {
    e.preventDefault();
    addProject("New Project");
  };

  const handleRemoveProject = (id: string) => {
    removeProject(id);
  };

  const handleEditProject = (id: string, newName: string) => {
    editProject(id, newName);
  };

  return (
    <LayoutComponent router={router} title={t("dash_label")} navbar={true}>
      <Button
        className="hidden shrink-0 md:block"
        href="/"
        variant="primary"
        aria-label={"Email Sign Up"}
        space={"medium"}
        onClick={handleAddProject}
        type="submit"
      >
        Add
      </Button>

      <ul>
        {LocalProjects.map((project) => (
          <li key={project.id}>
            {project.name}
            <button onClick={() => handleRemoveProject(project.id)}>
              Remove
            </button>
            <button onClick={() => handleEditProject(project.id, "New Name")}>
              Edit
            </button>
          </li>
        ))}
      </ul>
    </LayoutComponent>
  );
};

export default DashPage;
