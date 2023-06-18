import FeatPage from "@/components/pages/features";
import { getAllStaticEntriesWithFrontMatter } from "@/utils/md";
import { useRouter } from "next/router";
import React from "react";
import { MaintPage } from "@/components/pages/maintenance";

export default function Page({ featuresData }) {
  const router = useRouter();
  return <MaintPage router={router} />;
}

export async function getStaticProps() {
  const featuresData = await getAllStaticEntriesWithFrontMatter("features");
  return {
    props: {
      featuresData,
    },
  };
}
