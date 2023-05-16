import Image from "next/image";
import { LayoutComponent } from "@/components";
import { NextRouter } from "next/router";

export const Page = ({
  router,
  customTitle,
}: {
  router?: NextRouter;
  customTitle?: string;
}) => {
  return (
    <LayoutComponent title={customTitle} router={router}>
      <div className={"bg-red-200 w-full h-full mt-[95.99px]"}>
        f
      </div>
    </LayoutComponent>
  );
};

export default Page;
