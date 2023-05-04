import { DashPage } from "@/components";
import { useRouter } from "next/router";

export default function Home({ postsData }) {
  const router = useRouter();
  return <DashPage posts={postsData} router={router}/>;
}
