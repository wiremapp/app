import { LandingPage } from "@/stories/components/pages/landing";

export default {
  title: "Pages/Home",
  component: LandingPage,
};

export const Home = (props) => (
  <div className="rounded bg-[#FF6838]">
    <LandingPage
      {...{
        ...props,
        auth: !props.authenticated
          ? false
          : { session: { user: { email: props.userEmail } } },
      }}
    />
  </div>
);

Home.args = {
  authenticated: false,
  userEmail: "user@example",
  locale: {
    t: (e) => {
      return e;
    },
  },
  router: { pathname: "/" },
  auth: { session: { user: "User123" } },
  faqData: [
    { frontMatter: { title: "Faq1", description: "Faq1 Description" } },
  ],
  pricingData: [
    {
      frontMatter: {
        order: 0,
        title: "Basic",
        description: "Best suited for individuals.",
        features: [
          { title: "Free forever", included: true },
          { title: "Create unlimited sitemaps", included: true },
          { title: "Unlimited Exports", included: true },
          { title: "Use templates", included: true },
          { title: "Shared workspaces", included: false },
          { title: "Organization spaces", included: false },
          { title: "API access", included: false },
        ],
        monthly_price_usd: 0,
        monthly_price_gbp: 0,
        annual_price_usd: 0,
        annual_price_gbp: 0,
      },
    },
  ],
  featuresData: [
    {
      frontMatter: {
        oder: 0,
        title: "Easy-to-use",
        description:
          "Duis laoreet feugiat convallis. Proin semper lobortis interdum. In nec nunc mollis, suscipit arcu vitae.",
      },
    },
    {
      frontMatter: {
        oder: 1,
        title: "Easy-to-use",
        description:
          "Duis laoreet feugiat convallis. Proin semper lobortis interdum. In nec nunc mollis, suscipit arcu vitae.",
      },
    },
    {
      frontMatter: {
        oder: 2,
        title: "Easy-to-use",
        description:
          "Duis laoreet feugiat convallis. Proin semper lobortis interdum. In nec nunc mollis, suscipit arcu vitae.",
      },
    },
    {
      frontMatter: {
        oder: 3,
        title: "Easy-to-use",
        description:
          "Duis laoreet feugiat convallis. Proin semper lobortis interdum. In nec nunc mollis, suscipit arcu vitae.",
      },
    },
    {
      frontMatter: {
        oder: 4,
        title: "Easy-to-use",
        description:
          "Duis laoreet feugiat convallis. Proin semper lobortis interdum. In nec nunc mollis, suscipit arcu vitae.",
      },
    },
  ],
};
