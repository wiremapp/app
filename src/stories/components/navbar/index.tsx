import React, { useState } from "react";
import Link from "next/link";
import { UrlObject } from "url";
import { useIsPWA } from "@/hooks/isPWA";
import { signOut } from "next-auth/react";
import { ModalWrapperComponent } from "@/stories/units/modalWrapper";
import { Button } from "@/stories/components/button";
import AuthModalComponent from "@/stories/components/authModal";
import { LogoComponent } from "@/stories/units/logo";
import { MobileMenuComponent } from "@/stories/units/mobileMenu";
import styles from "./style.module.css";

export const NavbarComponent = (props) => {
  const [visible, setMobileMenu] = useState(false);
  const [signInModal, setSignInModal] = useState(false);

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
            {props.locale.t("signIn_label")}
          </Button>
        }
      >
        <AuthModalComponent
          state={{ modal: signInModal, setModal: setSignInModal }}
          {...props}
        />
      </ModalWrapperComponent>
    );
  };

  return (
    <nav
      aria-label="Site Navigation"
      className={styles["navbar-default"]}
      style={{ paddingTop: isPWA ? "5rem" : "0" }}
    >
      <div>
        <LogoComponent text={props.variant === "editor" ? false : true} />
        <div>
          <div>
            <nav>
              {props.variant !== "editor" &&
                props.menuData.map(
                  (e: {
                    id: string;
                    name: string;
                    href: string ;
                  }) => {
                    return (
                      <a key={`${e.id}_nav`} href={e.href}
                          className={`${
                            e.id === "about" ? "hidden lg:inline-block" : ""
                          } ${
                            props.router.pathname === e.href
                              ? "opacity-100"
                              : "opacity-70"
                          }`}
                        >
                          {props.locale.t(`${e.id}_label`)}
                      </a>
                    );
                  }
                )}
            </nav>
          </div>
          {!props.auth.session ? (
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
                {props.auth.session?.user.email}
              </Button>
            </div>
          )}
          <Button
            href="/dashboard"
            variant="primary"
            aria-label={"Open App"}
            space={"medium"}
          >
            {props.locale.t("openApp_label")}
          </Button>
          <MobileMenuComponent
            data={props.menuData}
            state={{ visible, setMobileMenu }}
          />
        </div>
      </div>
    </nav>
  );
};
