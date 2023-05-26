import { ErrorComponent, LayoutComponent } from "@/components";
import { NextRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";

export const Page = ({
  router,
  customTitle,
}: {
  router?: NextRouter;
  customTitle?: string;
}) => {
  const { t } = useTranslation();
  return (
    <LayoutComponent
      title={customTitle || t("checkSoon_label").slice(0, -3)}
      router={router}
      navbar={false}
      footer={false}
      cookieConsent={false}
    >
      <ErrorComponent contentTitle={customTitle} variant={"mt"} />
    </LayoutComponent>
  );
};

export default Page;
