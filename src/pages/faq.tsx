import { FAQPage } from "@/components";
import { getAllPostsWithFrontMatter } from "@/utils";
import { useRouter } from "next/router";
import React from "react";

export default function Page() {
  const router = useRouter();
  return <FAQPage router={router} />;
}

export async function getStaticProps() {
  const faqData = await getAllPostsWithFrontMatter("faq");
  return {
    props: {
      faqData,
    },
  };
}