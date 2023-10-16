import React, { useState } from "react";
import { signOut } from "next-auth/react";
import { Button } from "@/stories/components/button";
import { LogoComponent } from "@/stories/components/units/logo";
import { MobileMenuComponent } from "@/stories/components/mobileMenu";
import styles from "./style.module.css";
import { SignInModalButton } from "../authButton";
import { BsThreeDots } from "react-icons/bs";

export const NavbarComponent = (props) => {
  const [visible, setMobileMenu] = useState(false);

  return (
    <nav
      aria-label="Site Navigation"
      className={styles["navbar-default"]}
      style={{ paddingTop: props.isPWA ? "5rem" : "0" }}
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
                        } 
                        ${
                          e.id === "faq" ? "hidden lg:inline-block" : ""
                        }
                        ${
                          e.id === "pricing" ? "hidden lg:inline-block" : ""
                        }
                        ${
                          props.router.pathname === e.href
                            ? "opacity-100"
                            : "opacity-70"
                        }`}
                      >
                        {props.locale.t(`${e.id}_label`)}
                      </a>
                    );
                  },
                )}
              <div className="dropdown">
                <div
                  className={` rounded-[4px] relative flex items-center`}
                >
                  <a href={"/"} className={`opacity-70`}>
                    <BsThreeDots/>
                  </a>
                </div>
                <div
                  className={`dropdown-menu shadow-md z-20 rounded-[4px] text-gray-700 pt-2`}
                >
                  <div
                    className={`flex flex-col border h-48 w-16 p-2 bg-gray-700 border-gray-600 text-gray-200"`}
                  >
                    TT
                  </div>
                </div>
              </div>
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
