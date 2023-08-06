import { EditorNavbarComponent } from "@/components/navbar-editor";
import useLocalProjects from "@/hooks/useLocalProjects";
import { LayoutComponent } from "@/components/layout";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/button";
import { v4 as uuidv4 } from "uuid";
import React from "react";

import RightSidebarComponent from "../sideBaR";
import LeftSidebarComponent from "../sideBaL";

export const DashPage = (props) => {
  const {
    name,
    isLoading: isLoadingLocal,
    error: errorLocal,
    success: successLocal,
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
    <LayoutComponent
      {...props}
      title={props.locale.t("dash_label")}
      footer={false}
      cookieConsent={false}
      navbar={false}
    >
      <div className="flex h-full">
        <div className="h-full w-[64px]">
          {["back", "projects", "org", "addons"].map((e) => {
            return (
              <div className="aspect-square hover:bg-red-200" key={e}>
                {e}
              </div>
            );
          })}
        </div>
        <div className="flex flex-grow">
          <div className="dash-area h-full w-64 rounded border-r-2">
            <div className="flex h-[64px] hover:bg-blue-200">
              <div className=" w-[64px] hover:bg-red-200">e</div>
              <div className="h-full w-[64px] hover:bg-red-200">t</div>
            </div>
          </div>

          <div className="h-full flex-grow overflow-y-auto bg-purple-200">
            <div>{JSON.stringify(props)}</div>
          </div>
          <div className="h-full w-80 border-l-2">r5</div>
        </div>
      </div>

    </LayoutComponent>
  );
};

export default DashPage;
