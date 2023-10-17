import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { StaticPage } from "@/stories/components/pages/static";
import { getFiles, getStaticEntryBySlug } from "@/utils/md";
import { UIStates } from "@/context/UI";

function Content(pageProps) {
  const router = useRouter();
  const UI = useContext(UIStates);

  const props = {
    router,
    ...pageProps,
    ...UI,
  };

  return (
    <StaticPage
      {...{
        ...props,
        source: {
          frontMatter: pageProps.frontMatter,
          markdownBody: pageProps.markdownBody,
        },
      }}
    />
  );
}

export default Content;

export async function getStaticProps({ params }: Params) {
  const { frontMatter, markdownBody } = await getStaticEntryBySlug(
    params.static,
    "pages",
  );

  return {
    props: {
      frontMatter,
      markdownBody,
    },
  };
}

export async function getStaticPaths() {
  const pages = await getFiles("pages");
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
