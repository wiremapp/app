import { LayoutComponent } from "@/stories/components/units/layout";
import {OrderComponent} from "@/stories/components/units/order";
import React, { useState } from "react";

export const OrderPage = (props) => {
  const [title] = useState(props.source.frontMatter.title);
  const [desc] = useState(props.source.frontMatter.description);
  const [content] = useState(props.source.markdownBody);
  const [price] = useState(props.source.frontMatter.monthly_price_usd);

  return (
    <LayoutComponent
      title={title}
      pageDesc={desc}
      type={"article"}
      {...props}
    >
      <OrderComponent source={content} price={price} />
    </LayoutComponent>
  );
};

export default OrderPage;
