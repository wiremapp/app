import React, { MutableRefObject } from "react";
import styles from "./style.module.css";
import Link from "next/link";

export const Button = (props) => {
  const Content = () => {
    return (
      <>
        {props.children || (props.icon ? null : "Dolor Sit")}
        {props.icon ? props.icon : ""}
      </>
    );
  };

  const className = `${props.className} ${styles["button"]}  ${
    props.variant
      ? styles[`button-${props.variant}`]
      : styles["button-secondary"]
  }  ${
    props.space
      ? props.space === "small"
        ? "px-2"
        : props.space === "medium"
        ? "px-8"
        : props.space === "wide"
        ? "px-12"
        : props.space
      : "px-4"
  }`;

  return (
    <a {...props} className={className}>
      <Content />
    </a>
  );
};
