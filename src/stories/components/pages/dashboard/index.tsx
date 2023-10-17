import { LayoutComponent } from "@/stories/components/units/layout";
import React, { useEffect, useState } from "react";
import { LogoComponent } from "@/stories/components/units/logo";
import { Button } from "../../button";
import { signOut } from "next-auth/react";
import { SignInModalButton } from "../../authButton";
import TextInputComponent from "../../units/textInput";
import ProjectModalComponent from "../../projectModal";
import ModalWrapperComponent from "../../units/modalWrapper";
import OrgModalComponent from "../../orgModal";
import { v4 as uuidv4 } from "uuid";
import { fetchSignature } from "@/utils/funcs";

export const DashPage = (props) => {


  return (
    <LayoutComponent
      {...props}
      title={props.locale.t("dash_label")}
      navbar={false}
      footer={false}
    >
      <div className="flex flex-grow pt-3 pr-3 pb-3">
        <div className="flex w-[64px] flex-col items-center py-4">
          <LogoComponent text={false} link={false} />
        </div>

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
            state={{ modal: props.addProjectModal, setModal: props.setAddProjectModal }}
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
              state={{ modal: props.addProjectModal, setModal: props.setAddProjectModal }}
              {...props}
            />
          </ModalWrapperComponent>
          
          <ModalWrapperComponent
            state={{ modal: props.addOrgModal, setModal: props.setAddOrgModal }}
            component={
              <Button
                href="/"
                aria-label={"Create Organisation"}
                onClick={(e) => {
                  e.preventDefault();
                  props.setAddOrgModal(!props.addOrgModal);
                }}
              >
                {props.locale.t("add_new_org_label")}
              </Button>
            }
          >
            <OrgModalComponent
              state={{ modal: props.addOrgModal, setModal: props.setAddOrgModal }}
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
          <div className="grid flex-grow gap-4 p-6 md:grid-cols-2 lg:grid-cols-3">
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

                  <Button
                    onClick={() => {
                      props.router.push(`/e?id=${item.id}`);
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

export default DashPage;
