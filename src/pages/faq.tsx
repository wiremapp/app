import {FAQPage} from "@/components/pages/faq";
import { getAllStaticEntriesWithFrontMatter } from "@/utils/md";
import { useRouter } from "next/router";
import React from "react";
import {MaintPage} from "@/components/pages/maintenance";

export default function Page({faqData}) {
  const router = useRouter();
  return <MaintPage router={router} />;
}

export async function getStaticProps() {
  const faqData = await getAllStaticEntriesWithFrontMatter("faq");
  return {
    props: {
      faqData,
    },
  };
}