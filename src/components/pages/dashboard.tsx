import { LayoutComponent } from "@/components/layout";
import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/button";
import useLocalProjects from "@/hooks/useLocalProjects";
import {EditorNavbarComponent} from "@/components/navbar-editor";
import LeftSidebarComponent from "../sideBaL";
import RightSidebarComponent from "../sideBaR";

export const DashPage = ({ router }) => {
  const { t } = useTranslation();
  const {
    name,
    isLoading: isLoadingLocal,
    error: errorLocal,
    success: successLocal ,
    projects: localProjects,
    setName: setNameLocal,
    add: addLocal,
    remove: removeLocal,
    edit: editLocal,
  } = useLocalProjects();

  const handleAddLocal = () => {
    if (name.trim() !== "") {
      addLocal();
    }
  };

  const handleRemoveLocal = (projectId) => {
    removeLocal(projectId);
  };

  const handleEditLocal = (projectId, newName) => {
    editLocal(projectId, newName);
  };
  return (
    <LayoutComponent router={router} title={t("dash_label")} footer={false} navbar={false}>
      <EditorNavbarComponent menuData={[]} router={router} />
      <Button
        className="hidden shrink-0 md:block"
        href="/"
        variant="primary"
        aria-label={"Email Sign Up"}
        space={"medium"}
        onClick={(e) => {
          e.preventDefault();
          handleAddLocal();
        }}
        type="submit"
      >
        Add Local
      </Button>

      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setNameLocal(e.target.value)}
        />
        <button onClick={handleAddLocal}>Add Project</button>

        {isLoadingLocal && <p>Loading...</p>}
        {errorLocal && <p>Error: {errorLocal}</p>}
        {successLocal && <p>Success!</p>}

        <ul>
          {localProjects.map((project) => (
            <li key={project.id}>
              {project.name}
              <button onClick={() => handleRemoveLocal(project.id)}>Remove</button>
              <button onClick={() => handleEditLocal(project.id, "New Name")}>
                Edit
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className={"h-full flex w-full"}>
        <LeftSidebarComponent />
        <div className={"flex-1"}>
        </div>
        <RightSidebarComponent />
      </div>
    </LayoutComponent>
  );
};

export default DashPage;
