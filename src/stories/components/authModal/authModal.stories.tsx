import { AuthModalComponent } from "@/stories/components/authModal";
import React from "react";

export default {
  title: "Components/AuthModal",
  component: AuthModalComponent,
};

export const AuthModal = (props) => (
  <AuthModalComponent {...{ ...props, state: { modal: props.state } }} />
);

AuthModal.args = {
  state: false,
};
