import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useRouter } from "next/router";
import React from "react";
import { StaticPage } from "@/components/pages/static";
import { getFiles, getStaticEntryBySlug } from "@/utils/md";
import { MaintPage } from "@/components/pages/maintenance";

function Content({ frontMatter, markdownBody }) {
  const router = useRouter();
  return <MaintPage router={router} />;
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
