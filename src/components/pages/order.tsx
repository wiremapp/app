import { LayoutComponent } from "@/components/layout";
import React, { useState } from "react";
import {OrderComponent} from "@/components/order";

export const OrderPage = ({ source, router }) => {
  const [title] = useState(source.frontMatter.title);
  const [desc] = useState(source.frontMatter.description);
  const [content] = useState(source.markdownBody);
  const [price] = useState(source.frontMatter.monthly_price_usd);

  return (
    <LayoutComponent
      title={title}
      pageDesc={desc}
      type={"article"}
      router={router}
    >
      <OrderComponent source={content} price={price} />
    </LayoutComponent>
  );
};

export default OrderPage;
