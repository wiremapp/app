import { ProjectsPage } from "@/stories/components/pages/dashboard/projects";
import React, { useContext } from "react";
import { useRouter } from "next/router";
import { UIStates } from "@/context/UI";

export default function Page(pageProps) {
  const router = useRouter();
  const UI = useContext(UIStates);

  const props = {
    router,
    ...pageProps,
    ...UI,
  };

  return <ProjectsPage {...props} />;
}
