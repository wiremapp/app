import { useTranslation } from "react-i18next";
import { HiXMark } from "react-icons/hi2";
import { signIn } from "next-auth/react";
import { useIsElectron } from "@/hooks/isElectron";
import { LogoComponent } from "@/components/logo";
import { Button } from "@/stories/components/button";
import styles from "./style.module.css";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export const AuthModalComponent = ({ state, router }) => {
  const { t } = useTranslation();
  const isElectron = useIsElectron();

  return (
    <div className={styles.authModal}>
      <div className="flex items-center justify-between px-10 pt-8">
        <div className="flex w-1/3 justify-start">
          <HiXMark
            size={40}
            className="opacity-70 transition-all hover:scale-110 hover:opacity-100"
            onClick={() => state.setModal(!state.modal)}
          />
        </div>
        <div className="flex w-1/3 justify-center">
          <LogoComponent />
        </div>
        <div className="flex w-1/3 justify-end">
          <Button
            href="/signin"
            aria-label={"Sign In"}
            className="flex h-[45px] w-[100px] justify-center rounded-xl tracking-wide"
          >
            Sign Up
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex h-[500px] w-[450px] flex-col items-center justify-center space-y-5">
          <h1 className="text-3xl font-semibold normal-case tracking-wider">
            Sign In
          </h1>
          <div className="w-3/4 space-y-4">
            <input
              className="mr-2 h-[45px] w-full rounded-xl bg-white px-4 text-base tracking-wide text-black/70 opacity-70 "
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
              Sign In
            </Button>
          </div>
          <div className="flex w-3/4 items-center">
            <hr className=" w-3/4 rounded-3xl border-white/25" />
            <p className="mx-2 select-none uppercase text-white/50"> Or </p>
            <hr className=" w-3/4 rounded-3xl border-white/25" />
          </div>
          <div className="flex w-3/4 space-x-4 tracking-wide">
            <Button
              href="/signin"
              aria-label={"Google Sign In"}
              className="flex h-[45px] w-1/2 rounded-xl"
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
              aria-label={"GitHub Sign In"}
              className="flex h-[45px] w-1/2 rounded-xl"
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

          <p className="pb-20 text-xs text-white text-opacity-30">
            By signing in to Wiremap, you agree to our{" "}
            <Link
              className="font-bold text-white text-opacity-40 hover:text-opacity-70"
              href="/terms"
            >
              Terms of Service
            </Link>
            .
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default AuthModalComponent;
