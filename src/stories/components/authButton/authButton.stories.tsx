import React from "react";
import { SignInModalButton } from "@/stories/components/authButton";

export default {
  title: "Components/AuthButton",
  component: SignInModalButton,
};

export const Navbar = (props) => (
  <SignInModalButton {...props} />
);

Navbar.args = {
  locale : { t: (e)=>{
    return e
  }},
  auth: { session: null, state: "authenticated" },
  router: { pathname : "/"}
};
