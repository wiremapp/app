import { LayoutComponent, PrivacyPolicyComponent } from "@/components";
import { NextRouter } from "next/router";
import React from "react";

export const Page = ({
  router,
  customTitle,
}: {
  router?: NextRouter;
  customTitle?: string;
}) => {
  return (
    <LayoutComponent title={customTitle} router={router}>
      <PrivacyPolicyComponent />
    </LayoutComponent>
  );
};

export default Page;
