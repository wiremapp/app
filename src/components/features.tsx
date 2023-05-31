import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

type Props = {
  children?: any;
  data?: any;
  className?: string;
  variant?: string;
};

export const Component = (props: Props) => {
  const { t } = useTranslation();
  return (
    <section
      className={props.variant == "secondary" ? "section-secondary-bg" : ""}
    >
      <div>
        <div className="row">
          <h3>{t("features_label")}</h3>
          <div className="cards-container">
            {props.data.featuresData.map((feature) => {
              const featureTitle = feature.frontMatter.title;
              const featureDesc = feature.frontMatter.description;
              return (
                <div
                  key={feature.slug}
                  className="section-secondary-bg flex flex-col p-6 text-center"
                >
                  <h3>{featureTitle}</h3>
                  <p className="font-light text-gray-400 sm:text-lg">
                    {featureDesc}
                  </p>
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
