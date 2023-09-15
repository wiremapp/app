import { LayoutComponent } from "@/stories/components/units/layout";
import { ErrorComponent } from "@/stories/components/units/error";
import { useTranslation } from "react-i18next";
import React from "react";

export const NotFoundPage = (props) => {
  return (
    <LayoutComponent
      title={props.locale.t("notFound_label")}
      router={props.router}
      navbar={false}
      footer={false}
      cookieConsent={false}
      locale={props.locale}
    >
      <ErrorComponent
        {...props}
        contentTitle={props.locale.t("notFound_label")}
        variant={"404"}
      />
    </LayoutComponent>
  );
};

export default NotFoundPage;
