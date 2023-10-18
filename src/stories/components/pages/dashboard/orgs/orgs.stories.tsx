import OrgsPage from "@/stories/components/pages/dashboard/orgs";

export default {
  title: "Pages/Organisations",
  component: OrgsPage,
};

export const Organisations = (props) => (
  <div className="overflow-hidden rounded bg-[#FF6838] p-4">
    <OrgsPage
      {...props}
    />
  </div>
);

Organisations.args = {
  locale: {
    t: (e) => {
      return e;
    },
  },
  router: { pathname: "/" },
  auth: { session: { user: "User123" } },
};
