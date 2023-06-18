import {NotFoundPage} from "@/components/pages/notFound";
import { useRouter } from "next/router";
import React from "react";

export default function Page() {
  const router = useRouter();
  return <NotFoundPage router={router} />;
}
