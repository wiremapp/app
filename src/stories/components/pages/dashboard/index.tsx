import { LayoutComponent } from "@/stories/components/units/layout";
import React from "react";
import { LogoComponent } from "@/stories/components/units/logo";

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
          <div className="flex h-[48px]">
            <div className="flex items-center p-6">
              <h2>Recent</h2>
            </div>

            <div className="flex flex-grow items-center"></div>

            <div className="flex items-center">SearchInput</div>
          </div>
          <div className="grid grid-cols-4 gap-4 p-6">
  <div>01</div>
  <div>09</div>
  <div>09</div>
  <div>09</div>
  <div>09</div>
</div>
        </div>
      </div>
    </LayoutComponent>
  );
};

export default DashPage;
