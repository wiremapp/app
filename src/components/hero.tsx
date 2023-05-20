import Link from "next/link";
import React from "react";
import { ButtonComponent as Button } from "@/components";
import { useTranslation } from "react-i18next";

type Props = {
  children?: any;
  className?: string;
};

export const Component = (props: Props) => {
  const { t } = useTranslation();
  return (
    <section className="hero">
      <div>
        <div className="z-1 flex-col justify-center text-center lg:text-left lg:mr-14">
          <div>
            <h1 className="mb-6 text-2xl sm:text-3xl lg:text-4xl font-black uppercase lg:mr-10">
              {t("hero_title0")}
            </h1>
            <p className="mb-3 text-sm text-white text-opacity-70">
              Create visual sitemaps within minutes.
            </p>
            <p className="mb-6 text-sm text-white text-opacity-70 sm:px-14 lg:px-0 lg:w-9/12">
              {t("hero_desc0")}
            </p>
          </div>
          <div className="flex justify-center lg:justify-start flex-col space-y-2 space-x-0 xs:space-x-2 xs:space-y-0 xs:flex-row">
            <Button
              href="/app"
              variant="primary"
              aria-label={"Open App"}
              space={"medium"}
            >
              Start for free
            </Button>
            <Button
              href="/app"
              variant="secondary"
              aria-label={"Open App"}
              space={"medium"}
            >
              Learn More
            </Button>
          </div>
        </div>

        <div className="z-[-1] lg:w-full items-center justify-center">
          <div className="flex h-1 w-1 items-center justify-center">
            <div className="decoration-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Component;
