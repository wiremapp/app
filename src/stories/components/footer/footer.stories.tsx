import { FooterComponent } from "@/stories/components/footer";
import React from "react";

export default {
  title: "Components/Footer",
  component: FooterComponent,
};

export const Footer = (props) => (
  <FooterComponent {...props} />
);

Footer.args = {
  locale : { t: (e)=>{
    return e
  }},
  menuData: [
    {
      id: "home",
      href: "/",
    },
    {
      id: "features",
      href: "/features",
    },
    { id: "pricing", href: "/pricing" },
    {
      id: "faq",
      href: "/faq",
    },
  ],
  auth: { session: null, state: "authenticated" },
  router: { pathname : "/"}
};
