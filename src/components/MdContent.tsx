import React, { useEffect } from "react";
import { useRemark } from "react-remark";

export const StaticContentComponent = ({ source }) => {
  const [content, setSource] = useRemark();
  useEffect(() => {
    setSource(source);
  }, [setSource, source]);

  return (
    // <article className="lg:prose-md prose prose-slate flex flex-col border-b prose-img:rounded-sm prose-headings:text-gray-200 prose-p:text-slate-400">

    // </article>

    <section className={"section-secondary-bg"}>
      <div>
        <div className="row">
          <div className="mb-12 flex items-center justify-center">
            <div className="lg:prose-md prose prose-slate flex flex-col border-b prose-headings:text-gray-200 prose-p:text-slate-400 prose-img:rounded-sm">
              {content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaticContentComponent;
