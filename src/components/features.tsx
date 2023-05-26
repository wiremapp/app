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
          <h1>FeaturesTitle</h1>
          <p>Description</p>
          <div className="cards-container">
            <div className="mx-auto flex max-w-lg flex-col rounded-lg border border-gray-100 bg-white p-6 text-center text-gray-900 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white xl:p-8">
              <h3 className="mb-4 text-2xl font-semibold">Basic</h3>
              <p className="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
                Best option for personal use & for your next project.
              </p>
            </div>{" "}
            <div className="mx-auto flex max-w-lg flex-col rounded-lg border border-gray-100 bg-white p-6 text-center text-gray-900 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white xl:p-8">
              <h3 className="mb-4 text-2xl font-semibold">Basic</h3>
              <p className="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
                Best option for personal use & for your next project.
              </p>
            </div>{" "}
            <div className="mx-auto flex max-w-lg flex-col rounded-lg border border-gray-100 bg-white p-6 text-center text-gray-900 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white xl:p-8">
              <h3 className="mb-4 text-2xl font-semibold">Basic</h3>
              <p className="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
                Best option for personal use & for your next project.
              </p>
            </div>{" "}
            <div className="mx-auto flex max-w-lg flex-col rounded-lg border border-gray-100 bg-white p-6 text-center text-gray-900 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white xl:p-8">
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
