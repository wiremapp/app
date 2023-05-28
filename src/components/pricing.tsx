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
          <h3>Pricing</h3>
          <div className="cards-container">
            <div>
              <div>
                <div className="flex grow flex-col">
                  <h3>Basic</h3>
                  <p className="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
                    Best option for personal use & for your next project.
                  </p>
                  <div className="my-8 flex items-baseline justify-center">
                    <span className="mr-2 text-5xl font-extrabold">Free</span>
                    <span className="text-gray-500 dark:text-gray-400">
                      /forever
                    </span>
                  </div>
                  <ul role="list" className="mb-8 space-y-4 text-left">
                    <li className="flex items-center space-x-3">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Individual configuration</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>No setup, or hidden fees</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Team size:{" "}
                        <span className="font-semibold">1 developer</span>
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Premium support:{" "}
                        <span className="font-semibold">6 months</span>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col">
                  <a
                    href="#"
                    className="hover:bg-primary-700 focus:ring-primary-200 dark:focus:ring-primary-900 rounded-lg bg-orange-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-4  dark:text-white"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
            <div className="primary">
              <div>
                <div className="flex grow flex-col">
                  <h3>Pro</h3>
                  <p className="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
                    Best option for personal use & for your next project.
                  </p>
                  <div className="my-8 flex items-baseline justify-center">
                    <span className="mr-2 text-5xl font-extrabold">9.99</span>
                    <span className="text-gray-500 dark:text-gray-400">
                      /month
                    </span>
                  </div>
                  <ul role="list" className="mb-8 space-y-4 text-left">
                    <li className="flex items-center space-x-3">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Individual configuration</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>No setup, or hidden fees</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Team size:{" "}
                        <span className="font-semibold">1 developer</span>
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Premium support:{" "}
                        <span className="font-semibold">6 months</span>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col">
                  <a
                    href="#"
                    className="hover:bg-primary-700 focus:ring-primary-200 dark:focus:ring-primary-900 rounded-lg bg-orange-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-4  dark:text-white"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="flex grow flex-col">
                  <h3>Enterprise</h3>
                  <p className="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
                    Best option for personal use & for your next project.
                  </p>
                  <div className="my-8 flex items-baseline justify-center">
                    <span className="mr-2 text-5xl font-extrabold">24.99</span>
                    <span className="text-gray-500 dark:text-gray-400">
                      /month
                    </span>
                  </div>
                  <ul role="list" className="mb-8 space-y-4 text-left">
                    <li className="flex items-center space-x-3">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Individual configuration</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>No setup, or hidden fees</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Team size:{" "}
                        <span className="font-semibold">1 developer</span>
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Premium support:{" "}
                        <span className="font-semibold">6 months</span>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col">
                  <a
                    href="#"
                    className="hover:bg-primary-700 focus:ring-primary-200 dark:focus:ring-primary-900 rounded-lg bg-orange-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-4  dark:text-white"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Component;
