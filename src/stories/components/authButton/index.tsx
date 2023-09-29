import React, { useState } from "react";

import { ModalWrapperComponent } from "@/stories/components/units/modalWrapper";
import { Button } from "@/stories/components/button";
import AuthModalComponent from "@/stories/components/authModal";

export const SignInModalButton = (props) => {
  const [signInModal, setSignInModal] = useState(false);

  return (
    <ModalWrapperComponent
      state={{ modal: signInModal, setModal: setSignInModal }}
      component={
        <Button
          href="/signin"
          aria-label={"Sign In"}
          onClick={(e) => {
            e.preventDefault();
            setSignInModal(!signInModal);
          }}
        >
          {props.locale.t("signIn_label")}
        </Button>
      }
    >
      <AuthModalComponent
        state={{ modal: signInModal, setModal: setSignInModal }}
        {...props}
      />
    </ModalWrapperComponent>
  );
};


