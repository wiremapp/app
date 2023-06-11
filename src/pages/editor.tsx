import {EditorPage} from "@/components/pages/editor";
import { useRouter } from "next/router";
import React from "react";

export default function Page() {
  const router = useRouter();
  return <EditorPage router={router} />;
}