import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React, { useContext } from "react";
import { UIStates } from "@/context/UI";
import { useRouter } from "next/router";
import { ScanPage } from "@/stories/components/pages/scan";
import { fetchOrgPaths, validateOrg } from "@/utils/funcs";
import DashPage from "@/stories/components/pages/dashboard";

export default function Page(pageProps) {
  const router = useRouter();
  const UI = useContext(UIStates);

  const props = {
    router,
    ...pageProps,
    ...UI,
  };

  return <DashPage {...props} />;
}
export async function getStaticPaths() {

  const orgPaths = await fetchOrgPaths();

  const paths = orgPaths.orgs.map((org) => ({
    params: { name: org.name },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const validOrg = await validateOrg(context.params.name);

  console.log(validOrg);

  if (!validOrg) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      org: validOrg,
    },
  };
}
