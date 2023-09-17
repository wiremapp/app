import { Elements } from "@stripe/react-stripe-js";
import getStripe from "@/utils/stripe-helpers";

import React, { useEffect } from "react";
import { useRemark } from "react-remark";
import { PaymentComponent } from "@/stories/components/units/payment";

export const OrderComponent = (props) => {
  const [content, setSource] = useRemark();
  useEffect(() => {
    setSource(props.source);
  }, [setSource, props.source]);

  return (
    <div>
      <Elements stripe={getStripe()}>
        <PaymentComponent price={props.price} />
      </Elements>
      <article className="lg:prose-md prose prose-slate flex flex-col border-b prose-headings:text-gray-200 prose-p:text-slate-400 prose-img:rounded-sm">
        {content}
      </article>
    </div>
  );
};

export default OrderComponent;
