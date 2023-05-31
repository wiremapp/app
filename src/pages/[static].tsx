import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { getFiles, getPostBySlug } from "@/utils";
import { EditorPage, StaticPage } from "@/components";
import { useRouter } from "next/router";
import React from "react";

function Content({ frontMatter, markdownBody, appState }) {
  const router = useRouter();
  return !appState ? (
    <StaticPage source={{ frontMatter, markdownBody }} router={router} />
  ) : (
    <EditorPage router={router}  />
  );
}

export default Content;

export async function getStaticProps({ params }: Params) {
  const { frontMatter, markdownBody } = await getPostBySlug(params.static, "pages");

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
