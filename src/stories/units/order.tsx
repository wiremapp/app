import { PaymentComponent } from "@/components/payment";
import { Elements } from "@stripe/react-stripe-js";
import getStripe from "@/utils/get-stripe";

import React, { useEffect } from "react";
import { useRemark } from "react-remark";

export const OrderComponent = ({ source, price }) => {
  const [content, setSource] = useRemark();
  useEffect(() => {
    setSource(source);
  }, [setSource, source]);

  return (
    <div>
      <Elements stripe={getStripe()}>
        <PaymentComponent price={price} />
      </Elements>
      <article className="lg:prose-md prose prose-slate flex flex-col border-b prose-headings:text-gray-200 prose-p:text-slate-400 prose-img:rounded-sm">
        {content}
      </article>
    </div>
  );
};

export default OrderComponent;
