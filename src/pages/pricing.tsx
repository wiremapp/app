import { MaintPage } from "@/components/pages/maintenance";
import { PricingPage } from "@/components/pages/pricing";
import { getAllStaticEntriesWithFrontMatter } from "@/utils/md";
import { useRouter } from "next/router";
import React from "react";

export default function Page({ pricingData }) {
  const router = useRouter();
  return <MaintPage router={router} />;
}

export async function getStaticProps() {
  const pricingData = await getAllStaticEntriesWithFrontMatter("pricing");
  return {
    props: {
      pricingData,
    },
  };
}
