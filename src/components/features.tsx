import { useTranslation } from "react-i18next";
import React from "react";

type Props = {
  children?: any;
  data?: any;
  className?: string;
  variant?: string;
  src?: string;
};

export const FeaturesComponent = (props: Props) => {
  const { t } = useTranslation();
  const sortedData = props.data.featuresData.sort((a, b) => a.frontMatter.oder - b.frontMatter.oder).slice(
    0,
    props.src === "landing" ? 4 : props.data.featuresData.length
  );
  return (
    <section
      className={props.variant == "secondary" ? "section-secondary-bg" : ""}
    >
      <div>
        <div className="row">
          <h3>{t("features_label")}</h3>
          <div className="grid-cols-4 grid gap-4 mb-6">
          {sortedData.map((feature) => {
              const featureTitle = feature.frontMatter.title;
              const featureDesc = feature.frontMatter.description;
              return (
                <div key={feature.slug} className="shadow rounded p-4 section-secondary-bg">
                  <div className="flex flex-col p-6 text-center space-y-1">
                    <h4>{featureTitle}</h4>
                    <p className="font-light text-gray-400 sm:text-lg">
                      {featureDesc}
                    </p>
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

export default FeaturesComponent;
