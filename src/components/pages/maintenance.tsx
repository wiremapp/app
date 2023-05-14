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
      <div className="flex h-screen flex-col items-center justify-center">
        <div className="mx-auto my-auto h-auto w-full max-w-6xl flex-col items-center justify-center p-8">
          <div className="flex items-center">
            <div className="relative h-[36px] w-[32px]">
              <Image
                src="/images/logo.png"
                alt="Wiremap Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h1 className="logo-text ml-4 text-xl font-black">
              {process.env.NEXT_PUBLIC_APP_TITLE}
            </h1>
          </div>
          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(3, 3, 3, 0.24) 0%, rgba(2, 2, 2, 0.24) 100%)",
            }}
            className="card"
          >
            <h1> Check back soon...</h1>
          </div>
        </div>
      </div>
    </LayoutComponent>
  );
};

export default Page;
