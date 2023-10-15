import React, { useState } from "react";

import { ModalWrapperComponent } from "@/stories/components/units/modalWrapper";
import { Button } from "@/stories/components/button";
import AuthModalComponent from "@/stories/components/authModal";

export const SignInModalButton = (props) => {

  return (
    <ModalWrapperComponent
      state={{ modal: props.authModal, setModal: props.setAuthModal }}
      component={
        <Button
          href="/signin"
          aria-label={"Sign In"}
          onClick={(e) => {
            e.preventDefault();
            props.setAuthModal(!props.authModal);
          }}
        >
          {props.locale.t("signIn_label")}
        </Button>
      }
    >
      <AuthModalComponent
        state={{ modal: props.authModal, setModal: props.setAuthModal }}
        {...props}
      />
    </ModalWrapperComponent>
  );
};


