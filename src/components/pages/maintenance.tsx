import Image from "next/image";
import {
  ErrorComponent,
  FeaturesComponent,
  HeroComponent,
  LayoutComponent,
  PricingComponent,
} from "@/components";
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
    <LayoutComponent
      title={customTitle || t("genericError_title").slice(0, -3)}
      router={router}
      navbar={false}
      footer={false}
      cookieConsent={false}
    >
      <ErrorComponent contentTitle={customTitle} />
    </LayoutComponent>
  );
};

export default Page;
