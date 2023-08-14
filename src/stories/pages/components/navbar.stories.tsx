import { Button as ButtonComponent } from "@/components/button";
import NavbarComponent from "@/components/navbar";

export default {
  title: "Components/Navbar",
  component: NavbarComponent,
};

export const Navbar = (props) => (
  <NavbarComponent {...props} />
);

Navbar.args = {
  locale : { t: (e)=>{
    return e
  }},
  menuData: [
    {
      id: "home",
      href: "/",
    },
    {
      id: "features",
      href: "/features",
    },
    { id: "pricing", href: "/pricing" },
    {
      id: "faq",
      href: "/faq",
    },
  ],
  auth: { session: null, state: "authenticated" },
  router: { pathname : "/"}
};
