import React, { MutableRefObject } from "react";
import styles from "./style.module.css";

type Props = {
  children?: any;
  className?: string;
  href?: string;
  icon?: React.ReactNode;
  onClick?: (e: any) => void;
  size?: string;
  variant?: string;
  type?: string;
  target?: string;
  space?: string;
  disabled?: boolean;
  ref?: MutableRefObject<any>;
};

export const Button = (props: Props) => {
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
    <a {...props} href={null} className={className}>
      <Content />
    </a>
  );
};
