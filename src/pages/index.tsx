import { getAllStaticEntriesWithFrontMatter } from "@/utils/md";
import { LandingPage } from "@/stories/components/pages/landing";
import React, { useContext } from "react";
import { UIStates } from "@/context/UI";
import { useRouter } from "next/router";

export default function Page({
  locale,
  loading,
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
    loading,
    featuresData,
    pricingData,
    faqData,
    ...UI,
  };

  return <LandingPage {...props} />;
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
