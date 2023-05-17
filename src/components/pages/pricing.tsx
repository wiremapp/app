import Image from "next/image";
import { LayoutComponent, PricingComponent } from "@/components";
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
      <PricingComponent />
    </LayoutComponent>
  );
};

export default Page;
