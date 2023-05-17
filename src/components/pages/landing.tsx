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
    <LayoutComponent title={customTitle} router={router}>
      <div className="flex h-screen items-center justify-center">
        <div className="mx-auto my-auto h-auto w-full max-w-6xl flex-col items-center justify-center p-8">
          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(3, 3, 3, 0.24) 0%, rgba(2, 2, 2, 0.24) 100%)",
            }}
            className="card"
          >
            <h1>Landing...</h1>
          </div>
        </div>
      </div>
    </LayoutComponent>
  );
};

export default Page;
