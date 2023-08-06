import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import OrderPage from "@/components/pages/order";
import { getFiles, getStaticEntryBySlug } from "@/utils/md";
import { UIStates } from "@/context/UI";

function Content({ locale, frontMatter, markdownBody, auth }) {
  const router = useRouter();
  const UI = useContext(UIStates);

  const props = {
    router,
    auth,
    locale,
    ...UI,
  };

  return <OrderPage {...{ ...props, source: { frontMatter, markdownBody } }} />;
}

export default Content;

export async function getStaticProps({ params }: Params) {
  if (params.static === "basic") {
    return {
      notFound: true,
    };
  }
  const { frontMatter, markdownBody } = await getStaticEntryBySlug(
    params.static,
    "pricing"
  );

  return {
    props: {
      frontMatter,
      markdownBody,
    },
  };
}

export async function getStaticPaths() {
  const pages = await getFiles("pricing");
  const paths = pages.map((filename: string) => ({
    params: {
      static: filename.replace(/\.md/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
