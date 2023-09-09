import React from "react";
import { useTranslation } from "react-i18next";

export const CopyrightTextComponent = (props) => {
  return (
    <p className="uppercase text-xs text-white text-opacity-70">
      {props.locale.t("copyRight_label")} &copy; {new Date().getFullYear()}{" "}
      {process.env.NEXT_PUBLIC_STATIC_TITLE
        ? process.env.NEXT_PUBLIC_APP_TITLE + " " + props.locale.t("jurisdiction_code") + "."
        : ""}{" "}
      {props.locale.t("rightsRes_label")}
    </p>
  );
};

export default CopyrightTextComponent;
