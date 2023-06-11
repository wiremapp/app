import Link from "next/link";
import Image from "next/image";
import React from "react";

export const LogoComponent = ({}) => {
  return (
    <Link href="/">
      <div className="logo-area">
        <div className="relative h-[32px] w-[26px]">
          <Image 
            src="/images/logo.png"
            alt="Wiremap Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <h1 className="text-md ml-4 hidden font-black tracking-logo sm:block">
          {process.env.NEXT_PUBLIC_APP_TITLE}
        </h1>
      </div>
    </Link>
  );
};

export default LogoComponent;
