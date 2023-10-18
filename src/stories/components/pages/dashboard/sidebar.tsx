import React from "react";
import { LogoComponent } from "@/stories/components/units/logo";
import { RiFolderHistoryFill } from "react-icons/ri";
import { TiGroup } from "react-icons/ti";
import { HiMiniCog6Tooth } from "react-icons/hi2";
import Link from "next/link";

export const DashSidebarComponent = (props) => {
  return (
    <div className="flex w-[64px] flex-col items-center py-4 space-y-6">
      <LogoComponent text={false} link={false} />

      <div className="flex flex-col text-2xl justify-between h-full">
        <div className="flex flex-col text-2xl space-y-2  ">
          <Link
            href="/projects"
            className={`${
              props.router.pathname === "/projects"
                ? " text-white/80"
                : "text-white/50"
            }   hover:text-white/70`}
          >
            <RiFolderHistoryFill className="hover:text-white/70" />
          </Link>

          <Link
            href="/orgs"
            className={`${
              props.router.pathname === "/orgs"
                ? " text-white/80"
                : "text-white/50"
            }   hover:text-white/70`}
          >
            <TiGroup />
          </Link>
        </div>

        <div className="flex flex-col text-2xl space-y-2 text-white/50 ">
          <HiMiniCog6Tooth className="hover:text-white/70" />
        </div>
      </div>
    </div>
  );
};

export default DashSidebarComponent;
