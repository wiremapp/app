import { LoadingPage } from "@/stories/pages/loading";

export default {
  title: "Pages/Loading",
  component: LoadingPage,
};

export const Loading = (props) => (
  <div
    style={{
      background: "linear-gradient(180deg, #1B1B1B 0%, #141414 100%), #1E1E1E",
    }}
  >
    <LoadingPage {...props} />
  </div>
);

Loading.args = {
  locale : { t: (e)=>{
    return e
  }},
  router: {pathname : "/"},
  auth: { session :{ user : "User123"} },
};
