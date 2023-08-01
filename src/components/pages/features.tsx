import { LayoutComponent } from "@/components/layout";
import { useTranslation } from "react-i18next";
import React from "react";

import { FeaturesComponent } from "../features";

export const FeatPage = (props) => {
  return (
    <LayoutComponent
      {...props}
      title={props.locale.t("features_label")}
      pageDesc={props.locale.t("features_desc")}
    >
      <FeaturesComponent {...props} variant={"secondary"} />
    </LayoutComponent>
  );
};

export default FeatPage;
