import { useEmailSubscription } from "@/hooks";
import React from "react";
import { ButtonComponent as Button } from "@/components";

const Component = () => {
  const { email, setEmail, isLoading, error, success, subscribe } =
    useEmailSubscription();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    subscribe();
  };
  return (
    <div className="flex">
      <div className="flex items-center">
        {success && <p>Subscription successful!</p>}
        {error && <p>{error}</p>}
      </div>
      <input
        onChange={(e) => setEmail(e.target.value)}
        className="mr-2 hidden rounded bg-white px-4 text-black text-opacity-70 opacity-70 md:block"
        placeholder="Enter your email..."
        disabled={isLoading}
      ></input>
      <Button
        className="hidden shrink-0 md:block"
        href="/auth"
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
  );
};

export default Component;
