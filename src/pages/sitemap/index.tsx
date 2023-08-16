import { getAllStaticEntriesWithFrontMatter } from "@/utils/md";
import { LandingPage } from "@/components/pages/landing";
import React, { useContext } from "react";
import { UIStates } from "@/context/UI";
import { useRouter } from "next/router";
import ScanPage from "@/components/pages/SEOScan"

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

  return <ScanPage {...{...props}} />;
}
