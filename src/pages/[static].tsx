import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { getFiles, getStaticEntryBySlug } from "@/utils";
import { EditorPage, StaticPage } from "@/components";
import { useRouter } from "next/router";
import React from "react";

function Content({ frontMatter, markdownBody, appState }) {
  const router = useRouter();
  return <StaticPage source={{ frontMatter, markdownBody }} router={router} />;
}

export default Content;

export async function getStaticProps({ params }: Params) {
  const { frontMatter, markdownBody } = await getStaticEntryBySlug(params.static, "pages");

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
