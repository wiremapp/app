import { LayoutComponent, StaticContentComponent } from "@/components";
import React, { useState } from "react";

export const Page = ({ source, router }) => {
  const [title] = useState(source.frontMatter.title);
  const [desc] = useState(source.frontMatter.description);
  const [content] = useState(source.markdownBody);
  return (
    <LayoutComponent title={title} desc={desc} router={router}>
      <StaticContentComponent source={content} />
    </LayoutComponent>
  );
};

export default Page;
