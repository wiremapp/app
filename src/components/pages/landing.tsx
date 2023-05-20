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

export const Page = ({ router }: { router?: NextRouter }) => {
  const { t } = useTranslation();
  return (
    <LayoutComponent title={t("home_label")} router={router}>
      <HeroComponent />
      <FeaturesComponent />
      <PricingComponent />
      <AboutComponent />
    </LayoutComponent>
  );
};

export default Page;
