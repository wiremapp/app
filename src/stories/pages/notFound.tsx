import { LayoutComponent } from "@/stories/units/layout";
import { ErrorComponent } from "@/components/error";
import { useTranslation } from "react-i18next";
import React from "react";

export const NotFoundPage = (props) => {
  const { t } = useTranslation();
  return (
    <LayoutComponent
      title={t("notFound_label")}
      router={props.router}
      navbar={false}
      footer={false}
      cookieConsent={false}
      locale={props.locale}
    >
      <ErrorComponent contentTitle={t("notFound_label")} variant={"404"} />
    </LayoutComponent>
  );
};

export default NotFoundPage;
