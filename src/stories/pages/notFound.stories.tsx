import { NotFoundPage } from "@/components/pages/notFound";

export default {
  title: "Pages/NotFound",
  component: NotFoundPage,
};

export const NotFound = (props) => (
 <div className="p-4 bg-[#FF6838] rounded overflow-hidden">

   <NotFoundPage
    {...props}
  />

 </div>
);

NotFound.args = {
  locale : { t: (e)=>{
    return e
  }},
  router: {pathname : "/"},
  auth: { session :{ user : "User123"} },
};
