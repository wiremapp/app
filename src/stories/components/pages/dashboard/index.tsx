import { LayoutComponent } from "@/stories/components/units/layout";
import React from "react";
import { LogoComponent } from "@/stories/components/units/logo";
import { Button } from "../../button";
import { signOut } from "next-auth/react";
import { SignInModalButton } from "../../authButton";

export const DashPage = (props) => {
  return (
    <LayoutComponent
      {...props}
      title={props.locale.t("dash_label")}
      navbar={false}
      footer={false}
    >
      <div className="flex flex-grow p-3">
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
          <button
            onClick={() => {
              alert("add proj loc");
            }}
          >
            Add
          </button>
          {JSON.stringify("Proj")}
        </div>

        <div className="flex-grow">
          <div className="flex h-[48px] grid-cols-[256px]">
            <div className="flex items-center p-6">
              <h2>Recent</h2>
            </div>

            <div className="flex flex-grow items-center"></div>

            <div className="flex items-center">SearchInput</div>

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
          <div className="grid flex-grow gap-4 p-6 md:grid-cols-2 lg:grid-cols-3">
            {JSON.stringify(props.userProjects)}
            {props.userProjects.map((item, index) => {
              return (
                <div
                  key={item._id}
                  className="section-secondary-bg rounded-lg p-6 shadow"
                >
                  <a href="#">
                    <h5 className="mb-2 font-bold tracking-tight">
                      Name: {item.name}
                    </h5>
                  </a>

                  <Button
                    onClick={() => {
                      props.router.push(`/s/${props.id}`);
                    }}
                    variant="primary"
                  >
                    {" "}
                    Manage{" "}
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
