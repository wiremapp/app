import { getAllStaticEntriesWithFrontMatter } from "@/utils/md";
import { FAQPage } from "@/components/pages/faq";
import React, { useContext } from "react";
import { UIStates } from "@/context/UI";
import { useRouter } from "next/router";

export default function Page({ locale, faqData, auth }) {
  const router = useRouter();
  const UI = useContext(UIStates);

  const props = {
    router,
    auth,
    locale,
    faqData,
    ...UI,
  };

  return <FAQPage {...props} />;
}

export async function getStaticProps() {
  const faqData = await getAllStaticEntriesWithFrontMatter("faq");
  return {
    props: {
      faqData,
    },
  };
}
