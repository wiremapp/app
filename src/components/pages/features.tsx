import Image from "next/image";
import { FeaturesComponent, LayoutComponent } from "@/components";
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
    <LayoutComponent title={t("features_label")} router={router}>
      <FeaturesComponent />
    </LayoutComponent>
  );
};

export default Page;
