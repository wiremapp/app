import { LayoutComponent } from "@/components/layout";
import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/button";
import useLocalProjects from "@/hooks/useLocalProjects";
import { EditorNavbarComponent } from "@/components/navbar-editor";
import LeftSidebarComponent from "../sideBaL";
import RightSidebarComponent from "../sideBaR";
import { v4 as uuidv4 } from "uuid";

export const DashPage = ({ router }) => {
  const { t } = useTranslation();
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
      router={router}
      title={t("dash_label")}
      footer={false}
      cookieConsent={false}
      navbar={false}
    >
      <div className="flex h-full">
        <div className="h-full w-[64px] bg-green-200">
          {["back", "projects", "org", "addons"].map((e) => {
            return (
              <div className="aspect-square hover:bg-red-200" key={e}>
                {e}
              </div>
            );
          })}
        </div>
        <div className="h-full w-64 bg-orange-200">
          <div className="h-[64px] flex hover:bg-blue-200">
            <div className=" w-[64px] hover:bg-red-200">e</div>
            <div className="h-full w-[64px] hover:bg-red-200">e</div>
          </div>
        </div>
        <div className="h-full flex-1 bg-purple-200"></div>
        <div className="h-full w-80 bg-orange-200"></div>
      </div>
      {/* <EditorNavbarComponent menuData={[]} router={router} />
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
      </Button> */}

      {/* <div className={"flex h-full w-full overflow-auto"}>
        <LeftSidebarComponent
          {...{
            isLoadingLocal,
            errorLocal,
            successLocal,
            handleAddLocal,
            name,
            setNameLocal,
          }}
        />
        <div className="flex-1 bg-red-300">
          <div className="grid h-full flex-1 grid-cols-1 gap-4 overflow-y-auto md:grid-cols-3 lg:grid-cols-4">
            {localProjects.map((item: any) => {
              return (
                <div key={uuidv4()} className="shadow">
                  <div className="flex flex-col space-y-1 p-6 text-center">
                    <h4>{item.name}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <RightSidebarComponent />
      </div> */}
    </LayoutComponent>
  );
};

export default DashPage;
