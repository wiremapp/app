import {
  FAQComponent,
  FeaturesComponent,
  LayoutComponent,
} from "@/components";
import { NextRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";

export const Page = ({ router }: { router?: NextRouter }) => {
  const { t } = useTranslation();
  return (
    <LayoutComponent
      title={t("faqFull_label")}
      pageDesc={t("about_desc")}
      router={router}
    >
      <FAQComponent />
    </LayoutComponent>
  );
};

export default Page;
