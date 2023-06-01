import React from "react";
import { ButtonComponent as Button } from "@/components";
import { useTranslation } from "react-i18next";

type Props = {
  children?: any;
  className?: string;
  variant?: string;
  data?: any;
};

export const Component = (props: Props) => {
  const sortedData =  props.data.pricingData.sort((a, b) => a.frontMatter.order - b.frontMatter.order);
  const { t } = useTranslation();
  return (
    <section
      className={props.variant == "secondary" ? "section-secondary-bg" : ""}
    >
      <div>
        <div className="row">
          <h3>Pricing</h3>
          <div className="cards-container">
            {sortedData.map((tier) => {
              const tierTitle = tier.frontMatter.title;
              const tierPrice = tier.frontMatter.monthly_price_usd;
              const tierDesc = tier.frontMatter.description;
              const tierFeatures = tier.frontMatter.features;
              return (
                <div
                  key={tier.slug}
                  className={tier.frontMatter.primary ? "primary" : null}
                >
                  <div>
                    <div className="flex grow flex-col">
                      <h3>{tierTitle}</h3>
                      <p className="font-light text-gray-400 sm:text-lg">
                        {tierDesc}
                      </p>
                      <div className="my-8 flex items-baseline justify-center">
                        <span className="mr-2 text-5xl font-extrabold">
                          {tierPrice !== 0 ? "$" : ""}
                          {tierPrice !== 0 ? tierPrice : t("free_label")}
                        </span>
                        <span className="text-gray-400">
                          /{" "}
                          {tierPrice !== 0
                            ? t("month_label").toLowerCase()
                            : t("forever_label").toLowerCase()}
                        </span>
                      </div>
                      <ul role="list" className="mb-8 space-y-4 text-left">
                        {tierFeatures.map((feature, index) => {
                          return (
                            <li
                              className="flex items-center space-x-3"
                              key={index}
                            >
                              <svg
                                className="h-5 w-5 flex-shrink-0 text-green-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                              <span>{feature.title}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div className="flex flex-col">
                      <Button
                        href="/"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                        variant="primary"
                        aria-label={"Open App"}
                        space={"medium"}
                      >
                        Get Started
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Component;
