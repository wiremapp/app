import { LogoComponent } from "@/components";
import { ButtonComponent as Button } from "@/components";
import React from "react";

export const Component = () => {
  return (
    <footer aria-label="Site Footer" className="footer-section">
      <div className="editor-foot">
        <div className="container">
          <div className="my-1 flex justify-start space-x-5 sm:my-0">
            <a href="">Privacy Policy</a>
            <a href="">Contact</a>
            <a href="">Terms of Service</a>
          </div>
          <div>
            <p className="text-center text-xs text-white text-opacity-70 sm:text-right">
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
