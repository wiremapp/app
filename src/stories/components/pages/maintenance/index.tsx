import { LayoutComponent } from "@/stories/components/units/layout";
import { ErrorComponent } from "@/stories/components/units/error";
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
