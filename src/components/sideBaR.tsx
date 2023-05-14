import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export const Component = ({}) => {
  const { t } = useTranslation();

  return (
    <nav
      aria-label="Site Navigation"
      className="flex h-full w-32 flex-col bg-red-200"
    >
      <div className="flex-grow">{/* Your sidebar content goes here */}asd</div>
    </nav>
  );
};

export default Component;
