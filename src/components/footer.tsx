import { LogoComponent } from "@/components";
import { ButtonComponent as Button } from "@/components";
import useEmailSubscription from "@/pages/api/auth/newsletter";
import React from "react";

export const Component = () => {
  const { email, setEmail, isLoading, error, success, subscribe } =
    useEmailSubscription();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    subscribe();
  };
  return (
    <footer aria-label="Site Footer">
      <div>
        <div>
          <div className="flex items-center">
            <LogoComponent />
            <p className="ml-5 mr-1 shrink-0 text-center sm:ml-10 md:mr-10">
              Get the latest news!
            </p>
            <p className="mr-1 block shrink-0 md:hidden">Sign up to the</p>
            <p className="block shrink-0	text-orange-500 text-opacity-100 underline md:hidden">
              newsletter
            </p>
            <p className="block md:hidden">.</p>
          </div>
          <div className="flex justify-end space-x-2">
            <div className="flex items-center mr-3">
              {success && <p>Subscription successful!</p>}
              {error && <p>{error}</p>}
            </div>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="hidden rounded bg-white px-4 text-black text-opacity-70 opacity-70 md:block"
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
              {isLoading ? "Sign Up..." : "Sign Up"}
            </Button>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="my-1 flex justify-start space-x-5 sm:my-0">
            <a href="">Privacy Policy</a>
            <a href="">Contact</a>
            <a href="">Terms of Service</a>
          </div>
          <div>
            <p className="text-center text-xs text-white text-opacity-70 sm:text-right">
              Copyright &copy; {new Date().getFullYear()}{" "}
              {process.env.NEXT_PUBLIC_STATIC_TITLE
                ? process.env.NEXT_PUBLIC_APP_TITLE + "."
                : ""}{" "}
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Component;
