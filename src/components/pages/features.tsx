import Image from "next/image";
import { LayoutComponent } from "@/components/layout";
import { NextRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";
import FeaturesComponent from "../features";

export const FeatPage = ({ data, router }: { data: any , router?: NextRouter }) => {
  const { t } = useTranslation();
  return (
    <LayoutComponent
      title={t("features_label")}
      pageDesc={t("features_desc")}
      router={router}
    >
      <FeaturesComponent data={data} variant={"secondary"} />
    </LayoutComponent>
  );
};

export default FeatPage;
