import { useTranslation } from "react-i18next";
import React from "react";

export const Component = ({ state, children, component }) => {
  const { t } = useTranslation();
  return (
    <div>
      {state.modal ? (
        <div
          className="fixed right-[-1px] top-0 z-[100] h-[100vh] w-[100vw] translate-x-[-1px] bg-black bg-opacity-75 text-black transition dark:text-white"
        >
          {children}
        </div>
      ) : (
        component
      )}
    </div>
  );
};

export default Component;
