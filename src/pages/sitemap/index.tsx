import React, { useContext } from "react";
import { UIStates } from "@/context/UI";
import { useRouter } from "next/router";
import { SEOScanPage } from "@/stories/components/pages/seo";

export default function Page({
  locale,
  featuresData,
  pricingData,
  faqData,
  auth,
}) {
  const router = useRouter();
  const UI = useContext(UIStates);

  const props = {
    router,
    auth,
    locale,
    featuresData,
    pricingData,
    faqData,
    ...UI,
  };

  return <SEOScanPage {...{ ...props }} />;
}
