import {
  getAllStaticEntriesWithFrontMatter,
  getMultiStaticEntriesFrontMatter,
} from "@/utils/md";
import { LandingPage } from "@/stories/components/pages/landing";
import React, { useContext } from "react";
import { UIStates } from "@/context/UI";
import { useRouter } from "next/router";
import { getPageStatus } from "@/utils/funcs";

export default function Page(pageProps) {
  const router = useRouter();
  const UI = useContext(UIStates);

  const props = {
    router,
    ...pageProps,
    ...UI,
  };

  return <LandingPage {...props} />;
}

export async function getStaticProps() {
  const page = "index";
  const pageStatus = await getPageStatus(page);
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
      pageStatus,
    },
  };
}
