import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { getFiles, getPostBySlug } from "@/utils";
import { StaticPage } from "@/components";
import { useRouter } from "next/router";
import React from "react";


function Content({ frontMatter, markdownBody }) {
  const router = useRouter();
  return <StaticPage source={{ frontMatter, markdownBody }} router={router} />;
}

export default Content;

export async function getStaticProps({ params }: Params) {
  const { frontMatter, markdownBody } = await getPostBySlug(params.static);

  return {
    props: {
      frontMatter,
      markdownBody,
    },
  };
}

export async function getStaticPaths() {
  const pages = await getFiles();
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
