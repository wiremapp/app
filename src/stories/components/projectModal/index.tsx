import { HiXMark } from "react-icons/hi2";
import { signIn } from "next-auth/react";
import { LogoComponent } from "@/stories/components/units/logo";
import { Button } from "@/stories/components/button";
import styles from "./style.module.css";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import TextInputComponent from "../units/textInput";
import { handleCreateProj } from "@/utils/funcs";

export const ProjectModalComponent = (props) => {
  const [projNameInput, setProjNameInput] = useState(false);
  const [projName, setProjName] = useState("Untitled");

  return (
    <div className={styles.projectModal}>
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
          {props.locale.t("add_new_project_label")}
        </h1>

        {projNameInput && (
          <div className="space-x-1 flex">
            <TextInputComponent
              placeholder={props.locale.t("Enter Name")}
              onChange={(e) => {
                setProjName(e.target.value);
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
                const newProj = await handleCreateProj(projName);
                props.router.push(`/e?id=${newProj.success.data.associationId}`)
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
                setProjNameInput(false);
              }}
              type="submit"
            >
              {props.locale.t("cancel_label")}
            </Button>
          </div>
        )}

        {!projNameInput && (
          <div className="flex w-[512px] h-[256px] justify-between space-x-4">
            <div
              onClick={() => setProjNameInput(true)}
              className="bg-[#000000db] flex flex-grow rounded-sm items-center justify-center cursor-pointer"
            >
              + Blank Project
            </div>
            <div
              onClick={() => {
                props.router.push("/sitemap/scanner");
              }}
              className="bg-[#000000f4] flex flex-grow rounded-sm items-center justify-center cursor-pointer"
            >
              Import Project
            </div>
          </div>
        )}
      </div>
      <div className="mb-16 h-[45px]"></div>
    </div>
  );
};

export default ProjectModalComponent;
