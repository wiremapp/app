import Image from "next/image";
import Link from "next/link";
import React from "react";

export const LogoComponent = ({
  text = true,
  link = true,
}: {
  text?: boolean;
  link?: boolean;
}) => {
  return (
    <Link
      href="/"
      onClick={(e) => {
          e.preventDefault();
      }}
    >
      <div className="logo-area">
        <div className="relative h-[32px] w-[26px]">
          <Image
            src="/images/logo.png"
            alt="Wiremap Logo"
            layout="fill"
            objectFit="contain"
          />
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
