import { Button } from "@/components/button";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { formatAmountForDisplay } from "@/utils/stripe-helpers";

type Props = {
  children?: any;
  className?: string;
  variant?: string;
  data?: any;
};

export const PricingComponent = (props: Props) => {
  const sortedData = props.data.pricingData.sort(
    (a, b) => a.frontMatter.order - b.frontMatter.order
  );

  const [annual, setAnnual] = useState(true);

  const { t } = useTranslation();
  return (
    <section
      className={props.variant == "secondary" ? "section-secondary-bg" : ""}
    >
      <div>
        <div className="row">
          <h3>Pricing</h3>

          <div className="mb-6 flex items-center justify-center">
            <input
              className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
              type="checkbox"
              role="switch"
              id="billing_type_checkbox"
              checked={annual}
              onChange={() => {
                setAnnual(!annual);
              }}
              disabled={false}
            />
            <label
              className="inline-block pl-[0.15rem] text-sm  font-black uppercase text-opacity-70 hover:cursor-pointer hover:text-opacity-100"
              htmlFor="billing_type_checkbox"
            >
              Billed Annually
            </label>
          </div>

          <div className="pricing-cards-container">
            {sortedData.map((tier) => {
              const tierTitle = tier.frontMatter.title;
              const tierPrice = !annual
                ? tier.frontMatter.monthly_price_usd
                : tier.frontMatter.annual_price_usd;

              const tierDesc = tier.frontMatter.description;
              const tierFeatures = tier.frontMatter.features;
              return (
                <div
                  key={tier.slug}
                  className={tier.frontMatter.primary ? "primary" : null}
                >
                  <div>
                    <div className="flex grow flex-col">
                      <h4>{tierTitle}</h4>
                      <p className="font-light text-gray-400 sm:text-lg">
                        {tierDesc}
                      </p>
                      <div className="my-8 flex items-baseline justify-center">
                        <span className="mr-2 text-5xl font-extrabold">
                         {tierPrice !== 0 ? "$": ""}
                          {tierPrice !== 0
                            ? tierPrice
                            : t("free_label")}
                        </span>
                        <span className="text-gray-400">
                          /{" "}
                          {tierPrice !== 0
                            ? annual
                              ? t("month_label").toLowerCase()
                              : t("year_label").toLowerCase()
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
                                className={` ${
                                  feature.included
                                    ? "opacity-100"
                                    : "opacity-20"
                                } h-5 w-5 flex-shrink-0 text-green-400`}
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
                        href={
                          tier.slug == "basic"
                            ? "/dashboard"
                            : "/order/" + tier.slug
                        }
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

export default PricingComponent;
