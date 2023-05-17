import { DashPage } from "@/components";
import { useRouter } from "next/router";
import React from "react";

export default function Home({ }) {
  const router = useRouter();
  return <DashPage router={router} />;
}
