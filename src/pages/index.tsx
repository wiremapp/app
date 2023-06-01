import { DashPage, LandingPage, MaintPage } from "@/components";
import { getAllPostsWithFrontMatter } from "@/utils";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Page({featuresData,pricingData,faqData}) {
  const router = useRouter();
  const [appOpen, setAppOpen] = useState(false);
  return !appOpen ? (
    <LandingPage data={{featuresData,pricingData,faqData}} router={router} appState={{ appOpen, setAppOpen }} />
  ) : (
    <DashPage router={router} />
  );
}


export async function getStaticProps() {
  // TODO: Merge into const {featuresData, pricingData, faqData} = await getAllPostsWithFrontMatter(["features","pricing","faq"]);

  const featuresData = await getAllPostsWithFrontMatter("features");
  const pricingData = await getAllPostsWithFrontMatter("pricing");
  const faqData = await getAllPostsWithFrontMatter("faq");

  return {
    props: {
      featuresData,
      pricingData,
      faqData
    },
  };
}
