import { LogoComponent } from "@/components";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { ImNpm } from "react-icons/im";
import { ButtonComponent as Button } from "@/components";
import React from "react";

export const Component = () => {
  return (
    <footer aria-label="Site Footer" className="footer-section">
      <div className="top-foot">
        <div className="container">
          <div className="flex flex-row items-center">
            <LogoComponent />
            <p className="pl-10">Get the latest news!</p>
          </div>
          <div className="flex w-1/2 justify-end">
            <input
              className="mr-2 rounded bg-white px-5 text-black text-opacity-70 opacity-70"
              placeholder="Enter your email..."
            ></input>
            <Button
              href=" "
              type="primary"
              ariaLabel={"Email Sign Up"}
              space={"medium"}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
      <div className="bot-foot">
        <div className="container">
          <div className="flex w-1/5 justify-between">
            <a href="">
              Privacy Policy
            </a>
            <a href="">
              Contact
            </a>
            <a href="">
              Terms of Service
            </a>
          </div>
          <div className="w-1/2">
            <p className="flex-grow text-right text-xs text-white text-opacity-70">
              Copyright &copy; {new Date().getFullYear()}{" "}
              {process.env.NEXT_PUBLIC_STATIC_TITLE
                ? process.env.NEXT_PUBLIC_APP_TITLE + "."
                : ""}{" "}
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Component;
