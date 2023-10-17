import { getAllStaticEntriesWithFrontMatter } from "@/utils/md";
import FeatPage from "@/stories/components/pages/features";
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

  return <FeatPage {...props} />;
}

export async function getStaticProps() {
  const page = "features";
  const pageStatus = await getPageStatus(page);
  const featuresData = await getAllStaticEntriesWithFrontMatter(page);

  return {
    props: {
      featuresData,
      pageStatus,
    },
  };
}
