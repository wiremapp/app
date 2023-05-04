import { MaintPage } from "@/components";
import { useRouter } from "next/router";

export default function Home({ postsData }) {
  const router = useRouter();
  return <MaintPage />;
}
