import { ProjectModalComponent } from "@/stories/components/projectModal";
import React from "react";

export default {
  title: "Components/projectModal",
  component: ProjectModalComponent,
};

export const ProjectModal = (props) => (
  <ProjectModalComponent {...{ ...props, state: { modal: props.state } }} />
);

ProjectModal.args = {
  state: false,
  locale : { t: (e)=>{
    return e
  }},
};
