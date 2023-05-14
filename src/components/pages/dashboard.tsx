import { useState } from "react";
import { LayoutComponent } from "@/components";


export const Page = ({ router }) => {
  return (
    <LayoutComponent router={router} title={"Dashboard"} navbar={false}>
      
    </LayoutComponent>
  );
};

export default Page;
