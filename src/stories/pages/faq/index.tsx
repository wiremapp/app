import { LayoutComponent } from "@/stories/units/layout";
import { FAQComponent } from "@/stories/units/faq";
import React from "react";

export const FAQPage = (props) => {
  return (
    <LayoutComponent
      {...props}
      title={props.locale.t("faqFull_label")}
      pageDesc={props.locale.t("about_desc")}
    >
      <FAQComponent {...props} />
    </LayoutComponent>
  );
};

export default FAQPage;
