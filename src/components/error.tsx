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
      <div className="mx-auto flex h-full w-full flex-col items-center justify-center px-6 lg:px-32">
        <div className="flex w-full items-center justify-center bg-gray-500">
          {props.contentTitle || t("genericError_title")}
        </div>
      </div>
    </section>
  );
};

export default Component;
