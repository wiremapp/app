import Link from "next/link";
import React from "react";
import { ButtonComponent as Button } from "@/components";

type Props = {
  children?: any;
  className?: string;
};

export const Component = (props: Props) => {
  return (
    <section
    className="hero"
    >
      <div className="max-w-7xl p-8">
        <h1>Title</h1>
        <p>Description</p>
        <div className="space-x-2">
          <Button
            href="/app"
            type="primary"
            ariaLabel={"Open App"}
            space={"medium"}
          >
            Open App
          </Button>
          <Button
            href="/app"
            type="secondary"
            ariaLabel={"Open App"}
            space={"medium"}
          >
            Start for free
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Component;
