import { FeaturesComponent } from "@/stories/components/units/features";
import { LayoutComponent } from "@/stories/components/units/layout";
import { PricingComponent } from "@/stories/components/units/pricing";
import { HeroComponent } from "@/stories/components/hero";
import { FAQComponent } from "@/stories/components/units/faq";
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
