import { LayoutComponent } from "@/stories/units/layout";
import React, { useState } from "react";
import {StaticContentComponent} from "@/components/MdContent";

export const StaticPage = (props) => {
  const [title] = useState(props.source.frontMatter.title);
  const [desc] = useState(props.source.frontMatter.description);
  const [content] = useState(props.source.markdownBody);
  return (
    <LayoutComponent
      title={title}
      pageDesc={desc}
      type={"article"}
      {...props}
    >
      <StaticContentComponent source={content} />
    </LayoutComponent>
  );
};

export default StaticPage;
