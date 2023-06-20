import Image from "next/image";
import { LayoutComponent } from "@/components/layout";

import { NextRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";
import { HeroComponent } from "@/components/hero";
import { FeaturesComponent } from "@/components/features";
import { FAQComponent } from "@/components/faq";
import {PricingComponent} from "@/components/pricing";

export const LandingPage = ({
  data,
  router,
}: {
  data?: any;
  router?: NextRouter;
}) => {
  const { t } = useTranslation();
  return (
    <LayoutComponent router={router}>
      <HeroComponent />
      <FeaturesComponent data={data} src="landing" />
      <PricingComponent data={data} variant={"secondary"} />
      <FAQComponent data={data} />
    </LayoutComponent>
  );
};

export default LandingPage;
