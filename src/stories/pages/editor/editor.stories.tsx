import { DashPage } from "@/stories/pages/dashboard";

export default {
  title: "Pages/Editor",
  component: DashPage,
};

export const Editor = (props) => (
  <div className="overflow-hidden rounded bg-[#FF6838] p-4">
    <DashPage {...props} />
  </div>
);

Editor.args = {
  locale: {
    t: (e) => {
      return e;
    },
  },
  router: { pathname: "/" },
  auth: { session: { user: "User123" } },
};
