import React, { useEffect, useState } from "react";
import { useRemark } from "react-remark";

export const StaticContentComponent = (props) => {
  const [content, setSource] = useRemark();

  useEffect(() => {
    setSource(props.source.markdownBody);
  }, [setSource, props.source.markdownBody]);

  return (
    // <article className="lg:prose-md prose prose-slate flex flex-col border-b prose-img:rounded-sm prose-headings:text-gray-200 prose-p:text-slate-400">

    // </article>

    <section className={"section-secondary-bg"}>
      <div>
        <div className="row">
        <h3>{props.title}</h3>
          <article className="flex items-center justify-center">
            <div className="flex flex-col prose-headings:text-gray-200 prose-p:text-gray-400 prose-strong:text-gray-200 prose-li:text-gray-400 prose-img:rounded-sm">
              {content}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default StaticContentComponent;
