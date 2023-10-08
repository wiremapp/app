import { ScanPage } from "@/stories/components/pages/scan";

export default {
  title: "Pages/Scanner/Sitemap",
  component: ScanPage,
};

export const SEO = (props) => (
  <div className="overflow-hidden rounded bg-[#FF6838] p-4">
    <ScanPage {...props} />
  </div>
);

SEO.args = {
  locale: {
    t: (e) => {
      return e;
    },
  },
  router: { pathname: "/" },
  auth: { session: { user: "User123" } },
};
