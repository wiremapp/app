import {
  MobileMenuComponent as Burger,
  ButtonComponent as Button,
  LogoComponent,
} from "@/components";
import { NextRouter } from "next/router";
import React, { useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { UrlObject } from "url";

type Props = {
  menuData: any[];
  variant?: string;
  router: NextRouter;
  scrollY: number;
  transparentNav?: boolean;
};

export const Component = ({
  scrollY,
  router,
  menuData,
  transparentNav,
  variant = "primary",
}: Props) => {
  const [visible, setMobileMenu] = useState(false);
  const [modal, setModal] = useState(false);
  const { t } = useTranslation();
  const currentPathname = router?.pathname;

  return (
    <nav
      aria-label="Site Navigation"
      className={`absolute border-transparent border-0 text-white z-[98] h-[96px] w-full px-6 lg:px-32`}
    >
      <div
        className={`mx-auto flex h-full w-full max-w-4xl items-center justify-between text-sm`}
      >
        <LogoComponent />
        <div className="flex w-full items-center justify-end space-x-2">
          <div className="mr-0 flex grow items-center md:justify-center lg:mr-4 lg:justify-end">
            <nav className="hidden items-center space-x-6 px-2 uppercase drop-shadow-md md:flex ">
              {menuData.map(
                (e: { id: string; name: string; href: string | UrlObject }) => {
                  return (
                    <Link key={`${e.id}_nav`} href={e.href}>
                      <a
                        className={`cursor-pointer text-white font-semibold hover:opacity-100 dark:text-white ${
                          e.href === currentPathname
                            ? "opacity-100"
                            : undefined === currentPathname && e.href === "/"
                            ? "opacity-100"
                            : "opacity-70"
                        }`}
                      >
                        {t(`${e.id}_label`)}
                      </a>
                    </Link>
                  );
                }
              )}
            </nav>
          </div>

          <Button
            href="/signin"
            ariaLabel={"Sign In"}
          >
            SignIn
          </Button>
          <Button
            href="/app"
            type="primary"
            ariaLabel={"Open App"}
          >
            Open App
          </Button>
          <Burger data={menuData} state={{ visible, setMobileMenu }} />
        </div>
      </div>
    </nav>
  );
};

export default Component;
