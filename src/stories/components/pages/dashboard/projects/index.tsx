import { LayoutComponent } from "@/stories/components/units/layout";
import React, { useEffect, useState } from "react";
import { Button } from "../../../button";
import { signOut } from "next-auth/react";
import { SignInModalButton } from "../../../authButton";
import TextInputComponent from "../../../units/textInput";
import ProjectModalComponent from "../../../projectModal";
import ModalWrapperComponent from "../../../units/modalWrapper";
import OrgModalComponent from "../../../orgModal";
import { v4 as uuidv4 } from "uuid";
import { PiListBold, PiGridFourBold } from "react-icons/pi";
import DashSidebarComponent from "../sidebar";

export const ProjectsPage = (props) => {
  const [listView, setListView] = useState(false);

  useEffect(() => {
    const localListViewString = localStorage.getItem("projectsListView");
    setListView(JSON.parse(localListViewString || "false"));
  }, [listView]);

  const handleListView = (state: boolean) => {
    localStorage.setItem("projectsListView", state.toString()); // Convert boolean to string
    setListView(state);
  };

  return (
    <LayoutComponent
      {...props}
      title={props.locale.t("projects_label")}
      navbar={false}
      footer={false}
    >
      <div className="flex flex-grow pt-3 pr-3 pb-3">
        <DashSidebarComponent {...props} />

        <div
          style={{
            borderRadius: "4px",
            background: "linear-gradient(180deg, #030303 0%, #020202 100%)",
            boxShadow:
              "0px 2px 4px -2px rgba(0, 0, 0, 0.10), 0px 4px 6px -1px rgba(0, 0, 0, 0.10)",
          }}
          className="w-[309px]"
        >
          <ModalWrapperComponent
            state={{
              modal: props.addProjectModal,
              setModal: props.setAddProjectModal,
            }}
            component={
              <Button
                href="/"
                aria-label={"Create Project"}
                onClick={(e) => {
                  e.preventDefault();
                  props.setAddProjectModal(!props.addProjectModal);
                }}
              >
                {props.locale.t("add_new_project_label")}
              </Button>
            }
          >
            <ProjectModalComponent
              state={{
                modal: props.addProjectModal,
                setModal: props.setAddProjectModal,
              }}
              {...props}
            />
          </ModalWrapperComponent>

          {props.userOrgs.map((org) => {
            return (
              <div key={uuidv4()} className="">
                {org.decodedName}
              </div>
            );
          })}
        </div>

        <div className="flex-grow">
          <div className="flex h-[48px] grid-cols-[256px]">
            <div className="flex items-center p-6">
              <h2>Recent</h2>
            </div>

            <div className="flex flex-grow items-center"></div>

            <div className="space-x-1 flex">
              <TextInputComponent
                placeholder={props.locale.t("search_label")}
              />

              {!props.auth.session ? (
                <SignInModalButton {...props} />
              ) : (
                <div className="hidden sm:block">
                  <Button
                    href="/"
                    variant="secondary"
                    aria-label={"Sign In"}
                    space={"medium"}
                    onClick={(e) => {
                      e.preventDefault();
                      signOut();
                    }}
                  >
                    {props.auth.session?.user.email}
                  </Button>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-grow h-12 p-6 mb-2">
            <div className=" flex-grow items-center"></div>

            <div className=" flex items-center space-x-2 ">
              <Button onClick={() => handleListView(false)}>
                <PiGridFourBold />
              </Button>

              <Button onClick={() => handleListView(true)}>
                <PiListBold />
              </Button>
            </div>
          </div>
          <div
            className={`${
              listView ? "flex flex-col" : "grid"
            } flex-grow gap-4 px-6 md:grid-cols-2 lg:grid-cols-3`}
          >
            {props.userProjects.map((item, index) => {
              return (
                <div
                  key={uuidv4()}
                  className="section-secondary-bg rounded-lg p-6 shadow"
                >
                  <a href="#">
                    <h5 className="mb-2 font-bold tracking-tight">
                      Name: {item.name}
                    </h5>
                  </a>

                  <p>CreatedAt: {item.createdAt}</p>

                  <Button
                    onClick={() => {
                      props.router.push(`/p?id=${item.id}`);
                    }}
                    variant="primary"
                  >
                    {" "}
                    Open{" "}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </LayoutComponent>
  );
};

export default ProjectsPage;
