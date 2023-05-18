import { useTranslation } from "react-i18next";
import React from "react";
import { useIsElectron } from "@/hooks";
import {ButtonComponent as Button} from "@/components";
import { signIn } from "next-auth/react";

export const Component = ({ state, router }) => {
  const { t } = useTranslation();
  const isElectron = useIsElectron();

  return (
    <div
      className="fixed right-[-1px] top-0 h-[100vh] w-[100vw] bg-gradient-to-t from-[#020202]/25 to-[#141414]/70 translate-x-[-1px] backdrop-blur-lg transition"
    >
      <button
        onClick={() => state.setModal(!state.modal)}
        className="absolute float-left mb-3 ml-4 mt-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          aria-hidden="true"
          className="h-6 w-6"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>

      <div className="bg-grey-lighter flex min-h-screen items-center justify-center">
        <div className="flex h-[400px]  w-[400px] items-center justify-center bg-gray-500">
        <Button
          href="/signin"
          aria-label={"Sign In"}
          onClick={(e) => {
            e.preventDefault();
            signIn("email");
          }}
        >
          Sign in with Email
        </Button>
        <Button
          href="/signin"
          aria-label={"Sign In"}
          onClick={(e) => {
            e.preventDefault();
            signIn("google");
          }}
        >
          Sign in with Google
        </Button>
        </div>
      </div>
    </div>
  );
};

export default Component;
