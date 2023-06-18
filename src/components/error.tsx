import Link from "next/link";
import React from "react";

import { useTranslation } from "react-i18next";
import { CopyrightTextComponent } from "@/components/copyrightText";
import { NewsLetterFormComponent } from "@/components/newsletterForm";
import { LogoComponent } from "@/components/logo";

type Props = {
  children?: any;
  className?: string;
  contentTitle?: string;
  variant?: "404" | "mt" | null;
};

export const NotFoundErrorComponent = () => {
  const { t } = useTranslation();
  return (
    <div className="my-16 flex flex-col">
      <div>
        <h1 className="mb-6 mt-3 text-9xl font-black">404</h1>
        <h1 className="pb-9 text-3xl font-black uppercase">
          {t("notFound_label")}
        </h1>
      </div>
      <div className="border-t border-white/10 pt-9">
        <p className="text-white text-opacity-70">
          Whoops! Looks like the link you followed may be broken or this page
          does not exist. <br></br> Try going back to the previous page or{" "}
          <Link href="/" passHref>
            <a>Return to Wiremap.</a>
          </Link>
        </p>
        <CopyrightTextComponent />
      </div>
    </div>
  );
};

const MaintErrorComponent = () => {
  const { t } = useTranslation();
  return (
    <div className="my-20 flex flex-col">
      <div>
        <h1 className="mb-6 text-3xl font-black">{t("checkSoon_label")}</h1>
        <p className="pb-9 text-white text-opacity-70">{t("maint_desc")}</p>
      </div>
      <div className="border-t border-white/10 pt-9">
        <p className="text-white">Be the first to know when we&apos;re ready</p>
        <NewsLetterFormComponent />
        <CopyrightTextComponent />
      </div>
    </div>
  );
};

export const ErrorComponent = ({ contentTitle, variant }: Props) => {
  const { t } = useTranslation();
  return (
    <section className="bg-blue-850 h-full">
      <div className="flex flex-col justify-center">
        <LogoComponent />
        {contentTitle === "Page not found" ? (
          <div className="my-16 flex flex-col">
            <div>
              <h1 className="mb-6 mt-3 text-9xl font-black">404</h1>
              <h1 className="pb-9 text-3xl font-black">
                {contentTitle || t("genericError_title")}
              </h1>
            </div>
            <div className="border-t border-white/10 pt-9">
              <p className="text-white text-opacity-70">
                Whoops! Looks like the link you followed may be broken or this
                page does not exist. <br></br> Try going back to the previous
                page or{" "}
                <Link href="/" passHref>
                  <a
                    className="text-primary text-opacity-70 hover:text-opacity-100"
                  >
                    Return to Wiremap.
                  </a>
                </Link>
              </p>
            </div>
          </div>
        ) : (
          <div className="my-20 flex flex-col">
            <div>

              <h1 className="mb-6 text-3xl font-black">
                {contentTitle || t("genericError_title")}
              </h1>

              <p className="pb-9 text-white text-opacity-70">
                {t("maint_desc")}
              </p>

            </div>

            <div className="border-t border-white/10 pt-9">
              <p className="text-white">
                Be the first to know when we&apos;re ready
              </p>
              <div className="my-3 flex w-6/12 flex-row space-x-2">
                <input
                  className="flex flex-grow rounded bg-white px-4 uppercase text-black text-opacity-70 opacity-70"
                  placeholder="Enter your email..."
                ></input>
                <Button
                  href="/auth"
                  variant="primary"
                  aria-label={"Sign Up"}
                  space={"medium"}
                >
                  Sign Up
                </Button>
              </div>
              <p className="text-xs text-white text-opacity-70">
                COPYRIGHT &copy; 2023 WIREMAP. ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ErrorComponent;
