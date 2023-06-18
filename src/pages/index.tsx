import DashPage from "@/components/pages/dashboard";
import LandingPage from "@/components/pages/landing";
import { getAllStaticEntriesWithFrontMatter } from "@/utils/md";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { MaintPage } from "@/components/pages/maintenance";

export default function Page({ featuresData, pricingData, faqData }) {
  const router = useRouter();
  return <MaintPage router={router} />;
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
