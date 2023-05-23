import React, { useEffect } from "react";
import { useRemark } from "react-remark";

export const Component = ({ source }) => {
  const [content, setSource] = useRemark();
  useEffect(() => {
    setSource(source);
  }, [setSource, source]);

  return (
    <article className="lg:prose-md prose prose-slate flex flex-col border-b prose-img:rounded-sm dark:prose-headings:text-gray-200 dark:prose-p:text-slate-400">
      {content}
    </article>
  );
};

export default Component;
