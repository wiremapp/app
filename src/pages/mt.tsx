import { MaintPage } from "@/components/pages/maintenance";
import { useSession } from "next-auth/react";
import React, { useContext } from "react";
import { UIStates } from "@/context/UI";
import { useRouter } from "next/router";

export default function Page({ locale }) {
  const router = useRouter();
  const { status } = useSession();
  const UI = useContext(UIStates);

  const props = {
    router,
    status,
    locale,
    ...UI,
  };

  return <MaintPage {...props} />;
}
