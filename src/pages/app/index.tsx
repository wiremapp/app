import { DashPage } from "@/components";
import { useRouter } from "next/router";

export default function Home({ }) {
  const router = useRouter();
  return <DashPage router={router} />;
}
