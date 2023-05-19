import Link from "next/link";
import React from "react";
import { ButtonComponent as Button } from "@/components";

type Props = {
  children?: any;
  className?: string;
};

export const Component = (props: Props) => {
  return (
    <section className="hero">
      <div className="section-container">
        <div className="flex h-full w-full flex-col z-1">
          <div>
            <h1>Hero Title</h1>
            <p>Description</p>
          </div>
          <div className="space-x-2">
            <Button
              href="/app"
              type="primary"
              aria-label={"Open App"}
              space={"medium"}
            >
              Start for free
            </Button>
            <Button
              href="/app"
              type="secondary"
              aria-label={"Open App"}
              space={"medium"}
            >
              Learn More
            </Button>
          </div>
        </div>

        <div className="flex h-full z-[-1] w-full items-center justify-center">
          <div className="flex h-1 w-1 items-center justify-center">
            <div className="absolute mt-[96px] flex h-[684px] w-[684px] content-center items-center justify-center rounded-[900px] decoration-1 transition"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Component;
