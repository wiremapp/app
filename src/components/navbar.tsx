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
import { useIsPWA } from "@/hooks";

type Props = {
  menuData: any[];
  variant?: string;
  router: NextRouter;
  scrollY: number;
  transparentNav?: boolean;
};

export const Component = ({ router, menuData }: Props) => {
  const [visible, setMobileMenu] = useState(false);
  const { t } = useTranslation();
  const currentPathname = router?.pathname;
  const isPWA = useIsPWA();
  return (
    <nav
      aria-label="Site Navigation"
      className={`navbar-default ${isPWA ? "pt-20" : null}`}
    >
      <div className={`container`}>
        <LogoComponent />
        <div className="menu">
          <div className="menu-container">
            <nav>
              {menuData.map(
                (e: { id: string; name: string; href: string | UrlObject }) => {
                  return (
                    <Link
                      key={`${e.id}_nav`}
                      href={e.href}
                      className={`${
                        e.href === currentPathname
                          ? "opacity-100"
                          : undefined === currentPathname && e.href === "/"
                          ? "opacity-100"
                          : "opacity-70"
                      }`}
                    >
                      {t(`${e.id}_label`)}
                    </Link>
                  );
                }
              )}
            </nav>
          </div>

          <Button href="/signin" ariaLabel={"Sign In"}>
            SignIn
          </Button>
          <Button
            href="/app"
            type="primary"
            ariaLabel={"Open App"}
            space={"medium"}
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
