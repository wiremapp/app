import { PricingComponent } from "@/components/pricing";
import { LayoutComponent } from "@/components/layout";
import { useTranslation } from "react-i18next";
import { NextRouter } from "next/router";
import Image from "next/image";
import React from "react";

export const PricingPage = (props) => {
  return (
    <LayoutComponent
      {...props}
      title={props.locale.t("pricing_label")}
      pageDesc={props.locale.t("pricing_desc")}
    >
      <PricingComponent {...props} variant={"secondary"} />
    </LayoutComponent>
  );
};

export default PricingPage;
