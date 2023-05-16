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
      <LogoComponent />
      </div>
      <div className="bot-foot">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <p className="flex-grow text-left text-xs">
            Copyright &copy; {new Date().getFullYear()}.{" "}
            {process.env.NEXT_PUBLIC_STATIC_TITLE
              ? process.env.NEXT_PUBLIC_APP_TITLE + "."
              : ""}{" "}
            All rights reserved.
          </p>
          <nav className="flex justify-end text-xs">T </nav>
        </div>
      </div>
    </footer>
  );
};

export default Component;
