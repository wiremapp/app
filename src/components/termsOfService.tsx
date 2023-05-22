import React from "react";

type Props = {
  children?: any;
  className?: string;
  variant?: string;
};

export const Component = (props: Props) => {
  return (
    <section>
      <div>
        <div className="mx-36 my-24 flex w-full flex-col justify-center text-center">
          <div>
            <h1 className="text-5xl font-semibold">Terms of Service</h1>
            <p className="mt-10 text-white text-opacity-70">
              In this Privacy Policy we describe the types of personal
              information we collect when you visit and use the wirem.app
              website and services available through the deez nuts learning
              platform. We also describe how and why we use and share your
              personal information, how you can access and update your
              information, and exercise your other legal rights as a user.
            </p>
          </div>
          <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-50" />
          <div>
            <h1 className="text-3xl font-medium">Information We Collect</h1>
            <p className="mt-10 text-white text-opacity-70">
              In this Privacy Policy we describe the types of personal
              information we collect when you visit and use the wirem.app
              website and services available through the deez nuts learning
              platform. We also describe how and why we use and share your
              personal information, how you can access and update your
              information, and exercise your other legal rights as a user.
            </p>
          </div>
          <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-50" />
          <div>
            <h1 className="text-3xl font-medium">What We Do With It</h1>
            <p className="mt-10 text-white text-opacity-70">
              In this Privacy Policy we describe the types of personal
              information we collect when you visit and use the wirem.app
              website and services available through the deez nuts learning
              platform. We also describe how and why we use and share your
              personal information, how you can access and update your
              information, and exercise your other legal rights as a user.
            </p>
          </div>
          <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-50" />
          <div>
            <h1 className="text-3xl font-medium">Your Rights</h1>
            <p className="mt-10 text-white text-opacity-70">
              In this Privacy Policy we describe the types of personal
              information we collect when you visit and use the wirem.app
              website and services available through the deez nuts learning
              platform. We also describe how and why we use and share your
              personal information, how you can access and update your
              information, and exercise your other legal rights as a user.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Component;
