import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export const Component = ({}) => {
  const { t } = useTranslation();

  return (
    <nav
      aria-label="Site Navigation"
      className="flex flex-col"
    >
      <div className="flex-grow w-[307px] bg-red-200">Sidebal</div>
    </nav>
  );
};

export default Component;
