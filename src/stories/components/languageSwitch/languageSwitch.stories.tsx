import { LanguageSwitchComponent } from "@/stories/components/languageSwitch";
import React from "react";

export default {
  title: "Components/LanguageSwitch",
  component: LanguageSwitchComponent,
};

export const LanguageSwitch = (props) => (
  <LanguageSwitchComponent {...props} />
);

LanguageSwitch.args = {
  locale : { t: (e)=>{
    return e
  }},
  router: { pathname : "/"}
};
