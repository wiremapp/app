import { DashPage } from "@/stories/components/pages/dashboard";
import React, { useContext } from "react";
import { useRouter } from "next/router";
import { UIStates } from "@/context/UI";

export default function Page({locale, auth}) {
  const router = useRouter();
  const UI = useContext(UIStates);

  const props = {
    router,
    auth,
    locale,
    ...UI,
  };

  return <DashPage {...props} />;
}
