import { LayoutComponent } from "@/components/layout";
import { FAQComponent } from "@/components/faq";
import { useTranslation } from "react-i18next";
import { NextRouter } from "next/router";
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
