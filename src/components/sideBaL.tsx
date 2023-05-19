import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export const Component = ({}) => {
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
        Sidebar
      </div>{" "}
    </nav>
  );
};

export default Component;
