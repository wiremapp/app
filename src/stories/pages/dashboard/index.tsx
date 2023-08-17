import useLocalProjects from "@/hooks/useLocalProjects";
import { LayoutComponent } from "@/stories/units/layout";
import React from "react";

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
      variant="editor"
    >
      <div className="flex flex-grow bg-red-200"> 
      <div className="w-[309px] bg-green-200">

      </div>
      <div className="flex-grow bg-red-200"></div>
      </div>
    </LayoutComponent>
  );
};

export default DashPage;
