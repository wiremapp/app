import Image from "next/image";
import { LayoutComponent } from "@/components/layout";
import { NextRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";
import { PricingComponent } from "@/components/pricing";

export const PricingPage = ({
  router,
  customTitle,
  data
}: {
  router?: NextRouter;
  customTitle?: string;
  data?: any;
}) => {
  const { t } = useTranslation();
  return (
    <LayoutComponent
      title={t("pricing_label")}
      router={router}
      pageDesc={t("pricing_desc")}
    >
      <PricingComponent data={data} variant={"secondary"} />
    </LayoutComponent>
  );
};

export default PricingPage;
