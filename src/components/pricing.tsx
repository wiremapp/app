import React from "react";

type Props = {
  children?: any;
  className?: string;
};

export const Component = (props: Props) => {
  return (
    <section className="section-secondary-bg">
      <div className="z-1 section-container flex h-full w-full flex-col">
        <div>
          <h1>PricingTitle</h1>
          <p>Description</p>
        </div>
      </div>
    </section>
  );
};

export default Component;
