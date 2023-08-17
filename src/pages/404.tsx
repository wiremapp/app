import { NotFoundPage } from "@/stories/pages/notFound";
import React, { useContext } from "react";
import { UIStates } from "@/context/UI";
import { useRouter } from "next/router";

export default function Page({locale,auth}) {
  const router = useRouter();
  const UI = useContext(UIStates);

  const props = {
    router,
    auth,
    locale,
    ...UI,
  };

  return <NotFoundPage {...props} />;
}
