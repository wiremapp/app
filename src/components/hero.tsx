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
        <div className="flex-col z-1">
          <div>
            <h1>{t("hero_title0")}</h1>
            <p>Description</p>
          </div>
          <div className="flex flex-col space-y-2 space-x-0 md:space-x-2 md:space-y-0 md:flex-row">
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

        <div className="z-[-1] w-full items-center justify-center">
          <div className="flex h-1 w-1 items-center justify-center">
            <div className="decoration-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Component;
