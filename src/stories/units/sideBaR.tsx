import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export const RightSidebarComponent = ({}) => {
  const { t } = useTranslation();

  return (
    <nav aria-label="Site Navigation" className="flex h-full flex-row">
      <div className="w-[307px] flex-grow bg-red-200">Sidebar</div>
    </nav>
  );
};

export default RightSidebarComponent;
