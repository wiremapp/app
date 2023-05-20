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
        <div className="z-1 flex-col justify-center">
          <div>
            <h1 className="mb-6 text-4xl font-black uppercase">
              Visualize your website's structure
            </h1>
            <p className="mb-3 text-sm text-white text-opacity-70">
              Create visual sitemaps within minutes.
            </p>
            <p className="mb-6 text-sm text-white text-opacity-70">
              With agile project management features, advanced collaboration
              tools and powerful real-time analytics, you can optimize your
              development workflows for maximum efficiency and productivity.
            </p>
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
