import Link from "next/link";
import React from "react";
import { ButtonComponent as Button } from "@/components";

type Props = {
  children?: any;
  className?: string;
};

export const Component = (props: Props) => {
  return (
    <section className="relative hero overflow-hidden">
      <div className="flex max-w-7xl p-8 h-full">
        <div className="h-full w-full">
          <div className="flex-grow space-x-2">
            <div className="flex-grow">
              <h1>Title</h1>
              <p>Description</p>
            </div>
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

        <div className="flex h-full w-full justify-center items-center">
      <div className="flex justify-center items-center h-1 w-1">
      <div
          className="decoration-1 absolute mt-[96px] flex h-[684px] w-[684px] content-center items-center justify-center rounded-[900px] transition"
        >
        </div>
      </div>
        </div>
      </div>
    </section>
  );
};

export default Component;
