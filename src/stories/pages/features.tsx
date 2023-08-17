import { LayoutComponent } from "@/stories/units/layout";
import { FeaturesComponent } from "@/stories/units/features";
import React from "react";

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
