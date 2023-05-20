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
      <div>
        <div className="flex-col z-1">
          <div>
            <h1>Hero Title</h1>
            <p>Description</p>
          </div>
          <div className="space-x-2">
            <Button
              href="/app"
              variant="primary"
              aria-label={"Open App"}
              space={"medium"}
            >
              Start for free
            </Button>
            <Button
              href="/app"
              variant="secondary"
              aria-label={"Open App"}
              space={"medium"}
            >
              Learn More
            </Button>
          </div>
        </div>

        <div className="z-[-1] w-full items-center justify-center">
          <div className="flex h-1 w-1 items-center justify-center">
            <div className="decoration-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Component;
