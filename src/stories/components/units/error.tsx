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
  return (
    <div className="my-16 flex flex-col">
      <div>
        <h1 className="mb-6 mt-3 text-9xl font-black">404</h1>
        <h1 className="pb-9 text-3xl font-black uppercase">
          {props.locale.t("notFound_label")}
        </h1>
      </div>
      <div className="border-t border-white/10 pt-9">
        <p className="text-white text-opacity-70 mb-6">
          {props.locale.t("notFound_desc0_label")}
          <br></br> {props.locale.t("notFound_desc1_label")}{" "}
          {props.locale.t("or_label")}{" "}
          <Link href="/">{props.locale.t("returnHome_label")}</Link>
        </p>
        <CopyrightTextComponent {...props} />
      </div>
    </div>
  );
};

const MaintErrorComponent = (props) => {
  return (
    <div className="my-20 flex flex-col space-y-4">
      <div className="space-y-4 md:w-[50%]">
        <h1 className="text-3xl font-black">{props.locale.t("checkSoon_label")}</h1>
        <p className="text-white text-opacity-70">{props.locale.t("maint_desc")}</p>
      </div>
      <div className="space-y-4 border-t border-white/10 pt-4">
        <div className="justify-center space-y-2 sm:justify-between">
          <div className="flex items-center">
            <p className="text-white">
              {props.locale.t("maint_newsletter_label")}
              <span className="md:hidden">
                <a onClick={() => {}}>Sign Up</a> to the newsletter.
              </span>
            </p>
          </div>
          <NewsLetterFormComponent {...props}/>
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
          <MaintErrorComponent {...props} />
        ) : props.variant === "404" ? (
          <NotFoundErrorComponent {...props} />
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
              <NewsLetterFormComponent {...props}/>
              <CopyrightTextComponent {...props} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ErrorComponent;
