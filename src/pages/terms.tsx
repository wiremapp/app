import { MaintPage } from "@/components";
import { useRouter } from "next/router";
import React from "react";

export default function Page() {
  const router = useRouter();
  return <MaintPage router={router} customTitle={"Terms of Service"} />;
}