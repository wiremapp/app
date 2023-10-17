import { MaintPage } from "@/stories/components/pages/maintenance";
import React, { useContext } from "react";
import { UIStates } from "@/context/UI";
import { useRouter } from "next/router";

export default function Page(pageProps) {
  const router = useRouter();
  const UI = useContext(UIStates);

  const props = {
    router,
    ...pageProps,
    ...UI,
  };

  return <MaintPage {...props} />;
}
