import { MaintPage } from "@/components";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  return <MaintPage router={router} />;
}
