import { LogoComponent } from "@/components";
import { ButtonComponent as Button } from "@/components";
import React from "react";

export const Component = () => {
  return (
    <footer aria-label="Site Footer" className="footer-section">
      <div className="top-foot">
        <div className="container">
          <div className="flex items-center">
            <LogoComponent />
            <p className="mr-1 shrink-0 ml-5 sm:ml-10 text-center md:mr-10">
              Get the latest news!
            </p>
            <p className="mr-1 block shrink-0 md:hidden">Sign up to the</p>
            <p className="block shrink-0	text-orange-500 text-opacity-100 underline md:hidden">
              newsletter
            </p>
            <p className="block md:hidden">.</p>
          </div>
          <div className="flex justify-end space-x-2">
            <input
              className="hidden rounded bg-white px-4 text-black text-opacity-70 opacity-70 md:block"
              placeholder="Enter your email..."
            ></input>
            <Button
              className="hidden shrink-0 md:block"
              href=" "
              type="primary"
              aria-label={"Email Sign Up"}
              space={"medium"}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
      <div className="bot-foot">
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
