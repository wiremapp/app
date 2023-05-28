import Link from "next/link";
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
        <div className="row">
          <h3>Features</h3>
          <div className="cards-container">
            <div className="dark:-gray-600 mx-auto flex max-w-lg flex-col p-6 text-center text-gray-900 dark:text-white xl:p-8">
              <h3>Basic</h3>
              <p className="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
                Best option for personal use & for your next project.
              </p>
            </div>{" "}
            <div className="dark:-gray-600 mx-auto flex max-w-lg flex-col p-6 text-center text-gray-900 dark:text-white xl:p-8">
              <h3 className="mb-4 text-2xl font-semibold">Basic</h3>
              <p className="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
                Best option for personal use & for your next project.
              </p>
            </div>{" "}
            <div className="dark:-gray-600 mx-auto flex max-w-lg flex-col p-6 text-center text-gray-900 dark:text-white xl:p-8">
              <h3 className="mb-4 text-2xl font-semibold">Basic</h3>
              <p className="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
                Best option for personal use & for your next project.
              </p>
            </div>{" "}
            <div className="dark:-gray-600 mx-auto flex max-w-lg flex-col p-6 text-center text-gray-900 dark:text-white xl:p-8">
              <h3 className="mb-4 text-2xl font-semibold">Basic</h3>
              <p className="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
                Best option for personal use & for your next project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Component;
