import { useEffect, useState } from "react";
import { LayoutComponent } from "@/components";
import React from "react";
import { useProjects } from "@/hooks";
import { useTranslation } from "react-i18next";
import { ButtonComponent as Button } from "@/components";

export const Page = ({ router ,appState = null}) => {
  const { t } = useTranslation();
  const { getAll, isLoading, error, success, setName, add } = useProjects();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    add();
  };

  return (
    <LayoutComponent
      router={router}
      title={t("dash_label")}
      navbar={false}
    >
            <input
        onChange={(e) => setName(e.target.value)}
        className="mr-2 hidden rounded bg-white px-4 text-black text-opacity-70 opacity-70 md:block"
        placeholder="Project name"
        disabled={isLoading}
      />
      <Button
        className="hidden shrink-0 md:block"
        href="/auth"
        variant="primary"
        aria-label={"Email Sign Up"}
        space={"medium"}
        onClick={handleSubmit}
        disabled={isLoading}
        type="submit"
      >
        {isLoading ? "Adding..." : "Add"}
      </Button>
    </LayoutComponent>
  );
};

export default Page;
