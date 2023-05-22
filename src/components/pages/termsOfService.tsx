import { LayoutComponent, TermsOfServiceComponent } from "@/components";
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
      <TermsOfServiceComponent />
    </LayoutComponent>
  );
};

export default Page;
