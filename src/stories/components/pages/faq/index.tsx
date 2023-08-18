import { LayoutComponent } from "@/stories/components/units/layout";
import { FAQComponent } from "@/stories/components/units/faq";
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
