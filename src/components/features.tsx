import Link from "next/link";
import React from "react";

type Props = {
  children?: any;
  className?: string;
};

export const Component = (props: Props) => {
  return (
    <section>
      <div>
        <div>
        <h1 className="pb-12 text-2xl font-black text-white text-opacity-70 text-center tracking-widest">Features</h1>
          <div className="cards-container">
            <div className="mx-auto flex max-w-lg flex-col p-6 text-center text-gray-900 dark:-gray-600 dark:text-white xl:p-8">
              <h3 className="mb-4 text-2xl font-semibold">Basic</h3>
              <p className="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
                Best option for personal use & for your next project.
              </p>
            </div>{" "}
            <div className="mx-auto flex max-w-lg flex-col p-6 text-center text-gray-900 dark:-gray-600 dark:text-white xl:p-8">
              <h3 className="mb-4 text-2xl font-semibold">Basic</h3>
              <p className="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
                Best option for personal use & for your next project.
              </p>
            </div>{" "}
            <div className="mx-auto flex max-w-lg flex-col p-6 text-center text-gray-900 dark:-gray-600 dark:text-white xl:p-8">
              <h3 className="mb-4 text-2xl font-semibold">Basic</h3>
              <p className="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
                Best option for personal use & for your next project.
              </p>
            </div>{" "}
            <div className="mx-auto flex max-w-lg flex-col p-6 text-center text-gray-900 dark:-gray-600 dark:text-white xl:p-8">
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
