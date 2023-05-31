import Image from "next/image";
import {
  AboutComponent,
  FeaturesComponent,
  HeroComponent,
  LayoutComponent,
  PricingComponent,
} from "@/components";
import { NextRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";

export const Page = ({
  data,
  router,
  appState,
}: {
  data?: any;
  appState: any;
  router?: NextRouter;
}) => {
  const { t } = useTranslation();
  return (
    <LayoutComponent router={router} appState={appState}>
      <HeroComponent />
      <FeaturesComponent data={data} />
      <PricingComponent data={data} variant={"secondary"} />
      <AboutComponent />
    </LayoutComponent>
  );
};

export default Page;
