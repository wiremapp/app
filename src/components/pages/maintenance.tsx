import Image from "next/image";
import { LayoutComponent } from "@/components";
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
    <LayoutComponent title={customTitle} router={router} footer={true}>
      <div className="w-full flex-grow">
        <div className="mx-auto flex h-full w-full max-w-6xl flex-col items-center justify-center px-6 lg:px-32">
          <div className="flex w-full items-center justify-center bg-gray-500">
            Check back soon...
          </div>
        </div>
      </div>
    </LayoutComponent>
  );
};

export default Page;
