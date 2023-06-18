import React from "react";
import { useTranslation } from "react-i18next";

export const CopyrightTextComponent = () => {
  const { t } = useTranslation();
  return (
    <p className="cr">
      {t("copyRight_label")} &copy; {new Date().getFullYear()}{" "}
      {process.env.NEXT_PUBLIC_STATIC_TITLE
        ? process.env.NEXT_PUBLIC_APP_TITLE + " " + t("jurisdiction_code") + "."
        : ""}{" "}
      {t("rightsRes_label")}
    </p>
  );
};

export default CopyrightTextComponent;
