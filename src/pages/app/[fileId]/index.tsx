import { EditorPage } from "@/components";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  return <EditorPage router={router} />;
}
