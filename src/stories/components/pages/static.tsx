import { LayoutComponent } from "@/stories/components/units/layout";
import React, { useEffect, useState } from "react";
import { StaticContentComponent } from "@/stories/components/units/MdContent";

export const StaticPage = (props) => {
  const [title, setTitle] = useState(props.source.frontMatter.title);
  const [desc, setDesc] = useState(props.source.frontMatter.description);

  useEffect(() => {
    setTitle(props.source.frontMatter.title);
    setDesc(props.source.frontMatter.desc);
  }, [props.source]);
  
  return (
    <LayoutComponent title={title} pageDesc={desc} type={"article"} {...props}>
      <StaticContentComponent {...{...props, title, desc, source:props.source}} />
    </LayoutComponent>
  );
};

export default StaticPage;
