import { MaintPage } from "@/stories/components/pages/maintenance";

export default {
  title: "Pages/Maintenance",
  component: MaintPage,
};

export const Maintenance = (props) => (
 <div className="p-4 bg-[#FF6838] rounded overflow-hidden">

   <MaintPage
    {...props}
  />

 </div>
);

Maintenance.args = {
  locale : { t: (e)=>{
    return e
  }},
  router: {pathname : "/"},
  auth: { session :{ user : "User123"} },
};
