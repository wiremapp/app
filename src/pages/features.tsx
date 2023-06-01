import { FeatPage } from "@/components";
import { getAllStaticEntriesWithFrontMatter } from "@/utils";
import { useRouter } from "next/router";
import React from "react";

export default function Page({ featuresData }) {
  const router = useRouter();
  return <FeatPage data={{featuresData}} router={router} />;
}

export async function getStaticProps() {
  const featuresData = await getAllStaticEntriesWithFrontMatter("features");
  return {
    props: {
      featuresData,
    },
  };
}

