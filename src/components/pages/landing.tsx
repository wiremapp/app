import { FeaturesComponent } from "@/components/features";
import { LayoutComponent } from "@/components/layout";
import {PricingComponent} from "@/components/pricing";
import { HeroComponent } from "@/components/hero";
import { FAQComponent } from "@/components/faq";
import { useTranslation } from "react-i18next";
import { NextRouter } from "next/router";
import Image from "next/image";
import React from "react";

export const LandingPage = (props) => {
  return (
    <LayoutComponent {...props}>
      <HeroComponent />
      <FeaturesComponent {...props} src="landing" />
      <PricingComponent {...props} variant={"secondary"} />
      <FAQComponent {...props} />
    </LayoutComponent>
  );
};

export default LandingPage;
