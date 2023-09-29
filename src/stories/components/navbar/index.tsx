import React, { useState } from "react";
import { useIsPWA } from "@/hooks/isPWA";
import { signOut } from "next-auth/react";
import { Button } from "@/stories/components/button";
import { LogoComponent } from "@/stories/components/units/logo";
import { MobileMenuComponent } from "@/stories/components/mobileMenu";
import styles from "./style.module.css";
import { SignInModalButton } from "../authButton";


export const NavbarComponent = (props) => {
  const [visible, setMobileMenu] = useState(false);

  const isPWA = useIsPWA();

  return (
    <nav
      aria-label="Site Navigation"
      className={styles["navbar-default"]}
      style={{ paddingTop: isPWA ? "5rem" : "0" }}
    >
      <div
        className={`${styles["row"]} ${
          props.variant === "editor" ? "" : "max-w-[84rem]"
        }`}
      >
        <LogoComponent text={props.variant === "editor" ? false : true} />
        <div className={styles["cta-buttons"]}>
          <div>
            <nav>
              {props.variant !== "editor" &&
                props.menuData.map(
                  (e: { id: string; name: string; href: string }) => {
                    return (
                      <a
                        key={`${e.id}_nav`}
                        href={e.href}
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
            <SignInModalButton {...props} />
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
