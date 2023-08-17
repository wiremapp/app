import React from "react";
import { CookieConsentComponent } from "@/stories/components/cookieConsent";

export default {
  title: "Components/CookieConsent",
  component: CookieConsentComponent,
  layout: "centered"
};

export const CookieConsent = (props) => (
  <CookieConsentComponent {...props} />
);

CookieConsent.args = {
  locale : { t: (e)=>{
    return e
  }},
};
