import {
  AuthModalComponent,
  MobileMenuComponent as Burger,
  ButtonComponent as Button,
  LogoComponent,
  ModalWrapperComponent,
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
  const [signInModal, setSignInModal] = useState(false);

  const { t } = useTranslation();
  const currentPathname = router?.pathname;
  const isPWA = useIsPWA();

  const SignInModalButton = () => {
    return (
      <ModalWrapperComponent
        state={{ modal: signInModal, setModal: setSignInModal }}
        component={
          <Button
            href="/signin"
            aria-label={"Sign In"}
            onClick={(e) => {
              e.preventDefault();
              setSignInModal(!signInModal);
            }}
          >
            SignIn
          </Button>
        }
      >
        <AuthModalComponent
          state={{ modal: signInModal, setModal: setSignInModal }}
          router={router}
        />
      </ModalWrapperComponent>
    );
  };

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
                    <Link key={`${e.id}_nav`} href={e.href} passHref>
                      <a
                        className={`${
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
          <SignInModalButton />
          <Button
            href="/app"
            type="primary"
            aria-label={"Open App"}
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
