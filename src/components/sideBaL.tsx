import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export const LeftSidebarComponent = (props: any) => {
  const { t } = useTranslation();

  return (
    <nav aria-label="Site Navigation" className="flex h-full flex-row">
      <div className="w-[64px] flex-grow">Sidebar</div>
      <div
        style={{
          background: "linear-gradient(180deg, #030303 0%, #020202 100%)",
        }}
        className="w-[307px] flex-grow bg-red-200"
      >
          <div>
        <input
          type="text"
          value={props.name}
          onChange={(e) => props.setNameLocal(e.target.value)}
        />
        <button onClick={props.handleAddLocal}>Add Project</button>

        {props.isLoadingLocal && <p>Loading...</p>}
        {props.errorLocal && <p>Error: {props.errorLocal}</p>}
        {props.successLocal && <p>Success!</p>}

      </div>
      </div>{" "}
    </nav>
  );
};

export default LeftSidebarComponent;
