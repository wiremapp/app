import Image from "next/image";
import { LayoutComponent, PricingComponent } from "@/components";
import { NextRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";

export const Page = ({
  router,
  customTitle,
}: {
  router?: NextRouter;
  customTitle?: string;
}) => {
  const { t } = useTranslation();
  return (
    <LayoutComponent title={customTitle} router={router} pageDesc={t("pricing_desc")}>
      <PricingComponent />
    </LayoutComponent>
  );
};

export default Page;
