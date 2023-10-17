import {
  getAllStaticEntriesWithFrontMatter,
  getMultiStaticEntriesFrontMatter,
} from "@/utils/md";
import React, { useContext } from "react";
import { UIStates } from "@/context/UI";
import { useRouter } from "next/router";
import { ScanPage } from "@/stories/components/pages/scan";

export default function Page(pageProps) {
  const router = useRouter();
  const UI = useContext(UIStates);

  const props = {
    router,
    ...pageProps,
    ...UI,
  };

  return <ScanPage {...props} />;
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
