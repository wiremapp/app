import { getAllStaticEntriesWithFrontMatter } from "@/utils/md";
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

  return <SEOScanPage {...props} />;
}

export async function getStaticProps() {
  // TODO: Merge into const {featuresData, pricingData, faqData} = await getAllPostsWithFrontMatter(["features","pricing","faq"]);

  const featuresData = await getAllStaticEntriesWithFrontMatter("features");
  const pricingData = await getAllStaticEntriesWithFrontMatter("pricing");
  const faqData = await getAllStaticEntriesWithFrontMatter("faq");

  return {
    props: {
      featuresData,
      pricingData,
      faqData,
    },
  };
}
