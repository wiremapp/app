import { ButtonComponent as Button, LogoComponent } from "@/components";
import { useTranslation } from "react-i18next";
import { HiXMark } from "react-icons/hi2";
import { signIn } from "next-auth/react";
import { useIsElectron } from "@/hooks";
import Link from "next/link";
import React from "react";

export const Component = ({ state, router }) => {
  const { t } = useTranslation();
  const isElectron = useIsElectron();

  return (
    <div className="authModal">
      <div className="flex items-center justify-between px-10 pt-8">
        <HiXMark
          size={40}
          className="opacity-70 hover:opacity-100"
          onClick={() => state.setModal(!state.modal)}
        />
        <LogoComponent />
        <Button
          href="/signin"
          aria-label={"Sign In"}
          className="flex h-[45px] justify-center rounded-xl"
        >
          Sign Up
        </Button>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex h-[500px] w-[450px] flex-col items-center justify-center space-y-5">
          <h1 className="text-3xl font-semibold normal-case tracking-wider">
            Sign In
          </h1>
          <div className="w-3/4 space-y-3">
            <Button
              href="/signin"
              aria-label={"Sign In"}
              className="flex h-[45px] justify-center rounded-xl"
              onClick={(e) => {
                e.preventDefault();
                signIn("google");
              }}
            >
              Sign in with Google
            </Button>
            <Button
              href="/signin"
              aria-label={"Sign In"}
              className="flex h-[45px] justify-center rounded-xl"
              onClick={(e) => {
                e.preventDefault();
                signIn("github");
              }}
            >
              Sign in with Github
            </Button>
          </div>
          <hr className="my-20 w-3/4 rounded-3xl border bg-white opacity-25" />
          <div className="w-3/4 space-y-5">
            <input
              className="mr-2 h-[45px] w-full rounded-xl bg-white px-4 text-black text-opacity-70 opacity-70 "
              placeholder="Email"
            />
            <Button
              href="/signin"
              aria-label={"Sign In"}
              className="flex h-[45px] justify-center rounded-xl"
              variant="primary"
              onClick={(e) => {
                e.preventDefault();
                signIn("email");
              }}
            >
              Sign In
            </Button>
          </div>
          <p className="text-xs text-white text-opacity-30">
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
      <div className="flex items-center justify-between px-10 pt-8">
        <HiXMark
          size={40}
          className="opacity-0 hover:opacity-100"
          onClick={() => state.setModal(!state.modal)}
        />
        <HiXMark
          size={40}
          className="opacity-0 hover:opacity-100"
          onClick={() => state.setModal(!state.modal)}
        />
        <HiXMark
          size={45}
          className="opacity-0 hover:opacity-100"
          onClick={() => state.setModal(!state.modal)}
        />
      </div>
    </div>
  );
};

export default Component;
