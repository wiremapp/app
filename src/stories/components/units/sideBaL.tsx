import React from "react";
import LogoComponent from "./logo";

export const LeftSidebarComponent = (props: any) => {

  return (
    <nav aria-label="Site Navigation" className="flex h-full flex-row">
      <div className="w-[64px] flex-grow flex justify-center pt-4">

      <LogoComponent text={false}/>

      </div>
      <div
        style={{
          background: "linear-gradient(180deg, #030303 0%, #020202 100%)",
        }}
        className="w-[307px] flex-grow bg-red-200"
      >
          <div>


        {props.isLoadingLocal && <p>Loading...</p>}
        {props.errorLocal && <p>Error: {props.errorLocal}</p>}
        {props.successLocal && <p>Success!</p>}

      </div>
      </div>{" "}
    </nav>
  );
};

export default LeftSidebarComponent;
