import { AboutComponent, FeaturesComponent, LayoutComponent } from "@/components";
import { NextRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";

export const Page = ({
  router,
}: {
  router?: NextRouter;
}) => {
  const { t } = useTranslation();
  return (
    <LayoutComponent title={t("about_label")} router={router}>
      <AboutComponent />
    </LayoutComponent>
  );
};

export default Page;
