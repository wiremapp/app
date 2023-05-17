import { useScrollProgress } from "@/hooks";
import Link from "next/link";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import React from "react";

const Component = ({}) => {
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
        <h1 className="text-md ml-4 hidden font-black tracking-logo md:block">
          {process.env.NEXT_PUBLIC_APP_TITLE}
        </h1>
      </div>
    </Link>
  );
};

export default Component;
