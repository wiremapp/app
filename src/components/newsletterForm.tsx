import { useEmailSubscription } from "@/hooks";
import React from "react";
import { ButtonComponent as Button } from "@/components";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/tooltip";

const Component = () => {
  const { email, setEmail, isLoading, error, success, subscribe } =
    useEmailSubscription();

  const handleSubmit = (e) => {
    e.preventDefault();
    subscribe();
  };

  return (
    <Tooltip>
      <TooltipTrigger>
        {" "}
        <div className="flex">
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="mr-2 hidden rounded bg-white px-4 text-black text-opacity-70 opacity-70 md:block"
            placeholder="Enter your email..."
            disabled={isLoading}
          />
          <Button
            className="hidden shrink-0 md:block"
            href="/"
            variant="primary"
            aria-label={"Email Sign Up"}
            space={"medium"}
            onClick={handleSubmit}
            disabled={isLoading}
            type="submit"
          >
            {isLoading ? "Signing Up..." : "Sign Up"}
          </Button>
        </div>
      </TooltipTrigger>
      <TooltipContent>{error|| !success ? error : "Subscription successful."}</TooltipContent>
    </Tooltip>
  );
};

export default Component;
