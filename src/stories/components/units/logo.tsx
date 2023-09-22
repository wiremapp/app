import Image from "next/image";
import Link from "next/link";
import React from "react";

export const LogoComponent = ({
  text = true,
  link = true,
  loading = false,
}: {
  text?: boolean;
  link?: boolean;
  loading?: boolean;
}) => {
  return (
    <Link
      href="/"
    >
      <div className="logo-area">
        {/* <div className="relative h-[32px] w-[26px]">
          <Image
            src="/images/logo.png"
            alt="Wiremap Logo"
            layout="fill"
            objectFit="contain"
          />   
      
        </div> */}

        <div className="flex h-[32px] w-[26px] gap-1">
          <div className={`flex flex-grow flex-col gap-0.5 justify-end`}>
            <div className={`${loading ? "animate-height": "" } flex h-[20px] rounded-full bg-primary bg-opacity-[64%]`}></div>
            <div className="flex min-h-[12px] rounded-full bg-secondary"></div>
          </div>

          <div className="flex flex-grow items-end">
            <div className={`${loading ? " animate-height1": "" } flex h-[24px] flex-grow rounded-full bg-primary`}></div>
          </div>


          <div className="flex flex-grow flex-col gap-0.5 justify-end">
            <div className={` ${loading ? " animate-height": "" } flex h-[20px] rounded-full bg-primary`}></div>
            <div className="flex min-h-[16px] rounded-full bg-primary bg-opacity-[64%]"></div>
          </div>
        </div>

        {!text ? null : (
          <h1 className="text-md ml-4 hidden font-black tracking-logo sm:block">
            {process.env.NEXT_PUBLIC_APP_TITLE}
          </h1>
        )}
      </div>
    </Link>
  );
};

export default LogoComponent;
