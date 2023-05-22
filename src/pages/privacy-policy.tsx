import { PrivacyPolicyPage } from "@/components";
import { useRouter } from "next/router";
import React from "react";

export default function Page() {
  const router = useRouter();
  return <PrivacyPolicyPage router={router}/>;
}
