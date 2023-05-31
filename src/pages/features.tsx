import { FeatPage } from "@/components";
import { getAllPostsWithFrontMatter } from "@/utils";
import { useRouter } from "next/router";
import React from "react";

export default function Page({ featuresData }) {
  const router = useRouter();
  return <FeatPage data={{featuresData}} router={router} />;
}

export async function getStaticProps() {
  const featuresData = await getAllPostsWithFrontMatter("features");
  return {
    props: {
      featuresData,
    },
  };
}

