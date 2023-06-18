import { LayoutComponent } from "@/components/layout";
import { NextRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";
import ErrorComponent from "../error";

export const MaintPage = ({
  router,
  customTitle,
  customDesc
}: {
  router?: NextRouter;
  customTitle?: string;
  customDesc?: string;
}) => {
  const { t } = useTranslation();
  return (
    <LayoutComponent
      title={customTitle || t("checkSoon_label").slice(0, -3)}
      router={router}
      navbar={false}
      pageDesc={customDesc}
      footer={false}
      cookieConsent={false}
    >
      <ErrorComponent contentTitle={customTitle} variant={"mt"} />
    </LayoutComponent>
  );
};

export default MaintPage;
