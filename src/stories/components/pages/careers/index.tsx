import { LayoutComponent } from "@/stories/components/units/layout";
import React from "react";

export const CareersPage = (props) => {
  return (
    <LayoutComponent
      {...props}
      title={props.locale.t("faqFull_label")}
      pageDesc={props.locale.t("about_desc")}
    >
      Careers
    </LayoutComponent>
  );
};

export default CareersPage;
