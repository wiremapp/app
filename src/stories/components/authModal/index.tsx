import { HiXMark } from "react-icons/hi2";
import { signIn } from "next-auth/react";
import { LogoComponent } from "@/stories/components/units/logo";
import { Button } from "@/stories/components/button";
import styles from "./style.module.css";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import TextInputComponent from "../units/textInput";

export const AuthModalComponent = (props) => {
  return (
    <div className={styles.authModal}>
      <div className={styles.header}>
        <div className="flex  justify-start z-10">
          <HiXMark
            size={40}
            className="opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300"
            onClick={() => props.state.setModal(!props.state.modal)}
          />
        </div>
        <div className="flex absolute w-full justify-center z-1">
          <LogoComponent />
        </div>
        <div className="flex justify-end z-10">
          <Button
            href="/signin"
            aria-label={"Sign In"}
            className="flex justify-center tracking-wide"
          >
            {props.locale.t("signup_label")}
          </Button>
        </div>
      </div>

      <div className="flex w-[450px] flex-col items-center space-y-5">
        <h1 className="text-3xl font-semibold normal-case tracking-wider">
          {props.locale.t("signIn_label")}
        </h1>

        <div className="flex w-3/4 flex-col space-y-4">
          <TextInputComponent
            onChange={() => {}}
            placeholder={props.locale.t("email_label")}
          />
          <TextInputComponent
            onChange={() => {}}
            placeholder={props.locale.t("password_label")}
          />
          <Button
            href="/signin"
            aria-label={"Sign In"}
            className="flex justify-center tracking-wide"
            variant="primary"
            onClick={(e: React.MouseEvent<HTMLInputElement>) => {
              e.preventDefault();
              signIn("email");
            }}
          >
            {props.locale.t("signIn_label")}
          </Button>
        </div>

        <div className="flex w-3/4 items-center">
          <hr className="w-3/4 rounded-3xl border-white/25" />
          <p className="mx-2 select-none uppercase text-white/50">
            {props.locale.t("or_label")}
          </p>
          <hr className="w-3/4 rounded-3xl border-white/25" />
        </div>

        <div className="flex w-3/4 justify-between space-x-4">
          <Button
            href="/signin"
            variant="secondary"
            aria-label={"Sign In"}
            className="flex w-full justify-center tracking-wide"
            onClick={(e: React.MouseEvent<HTMLInputElement>) => {
              e.preventDefault();
              signIn("google");
            }}
          >
            <Image
              src="/images/icons/google.png"
              alt="Google"
              className="mr-4"
              width={20}
              height={20}
            ></Image>
            Google
          </Button>

          <Button
            href="/signin"
            variant="secondary"
            aria-label={"Sign In"}
            className="flex w-full justify-center tracking-wide"
            onClick={(e: React.MouseEvent<HTMLInputElement>) => {
              e.preventDefault();
              signIn("github");
            }}
          >
            <Image
              src="/images/icons/github.png"
              alt="GitHub"
              className="mr-4"
              width={20}
              height={20}
            ></Image>
            GitHub
          </Button>
        </div>

        <p className="text-xs text-white/30">
          {props.locale.t("signIn_agreement_label")}{" "}
          <Link className="hover:text-opacity-70" href="/terms" onClick={()=>{ props.setAuthModal(false)}}>
            {props.locale.t("terms_label")}
          </Link>
          .
        </p>
      </div>
      <div className="mb-16 h-[45px]"></div>
    </div>
  );
};

export default AuthModalComponent;
