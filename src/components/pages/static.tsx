import { LayoutComponent } from "@/components/layout";
import React, { useState } from "react";
import {StaticContentComponent} from "@/components/MdContent";

export const StaticPage = ({ source, router }) => {
  const [title] = useState(source.frontMatter.title);
  const [desc] = useState(source.frontMatter.description);
  const [content] = useState(source.markdownBody);
  return (
    <LayoutComponent
      title={title}
      pageDesc={desc}
      type={"article"}
      router={router}
    >
      <StaticContentComponent source={content} />
    </LayoutComponent>
  );
};

export default StaticPage;
