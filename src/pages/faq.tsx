import { FAQPage } from "@/components";
import { getAllStaticEntriesWithFrontMatter } from "@/utils";
import { useRouter } from "next/router";
import React from "react";

export default function Page({faqData}) {
  const router = useRouter();
  return <FAQPage data={{faqData}} router={router} />;
}

export async function getStaticProps() {
  const faqData = await getAllStaticEntriesWithFrontMatter("faq");
  return {
    props: {
      faqData,
    },
  };
}