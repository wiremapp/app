import { useTranslation } from "react-i18next";
import { HiXMark } from "react-icons/hi2";
import { signIn } from "next-auth/react";
import { useIsElectron } from "@/hooks/isElectron";
import { LogoComponent } from "@/stories/components/units/logo";
import { Button } from "@/stories/components/button";
import styles from "./style.module.css";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export const AuthModalComponent = (props) => {
  return (
    <div className={styles.authModal}>
      <div className="flex items-center justify-between px-10 pt-8">
        <div className="flex w-1/3 justify-start">
          <HiXMark
            size={40}
            className="opacity-70 transition-all hover:scale-110 hover:opacity-100"
            onClick={() => props.state.setModal(!props.state.modal)}
          />
        </div>
        <div className="flex w-1/3 justify-center">
          <LogoComponent />
        </div>
        <div className="flex w-1/3 justify-end">
          <Button
            href="/signin"
            aria-label={"Sign In"}
            className="flex h-[45px] justify-center rounded-xl tracking-wide"
          >
            {props.locale.t("signup_label")}
          </Button>
        </div>
      </div>

      <div className="flex h-screen flex-col items-center justify-center pb-16">
        <div className="flex h-[500px] w-[450px] flex-col items-center justify-center space-y-5">
          <h1 className="text-3xl font-semibold normal-case tracking-wider">
            {props.locale.t("signIn_label")}
          </h1>

          <div className="flex w-3/4 flex-col space-y-4">
            <input
              className="mr-2 h-[45px] w-full rounded-sm bg-white px-4 text-base tracking-wide text-black/70 opacity-70 "
              placeholder="Email"
            />
            <Button
              href="/signin"
              aria-label={"Sign In"}
              className="flex h-[45px] justify-center rounded-xl tracking-wide"
              variant="primary"
              onClick={(e) => {
                e.preventDefault();
                signIn("email");
              }}
            >
              {props.locale.t("signIn_label")}
            </Button>
          </div>

          <div className="flex w-3/4 items-center ">
            <hr className=" w-3/4 rounded-3xl border-white/25" />
            <p className="mx-2 select-none uppercase text-white/50"> Or </p>
            <hr className=" w-3/4 rounded-3xl border-white/25" />
          </div>

          <div className="flex w-3/4 flex-col space-y-4">
            <Button
              href="/signin"
              variant="secondary"
              aria-label={"Sign In"}
              className="flex h-[45px] justify-center rounded-xl tracking-wide"
              onClick={(e) => {
                e.preventDefault();
                signIn("google");
              }}
            >
              <Image
                src="/images/icons/google.png"
                alt="Google"
                className="mr-6"
                width={25}
                height={25}
              ></Image>
              Google
            </Button>

            <Button
              href="/signin"
              variant="secondary"
              aria-label={"Sign In"}
              className="flex h-[45px] justify-center rounded-xl tracking-wide"
              onClick={(e) => {
                e.preventDefault();
                signIn("github");
              }}
            >
              <Image
                src="/images/icons/github.png"
                alt="GitHub"
                className="mr-6"
                width={25}
                height={25}
              ></Image>
              GitHub
            </Button>
          </div>

          <p className="pb-20 text-xs text-white text-opacity-30 ">
            {props.locale.t("signIn_agreement_label")}{" "}
            <Link
              className="font-bold text-white text-opacity-40 hover:text-opacity-70"
              href="/terms"
            >
              {props.locale.t("terms_label")}
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModalComponent;
