import {
  AuthModalComponent,
  MobileMenuComponent as Burger,
  ButtonComponent as Button,
  LogoComponent,
  ModalWrapperComponent,
} from "@/components";
import { NextRouter } from "next/router";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { UrlObject } from "url";
import { useIsPWA } from "@/hooks";
import { signOut, useSession } from "next-auth/react";

type Props = {
  menuData: any[];
  variant?: string;
  router: NextRouter;
  scrollY: number;
  transparentNav?: boolean;
  appState: {
    appOpen: boolean;
    setAppOpen: Dispatch<SetStateAction<boolean>>;
  };
};

export const Component = ({ router, menuData, appState }: Props) => {
  const [visible, setMobileMenu] = useState(false);
  const [signInModal, setSignInModal] = useState(false);
  const { data: session } = useSession();

  const handleOpenApp = () => {
    appState.setAppOpen(true);
  };

  const { t } = useTranslation();
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
      <div>
        <LogoComponent />
        <div>
          <div>
            <nav>
              {menuData.map(
                (e: { id: string; name: string; href: string | UrlObject }) => {
                  return (
                    <Link key={`${e.id}_nav`} href={e.href} passHref>
                      <a
                        className={`${
                          e.id === "about" ? "hidden lg:inline-block" : ""
                        } ${
                          router.pathname === e.href
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
          {!session ? (
            <SignInModalButton />
          ) : (
            <div className="hidden">
              <Button
                href="/"
                variant="secondary"
                aria-label={"Sign In"}
                space={"medium"}
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                {session?.user.email}
              </Button>
            </div>
          )}
          <Button
            href="/"
            onClick={(e) => {
              handleOpenApp();
              e.preventDefault();
            }}
            variant="primary"
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
