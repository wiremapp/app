import { useEmailSubscription } from "@/hooks/newsletter";
import React, { useState } from "react";
import { Button } from "@/stories/components/button";

export const NewsLetterFormComponent = (props) => {
  const { email, setEmail, isLoading, error, success, subscribe } =
    useEmailSubscription();

  const [tooltip, setTooltip] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    subscribe();
    setTooltip(true);
    setEmail("");
    setTimeout(() => {
      setTooltip(false);
    }, 6000);
  };

  return (
    <div className="hidden md:flex relative">
      {tooltip
        ? (success || error) && (
            <span className="tooltip absolute bottom-full  mb-2 transform whitespace-nowrap rounded-sm bg-black px-4 py-1 text-xs text-white">
              {error || !success ? error : "Subscription successful."}
            </span>
          )
        : null}
       
      <input
        onChange={(e) => setEmail(e.target.value)}
        className="mr-2 rounded-sm bg-white px-4 text-black text-opacity-70 opacity-70 md:block"
        placeholder={props.locale.t("enterEmail_placeholder_label")}
        disabled={isLoading}
      />
      <Button
        className="shrink-0 md:block"
        href="/"
        variant="primary"
        aria-label={"Email Sign Up"}
        space={"medium"}
        onClick={handleSubmit}
        disabled={isLoading}
        type="submit"
      >
        {isLoading ? props.locale.t("signingup_label") : props.locale.t("signup_label")}
      </Button>
    </div>
  );
};

export default NewsLetterFormComponent;
