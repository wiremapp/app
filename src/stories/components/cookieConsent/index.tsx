import { Button } from "@/stories/components/button";
import { setCookie, hasCookie } from "cookies-next";
import React, { useEffect, useState } from "react";
import { useEntryEffect } from "@/hooks/entryEffect";
import styles from "./style.module.css";
import Image from "next/image";

export const CookieConsentComponent = (props) => {
  const [tempShow,setTempShow] = useState(true);

  useEffect(() => {
    props.cookies.setConsent(hasCookie("localConsent"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { position: intPos } = useEntryEffect({
    delay: 500,
    initialPosition: 6000,
    finalPosition: 0,
  });

  const acceptCookie = () => {
    props.cookies.setConsent(true);
    setCookie("localConsent", "true", { maxAge: 60 * 60 * 24 * 365 });
    console.log("Accepted cookies");
  };

  const closePopup = () => {
    setTempShow(false);
    console.log("Closed cookie consent");
  };

  const denyCookie = () => {
    props.cookies.setConsent(true);
    setCookie("localConsent", "false", { maxAge: 60 * 60 * 24 * 365 });
    console.log("Denied cookie consent");
  };

  if (props.cookies.consent == true || tempShow == false) {
    return null;
  }

  const cookieTextContent = props.locale.t("cookie_textContent");

  return (
    <div
      style={{
        transform: `translateY(${intPos}%)`,
      }}
      className={styles["cookie-consent"]}
    >
      <div className="flex mb-4">
        <div className="relative  h-[32px] min-w-[26px] mr-4">
          <Image
            src="/images/cookies.svg"
            alt="Cookie Icon"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <p className="mb-4">{cookieTextContent}</p>
      </div>
      <div className="flex space-x-2">
        <div className="w-full">
          <Button href="/privacy/" className="px-6 text-start">
            {props.locale.t("learnMore_label")}
          </Button>
        </div>
        <Button
          href="#"
          size="sm"
          className="px-6 text-start"
          onClick={(e) => {
            closePopup();
            e.preventDefault();
          }}
        >
          {props.locale.t("reject_label")}
        </Button>
        <Button
          variant="primary"
          className="px-6"
          href="#"
          size="sm"
          onClick={(e) => {
            acceptCookie();
            e.preventDefault();
          }}
        >
          {props.locale.t("accept_label")}
        </Button>
      </div>
    </div>
  );
};
