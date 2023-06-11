import {DashPage} from "@/components/pages/dashboard";
import { useRouter } from "next/router";
import React from "react";

export default function Page() {
  const router = useRouter();
  return <DashPage router={router} />;
}