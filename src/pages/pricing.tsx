import { getAllStaticEntriesWithFrontMatter } from "@/utils/md";
import { PricingPage } from "@/components/pages/pricing";
import { useSession } from "next-auth/react";
import React, { useContext } from "react";
import { UIStates } from "@/context/UI";
import { useRouter } from "next/router";

export default function Page({ locale, pricingData }) {
  const router = useRouter();
  const { status } = useSession();
  const UI = useContext(UIStates);

  const props = {
    router,
    status,
    locale,
    pricingData,
    ...UI,
  };

  return <PricingPage {...props} />;
}

export async function getStaticProps() {
  const pricingData = await getAllStaticEntriesWithFrontMatter("pricing");
  return {
    props: {
      pricingData,
    },
  };
}
