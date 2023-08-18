import { LayoutComponent } from "@/stories/components/units/layout";
import { FeaturesComponent } from "@/stories/components/units/features";
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
