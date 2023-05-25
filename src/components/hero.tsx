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
        <div className="z-1 flex-col justify-center text-center lg:mr-14 lg:text-left">
          <div>
            <h1 className="mb-8 text-2xl font-black uppercase sm:text-3xl lg:mr-8 lg:text-4xl">
              {t("hero_title0")}
            </h1>
            <div className="flex flex-col space-y-[4px] mb-6">
              <h2 className="text-md text-white text-opacity-80 tracking-wider">
                {t("hero_subtitle0")}
              </h2>
              <p className="text-sm text-white text-opacity-[64%] sm:px-14 lg:w-11/12 lg:px-0">
                {t("hero_desc0")}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center space-x-0 space-y-2 xs:flex-row xs:space-x-2 xs:space-y-0 lg:justify-start">
            <Button
              href="/app"
              variant="primary"
              aria-label={"Open App"}
              space={"medium"}
            >
              {t("start4Free_label")}
            </Button>
            <Button
              href="/about"
              variant="secondary"
              aria-label={"Open App"}
              space={"medium"}
            >
              {t("learnMore_label")}
            </Button>
          </div>
        </div>

        <div className="z-[-1] items-center justify-center lg:w-full">
          <div className="flex h-1 w-1 items-center justify-center">
            <div className="decoration-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Component;
