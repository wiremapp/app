import { SEOScanPage } from "@/stories/components/pages/seo";

export default {
  title: "Pages/Scanner/SEO",
  component: SEOScanPage,
};

export const SEO = (props) => (
  <div className="overflow-hidden rounded bg-[#FF6838] p-4">
    <SEOScanPage {...props} />
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
