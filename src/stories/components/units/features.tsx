import React from "react";

export const FeaturesComponent = (props) => {
  const sortedData = props.featuresData.sort((a, b) => a.frontMatter.oder - b.frontMatter.oder).slice(
    0,
    props.src === "landing" ? 4 : props.featuresData.length
  );

  return (
    <section
      className={props.variant == "secondary" ? "section-secondary-bg" : ""}
    >
      <div>
        <div className="row">
          <h3>{props.locale.t("features_label")}</h3>
          <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {sortedData.map((feature) => {
              const featureTitle = feature.frontMatter.title;
              const featureDesc = feature.frontMatter.description;
              return (
                <div
                  key={feature.slug}
                  className="section-secondary-bg hover:bg-[#03030328] rounded p-4 shadow hover:shadow-lg transition-all"
                >
                  <div className="flex flex-col space-y-1 p-6 text-center">
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
