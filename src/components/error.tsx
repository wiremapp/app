import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

type Props = {
  children?: any;
  className?: string;
  contentTitle?: string;
};

export const Component = (props: Props) => {
  const { t } = useTranslation();
  return (
    <section>
      <div className="section-container">
        <div className="section-container">
          <div>
            <h1> {props.contentTitle || t("genericError_title")}</h1>
            <p>Description</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Component;
