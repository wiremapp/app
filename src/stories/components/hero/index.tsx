import { Button } from "@/stories/components/button";
import React from "react";
import styles from "./style.module.css";
import Image from "next/image";

type Props = {
  children?: any;
  className?: string;
};

export const HeroComponent = (props) => {
  return (
    <section className={styles.hero}>
      <div>
        <div className="z-1 flex-col justify-center text-center lg:mr-14 lg:text-left">
          <div>
            <h1 className="mb-8 text-2xl font-black uppercase sm:text-3xl lg:mr-8 lg:text-4xl">
              {props.locale.t("hero_title0")}
            </h1>
            <div className="mb-6 flex flex-col space-y-[4px]">
              <h2 className="text-md tracking-wider text-white text-opacity-80">
                {props.locale.t("hero_subtitle0")}
              </h2>
              <p className="text-sm text-white text-opacity-[64%] sm:px-14 lg:w-11/12 lg:px-0">
                {props.locale.t("hero_desc0")}
              </p>
            </div>
          </div>

          {!props.variant && (
            <div className="flex flex-col justify-center space-x-0 space-y-2 xs:flex-row xs:space-x-2 xs:space-y-0 lg:justify-start">
              <Button
                href="/dashboard"
                variant="primary"
                aria-label={"Open App"}
                space={"medium"}
              >
                {props.locale.t("start4Free_label")}
              </Button>
              <Button
                href="/faq"
                variant="secondary"
                aria-label={"Open App"}
                space={"medium"}
              >
                {props.locale.t("learnMore_label")}
              </Button>
            </div>
          )}

          {props.variant === "scan" && (
            <div className="flex flex-col justify-center space-x-0 space-y-2 xs:flex-row xs:space-x-2 xs:space-y-0 lg:justify-start">
              <input
                onChange={props.handleUrlChange}
                className="mr-2 rounded bg-white px-4 text-black text-opacity-70 opacity-70 md:block"
                placeholder="https;//www.example.com/"
              />
              <Button
                href="/dashboard"
                onClick={props.handleScan}
                variant="primary"
                aria-label={"Open App"}
                space={"medium"}
              >
                {props.locale.t("scan_label")}
              </Button>
            </div>
          )}
        </div>

        <div className="relative z-[-1] items-center justify-center lg:w-full">
        <div style={{  background: "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)"}} className="absolute mt-[96px] lg:flex h-[684px] w-[684px] ml-20 content-center items-center justify-center rounded-[900px] transition"></div>
          <Image
            src="/images/desktop.png"
            alt="Hero Image"
            layout="fill"
            objectFit="contain"
          />

        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
