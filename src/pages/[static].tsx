import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { StaticPage } from "@/components/pages/static";
import { getFiles, getStaticEntryBySlug } from "@/utils/md";
import { UIStates } from "@/context/UI";
import { useSession } from "next-auth/react";

function Content({ locale, frontMatter, markdownBody }) {
  const router = useRouter();
  const { status } = useSession();
  const UI = useContext(UIStates);

  const props = {
    router,
    status,
    locale,
    ...UI,
  };

  return <StaticPage {...{...props, source: { frontMatter, markdownBody }} } />;
}

export default Content;

export async function getStaticProps({ params }: Params) {
  const { frontMatter, markdownBody } = await getStaticEntryBySlug(
    params.static,
    "pages"
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
