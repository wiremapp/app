import { DashPage, LandingPage, MaintPage } from "@/components";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Page() {
  const router = useRouter();
  const [appOpen, setAppOpen] = useState(false);
  return !appOpen ? (
    <LandingPage router={router} appState={{ appOpen, setAppOpen }} />
  ) : (
    <DashPage router={router} />
  );
}
