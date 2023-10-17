import {
  getAllStaticEntriesWithFrontMatter,
  getMultiStaticEntriesFrontMatter,
} from "@/utils/md";
import React, { useContext } from "react";
import { UIStates } from "@/context/UI";
import { useRouter } from "next/router";
import { SEOScanPage } from "@/stories/components/pages/seo";

export default function Page(pageProps) {
  const router = useRouter();
  const UI = useContext(UIStates);

  const props = {
    router,
    ...pageProps,
    ...UI,
  };

  return <SEOScanPage {...props} />;
}

export async function getStaticProps() {
  const staticEntries = await getMultiStaticEntriesFrontMatter([
    "features",
    "pricing",
    "faq",
  ]);

  return {
    props: {
      featuresData: staticEntries["features"],
      pricingData: staticEntries["pricing"],
      faqData: staticEntries["faq"],
    },
  };
}
