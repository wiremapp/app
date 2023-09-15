import Link from "next/link";
import React from "react";

import { useTranslation } from "react-i18next";
import { CopyrightTextComponent } from "@/stories/components/units/copyrightText";
import { NewsLetterFormComponent } from "@/stories/components/units/newsletterForm";
import { LogoComponent } from "@/stories/components/units/logo";

type Props = {
  children?: any;
  className?: string;
  contentTitle?: string;
  variant?: "404" | "mt" | null;
};

export const NotFoundErrorComponent = (props) => {
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
          <Link href="/">
            Return to Wiremap.
          </Link>
        </p>
        <CopyrightTextComponent {...props}/>
      </div>
    </div>
  );
};

const MaintErrorComponent = (props) => {
  const { t } = useTranslation();
  return (
    <div className="my-20 flex flex-col space-y-4">
      <div className="md:w-[50%] space-y-4">
        <h1 className="text-3xl font-black">{t("checkSoon_label")}</h1>
        <p className="text-white text-opacity-70">{t("maint_desc")}</p>
      </div>
      <div className="space-y-4 pt-4 border-t border-white/10">
        <div className="justify-center sm:justify-between space-y-2">
          <div className="flex items-center">
            <p className="text-white">
              Be the first to know when we&apos;re ready.{" "}
              <span className="md:hidden">
                <a onClick={() => {}}>Sign Up</a> to the newsletter.
              </span>
            </p>
          </div>
          <NewsLetterFormComponent />
        </div>
        <CopyrightTextComponent {...props} />
      </div>
    </div>
  );
};

export const ErrorComponent = (props) => {
  return (
    <section className="bg-blue-850 h-full">
      <div className="flex flex-col justify-center">
        <LogoComponent />
        {props.variant === "mt" ? (
          <MaintErrorComponent {...props}/>
        ) : props.variant === "404" ? (
          <NotFoundErrorComponent {...props}/>
        ) : (
          <div className="my-20 flex flex-col">
            <div>

              <h1 className="mb-6 text-3xl font-black">
                {props.contentTitle || props.locale.t("genericError_title")}
              </h1>

              <p className="pb-9 text-white text-opacity-70">
                {props.locale.t("maint_desc")}
              </p>

            </div>

            <div className="border-t border-white/10 pt-9">
              <p className="text-white">
                Be the first to know when we&apos;re ready
              </p>
              <NewsLetterFormComponent />
              <CopyrightTextComponent {...props} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ErrorComponent;
