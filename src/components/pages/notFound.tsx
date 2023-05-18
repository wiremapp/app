import { LayoutComponent, ErrorComponent } from "@/components";
import { NextRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";

export const Page = ({ router }: { router?: NextRouter }) => {
  const { t } = useTranslation();
  return (
    <LayoutComponent
      title={t("notFound_label")}
      router={router}
      navbar={false}
      footer={false}
      cookieConsent={false}
    >
      <ErrorComponent contentTitle={t("notFound_label")} />
    </LayoutComponent>
  );
};

export default Page;
