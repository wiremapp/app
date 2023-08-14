import { Button as ButtonComponent } from "@/components/button";
import { CookieConsentComponent } from "@/components/cookieConsent";

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
