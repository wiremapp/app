import { getAllStaticEntriesWithFrontMatter } from "@/utils/md";
import FeatPage from "@/stories/pages/features";
import React, { useContext } from "react";
import { UIStates } from "@/context/UI";
import { useRouter } from "next/router";

export default function Page({ locale, featuresData, auth }) {
  const router = useRouter();
  const UI = useContext(UIStates);

  const props = {
    router,
    auth,
    locale,
    featuresData,
    ...UI,
  };

  return <FeatPage {...props} />;
}

export async function getStaticProps() {
  const featuresData = await getAllStaticEntriesWithFrontMatter("features");
  return {
    props: {
      featuresData,
    },
  };
}
