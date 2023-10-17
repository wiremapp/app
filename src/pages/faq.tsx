import { getAllStaticEntriesWithFrontMatter } from "@/utils/md";
import { FAQPage } from "@/stories/components/pages/faq";
import React, { useContext } from "react";
import { UIStates } from "@/context/UI";
import { useRouter } from "next/router";
import { getPageStatus } from "@/utils/funcs";

export default function Page(pageProps) {
  const router = useRouter();
  const UI = useContext(UIStates);

  const props = {
    router,
    ...pageProps,
    ...UI,
  };

  return <FAQPage {...props} />;
}

export async function getStaticProps() {
  const page = "faq";
  const pageStatus = await getPageStatus(page);
  const faqData = await getAllStaticEntriesWithFrontMatter(page);

  return {
    props: {
      faqData,
      pageStatus,
    },
  };
}
