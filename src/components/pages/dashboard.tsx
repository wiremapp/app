import { useState } from "react";
import { LayoutComponent } from "@/components";
import React from "react";

export const Page = ({ router }) => {
  return (
    <LayoutComponent router={router} title={"Dashboard"} navbar={false}>
      
    </LayoutComponent>
  );
};

export default Page;
