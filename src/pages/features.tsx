import { getAllStaticEntriesWithFrontMatter } from "@/utils/md";
import FeatPage from "@/components/pages/features";
import { useSession } from "next-auth/react";
import React, { useContext } from "react";
import { UIStates } from "@/context/UI";
import { useRouter } from "next/router";

export default function Page({ locale, featuresData }) {
  const router = useRouter();
  const { status } = useSession();
  const UI = useContext(UIStates);

  const props = {
    router,
    status,
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
