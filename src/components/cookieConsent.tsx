import { setCookie, hasCookie } from "cookies-next";
import React, { useEffect, useState } from "react";
import { useEntryEffect } from "@/hooks";
import { ButtonComponent as Button } from "@/components";
import Link from "next/link";

export function Component() {
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
    console.log("accepring cookies");
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
  return (
    <div
      style={{
        transform: `translateY(${intPos}%)`,
      }}
      className="cookie-consent"
    >
      <p className="mb-4">
        This website uses essential cookies to enhance user experience. No
        identifying information is collected. Please read the{" "}
        <Link className="font-bold underline" href="/privacy-policy" target="_blank">
            Privacy Policy.
        </Link>{" "}
        for more details.
      </p>
      <div className="flex space-x-2">
        <Button
          variant="secondary"
          href="#"
          className="px-6 text-start"
          onClick={(e) => {
            closePopup();
            e.preventDefault();
          }}
        >
          Close
        </Button>
        <Button
          className="px-6"
          href="#"
          onClick={(e) => {
            acceptCookie();
            e.preventDefault();
          }}
        >
          Agree
        </Button>
      </div>
    </div>
  );
}

export default Component;
