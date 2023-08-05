import { LayoutComponent } from "@/components/layout";
import { ErrorComponent } from "@/components/error";
import React from "react";

export const MaintPage = (props) => {
  return (
    <LayoutComponent
      {...props}
      title={
        props.customTitle || props.locale.t("checkSoon_label").slice(0, -3)
      }
      navbar={false}
      footer={false}
      cookieConsent={false}
    >
      <ErrorComponent
        {...props}
        contentTitle={props.customTitle}
        variant={"mt"}
      />
    </LayoutComponent>
  );
};

export default MaintPage;
