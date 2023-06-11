import { LayoutComponent } from "@/components/layout";

import { NextRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";
import {FAQComponent} from "@/components/faq";

export const FAQPage = ({ router,data }: { data?: any, router?: NextRouter }) => {
  const { t } = useTranslation();
  return (
    <LayoutComponent
      title={t("faqFull_label")}
      pageDesc={t("about_desc")}
      router={router}
    >
      <FAQComponent data={data} />
    </LayoutComponent>
  );
};

export default FAQPage;
