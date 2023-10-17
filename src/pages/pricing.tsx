import { getAllStaticEntriesWithFrontMatter } from "@/utils/md";
import { PricingPage } from "@/stories/components/pages/pricing";
import React, { useContext } from "react";
import { UIStates } from "@/context/UI";
import { useRouter } from "next/router";

export default function Page(pageProps) {
  const router = useRouter();
  const UI = useContext(UIStates);

  const props = {
    router,
    ...pageProps,
    ...UI,
  };

  return <PricingPage {...props} />;
}

export async function getStaticProps() {
  const pricingData = await getAllStaticEntriesWithFrontMatter("pricing");
  return {
    props: {
      pricingData,
    },
  };
}
