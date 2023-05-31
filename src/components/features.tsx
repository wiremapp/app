import Link from "next/link";
import React from "react";

type Props = {
  children?: any;
  data?: any;
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
          {props.data.featuresData.map(feature =>{
            return   <div key={feature.slug} className="flex flex-col p-6 text-center">
            <h3>{feature.frontMatter.title}</h3>
            <p className="font-light text-gray-400 sm:text-lg">
              Best option for personal use & for your next project.
            </p>
          </div>;
          })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Component;
