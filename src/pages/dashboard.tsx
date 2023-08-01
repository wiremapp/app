import { DashPage } from "@/components/pages/dashboard";
import { useSession } from "next-auth/react";
import React, { useContext } from "react";
import { useRouter } from "next/router";
import { UIStates } from "@/context/UI";

export default function Page({locale}) {
  const router = useRouter();
  const { status } = useSession();
  const UI = useContext(UIStates);

  const props = {
    router,
    status,
    locale,
    ...UI,
  };

  return <DashPage {...props} />;
}
