import React from "react";
import { HeroComponent } from "@/stories/components/hero";

export default {
  title: "Components/Hero",
  component: HeroComponent,
};

export const Hero = (props) => <HeroComponent {...props} />;

Hero.args = {
  locale: {
    t: (e) => {
      return e;
    },
  },
  auth: { session: null, state: "authenticated" },
  router: { pathname: "/" },
};
