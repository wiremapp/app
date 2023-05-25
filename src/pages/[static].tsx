import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { getFiles, getPostBySlug } from "@/utils";
import { MaintPage, StaticPage } from "@/components";
import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";

function Content({ frontMatter, markdownBody }) {
  const router = useRouter();
  const { t } = useTranslation();

  return <MaintPage router={router} customTitle={"About"} />;
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
