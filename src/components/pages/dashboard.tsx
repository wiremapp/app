import { useEffect, useState } from "react";
import { LayoutComponent } from "@/components";
import React from "react";
import { useProjects } from "@/hooks";
import { useTranslation } from "react-i18next";
import { ButtonComponent as Button } from "@/components";
import useLocalProjects from "@/hooks/useLocalProjects";

export const Page = ({ router, appState = null }) => {
  const { t } = useTranslation();
  const {
    isLoading: isLoadingLocal,
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
        disabled={isLoadingLocal}
        type="submit"
      >
        {isLoadingLocal ? "Adding..." : "Add"}
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

export default Page;
