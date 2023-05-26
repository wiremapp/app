import { LogoComponent, NewsLetterFormComponent } from "@/components";
import { ButtonComponent as Button } from "@/components";
import { useEmailSubscription } from "@/hooks";
import Link from "next/link";
import React from "react";

export const Component = () => {
  return (
    <footer aria-label="Site Footer">
      <div>
        <div className="justify-center sm:justify-between">
          <div className="flex items-center">
            <LogoComponent />
            <p className="ml-5 mr-1 shrink-0 text-center sm:ml-10 md:mr-10">
              Get the latest news!
            </p>
            <p className="mr-1 block shrink-0 md:hidden">Sign up to the</p>
            <a
              href=""
              className="block shrink-0	text-orange-500 text-opacity-100 underline md:hidden"
            >
              newsletter
            </a>
            <p className="block md:hidden">.</p>
          </div>
            <NewsLetterFormComponent />
        </div>
      </div>
      <div>
        <div>
          <div className="my-1 flex justify-start space-x-5 sm:my-0">
            <Link href="/privacy" passHref>
              <a className="text-xs text-white text-opacity-70 underline hover:text-opacity-100">
                Privacy Policy
              </a>
            </Link>
            <Link href="/contact" passHref>
              <a className="text-xs text-white text-opacity-70 underline hover:text-opacity-100">
                Contact
              </a>
            </Link>
            <Link href="/terms" passHref>
              <a className="text-xs text-white text-opacity-70 underline hover:text-opacity-100">
                Terms of Service
              </a>
            </Link>
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
