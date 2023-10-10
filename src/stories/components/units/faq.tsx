import React, { useState } from "react";

type Props = {
  children?: any;
  className?: string;
  variant?: string;
  faqData?: any;
};

export const FAQComponent = (props: Props) => {
  const [expand, setExpand] = useState(null);

  const handleExpand = (index) => {
    setExpand(index === expand ? null : index);
  };

  return (
    <section>
      <div>
        <div className="row">
          <h3>Frequently Asked Questions</h3>
          {props.faqData.map((question, index) => {
            const faqTitle = question.frontMatter.title;
            const faqDesc = question.frontMatter.description;
            const isExpanded = index === expand;

            return (
              <div
                key={question.slug}
                id="accordion-flush"
                data-accordion="collapse"
                data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                data-inactive-classes="text-gray-500 dark:text-gray-400"
              >
                <h2 id={`accordion-flush-heading-${index + 1}`}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between border-b border-gray-200 py-5 text-left font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400"
                    data-accordion-target={`#accordion-flush-body-$${index + 1}`}
                    aria-expanded={isExpanded ? 'true' : 'false'}
                    aria-controls={`accordion-flush-body-${index + 1}`}
                    onClick={() => handleExpand(index)}
                  >
                    <span>{faqTitle}</span>
                    <svg
                      data-accordion-icon
                      className="h-6 w-6 shrink-0 rotate-180"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-flush-body-1"
                  className={`${
                    isExpanded ? '' : 'hidden'
                  }`}
                  aria-labelledby={`accordion-flush-heading-${index + 1}`}
                >
                  <div className="border-b border-gray-200 py-5 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      {faqDesc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQComponent;
