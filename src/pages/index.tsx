import { DashPage, LandingPage, MaintPage } from "@/components";
import { getAllPostsWithFrontMatter } from "@/utils";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Page({featuresData,pricingData}) {
  const router = useRouter();
  const [appOpen, setAppOpen] = useState(false);
  return !appOpen ? (
    <LandingPage data={{featuresData,pricingData}} router={router} appState={{ appOpen, setAppOpen }} />
  ) : (
    <DashPage router={router} />
  );
}


export async function getStaticProps() {
  const featuresData = await getAllPostsWithFrontMatter("features");
  const pricingData = await getAllPostsWithFrontMatter("pricing");

  return {
    props: {
      featuresData,
      pricingData
    },
  };
}
