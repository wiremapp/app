import { DashPage, LayoutComponent } from "@/components";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  return <DashPage router={router} />;
}
