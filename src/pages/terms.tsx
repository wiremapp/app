import { MaintPage } from "@/components";
import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Page() {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <MaintPage
      router={router}
      customTitle={"Terms of Service"}
      customDesc={t("terms_desc")}
    />
  );
}
