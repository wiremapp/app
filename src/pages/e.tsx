import { EditorPage } from "@/stories/components/pages/editor";
import React, { useContext } from "react";
import { UIStates } from "@/context/UI";
import { useRouter } from "next/router";
import { validateProject } from "@/utils/funcs";

export default function Page({ project, locale, auth }) {
  const router = useRouter();
  const UI = useContext(UIStates);

  const props = {
    router,
    auth,
    locale,
    project,
    ...UI,
  };
  
  return <EditorPage {...props} />;
}

export const getServerSideProps = async (context: any) => {

  const validProject = await validateProject(context.query.id);

  if (!validProject) {
    return {
      notFound: true,
    };
  }

  return {
    props: { project : validProject },
  };
};