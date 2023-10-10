import { OrgModalComponent } from "@/stories/components/orgModal";
import React from "react";

export default {
  title: "Components/projectModal",
  component: OrgModalComponent,
};

export const ProjectModal = (props) => (
  <OrgModalComponent {...{ ...props, state: { modal: props.state } }} />
);

ProjectModal.args = {
  state: false,
  locale : { t: (e)=>{
    return e
  }},
};
