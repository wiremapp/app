import { NextRouter } from "next/router";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { UrlObject } from "url";
import { useIsPWA } from "@/hooks/isPWA";
import { signOut, useSession } from "next-auth/react";
import { ModalWrapperComponent } from "@/components/modalWrapper";
import { Button } from "@/components/button";
import AuthModalComponent from "@/components/authModal";
import { LogoComponent } from "@/components/logo";
import { MobileMenuComponent } from "@/components/mobileMenu";

export const NavbarComponent = ({ router, menuData }) => {
  const [visible, setMobileMenu] = useState(false);
  const [signInModal, setSignInModal] = useState(false);
  const { data: session } = useSession();

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
            <div className="hidden sm:block">
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
            href="/dashboard"
            variant="primary"
            aria-label={"Open App"}
            space={"medium"}
          >
            Open App
          </Button>
          <MobileMenuComponent
            data={menuData}
            state={{ visible, setMobileMenu }}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
