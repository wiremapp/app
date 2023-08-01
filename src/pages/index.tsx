import { getAllStaticEntriesWithFrontMatter } from "@/utils/md";
import { LandingPage } from "@/components/pages/landing";
import { useSession } from "next-auth/react";
import React, { useContext } from "react";
import { UIStates } from "@/context/UI";
import { useRouter } from "next/router";

export default function Page({ locale, featuresData, pricingData, faqData }) {
  const router = useRouter();
  const { status } = useSession();
  const UI = useContext(UIStates);

  const props = {
    router,
    status,
    locale,
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
