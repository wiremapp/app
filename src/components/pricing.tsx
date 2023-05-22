import React from "react";

type Props = {
  children?: any;
  className?: string;
  variant?: string;
};

export const Component = (props: Props) => {
  return (
    <section
      className={props.variant == "secondary" ? "section-secondary-bg" : ""}
    >
      <div>
        <div className="flex-col w-full">
          <div className="w-full">
            <h1>PricingTitle</h1>
            <p>Description</p>
          </div>
          <div className="cards-container">
            <div>b</div>
            <div>c</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Component;
