import DashPage from "@/stories/components/pages/dashboard";

export default {
  title: "Pages/Dashboard",
  component: DashPage,
};

export const Dashboard = (props) => (
  <div className="overflow-hidden rounded bg-[#FF6838] p-4">
    <DashPage
      {...props}
    />
  </div>
);

Dashboard.args = {
  locale: {
    t: (e) => {
      return e;
    },
  },
  router: { pathname: "/" },
  auth: { session: { user: "User123" } },
};
