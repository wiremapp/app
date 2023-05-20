import { setCookie, hasCookie } from "cookies-next";
import React, { useEffect, useState } from "react";
import { useEntryEffect } from "@/hooks";
import { ButtonComponent as Button } from "@/components";
import { useTranslation } from "react-i18next";

export function Component() {
  const { t } = useTranslation();
  const [consent, setConsent] = useState(true);
  useEffect(() => {
    setConsent(hasCookie("localConsent"));
  }, []);

  const { position: intPos } = useEntryEffect({
    delay: 500,
    initialPosition: 6000,
    finalPosition: 0,
  });

  const acceptCookie = () => {
    setConsent(true);
    setCookie("localConsent", "true", { maxAge: 60 * 60 * 24 * 365 });
    console.log("Accepted cookies");
  };
  const closePopup = () => {
    setConsent(true);
    console.log("Closed cookie consent");
  };
  const denyCookie = () => {
    setConsent(true);
    setCookie("localConsent", "false", { maxAge: 60 * 60 * 24 * 365 });
    console.log("Denied cookie consent");
  };
  if (consent === true) {
    return null;
  }


  const cookieTextContent = t("cookie_textContent");

  return (
    <div
      style={{
        transform: `translateY(${intPos}%)`,
      }}
      className="cookie-consent"
    >
      <p className="mb-4">{cookieTextContent}</p>
      <div className="flex space-x-2">
        <div className="w-full">
        <Button
          href="#"
          className="px-6 text-start"
          onClick={(e) => {
            closePopup();
            e.preventDefault();
          }}
        >
          {t("learnMore_label")}
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
          {t("reject_label")}
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
          {t("accept_label")}
        </Button>
      </div>
    </div>
  );
}

export default Component;
