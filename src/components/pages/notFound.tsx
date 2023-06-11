import { LayoutComponent } from "@/components/layout";
import { NextRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";
import {ErrorComponent} from "@/components/error";

export const NotFoundPage = ({ router }: { router?: NextRouter }) => {
  const { t } = useTranslation();
  return (
    <LayoutComponent
      title={t("notFound_label")}
      router={router}
      navbar={false}
      footer={false}
      cookieConsent={false}
    >
      <ErrorComponent contentTitle={t("notFound_label")} variant={"404"} />
    </LayoutComponent>
  );
};

export default NotFoundPage;
