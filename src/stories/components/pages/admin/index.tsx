import { LayoutComponent } from "@/stories/components/units/layout";
import React from "react";


export const AdminPage = (props) => {

  return (
    <LayoutComponent
      {...props}
      title={props.locale.t("admin_label")}

    >
      Admin
      {JSON.stringify(props.pagesData)}
    </LayoutComponent>
  );
};

export default AdminPage;
