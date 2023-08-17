import { FeaturesComponent } from "@/stories/units/features";
import { LayoutComponent } from "@/stories/units/layout";
import { PricingComponent } from "@/stories/units/pricing";
import { HeroComponent } from "@/stories/components/hero";
import { FAQComponent } from "@/stories/units/faq";
import React from "react";

export const LandingPage = (props) => {
  return (
    <LayoutComponent {...props}>
      <HeroComponent {...props} />
      <FeaturesComponent {...props} src="landing" />
      <PricingComponent {...props} variant={"secondary"} />
      <FAQComponent {...props} />
    </LayoutComponent>
  );
};

export default LandingPage;
