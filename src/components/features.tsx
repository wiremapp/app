import Link from "next/link";
import React from "react";

type Props = {
  children?: any;
  className?: string;
};

export const Component = (props: Props) => {
  return (
    <section>
      <div className="z-1 flex h-full w-full flex-col section-container">
        <div>
          <h1>FeaturesTitle</h1>
          <p>Description</p>
        </div>
      </div>
    </section>
  );
};

export default Component;
