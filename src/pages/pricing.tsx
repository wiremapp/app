import { PricingPage } from "@/components";
import { getAllPostsWithFrontMatter } from "@/utils";
import { useRouter } from "next/router";
import React from "react";

export default function Page({ pricingData }) {
  const router = useRouter();
  return <PricingPage data={{pricingData}} router={router}/>;
}

export async function getStaticProps() {
  const pricingData = await getAllPostsWithFrontMatter("pricing");
  return {
    props: {
      pricingData,
    },
  };
}
