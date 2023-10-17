import { HiXMark } from "react-icons/hi2";
import { signIn } from "next-auth/react";
import { LogoComponent } from "@/stories/components/units/logo";
import { Button } from "@/stories/components/button";
import styles from "./style.module.css";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import TextInputComponent from "../units/textInput";
import { handleCreateOrg } from "@/utils/funcs";

export const OrgModalComponent = (props) => {
  const [orgNameInput, setOrgNameInput] = useState(true);
  const [orgName, setOrgName] = useState("");

  return (
    <div className={styles.orgModal}>
      <div className="flex w-screen items-center justify-between px-10 py-8">
        <div className="flex w-1/3 justify-start">
          <HiXMark
            size={40}
            className="opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300"
            onClick={() => props.state.setModal(!props.state.modal)}
          />
        </div>
      </div>

      <div className="flex w-[450px] flex-col items-center space-y-5">
        <h1 className="text-3xl font-semibold normal-case tracking-wider">
          {props.locale.t("add_new_org_label")}
        </h1>

          <div className="space-x-1 flex">
            <TextInputComponent
              placeholder={props.locale.t("Enter Name")}
              onChange={(e) => {
                setOrgName(e.target.value);
              }}
            />

            <Button
              className="shrink-0 md:block"
              href="/"
              variant="primary"
              aria-label={"Project Name Input"}
              space={"medium"}
              onClick={async (e) =>  {
                e.preventDefault();
                const newProj = await handleCreateOrg(orgName);
                props.router.push(`/o/${newProj.data.name}`)
              }}
              type="submit"
            >
              {props.locale.t("create_label")}
            </Button>
            <Button
              className="shrink-0 md:block"
              href="/"
              aria-label={"Project Name Input"}
              space={"medium"}
              onClick={(e) => {
                e.preventDefault();
                setOrgNameInput(false);
              }}
              type="submit"
            >
              {props.locale.t("cancel_label")}
            </Button>
          </div>

      </div>
      <div className="mb-16 h-[45px]"></div>
    </div>
  );
};

export default OrgModalComponent;
