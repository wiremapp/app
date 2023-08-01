import { getAllStaticEntriesWithFrontMatter } from "@/utils/md";
import { FAQPage } from "@/components/pages/faq";
import { useSession } from "next-auth/react";
import React, { useContext } from "react";
import { UIStates } from "@/context/UI";
import { useRouter } from "next/router";

export default function Page({ locale, faqData }) {
  const router = useRouter();
  const { status } = useSession();
  const UI = useContext(UIStates);

  const props = {
    router,
    status,
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
