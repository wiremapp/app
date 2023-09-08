import React from "react";
import styles from "./style.module.css";

export const Button = (props) => {
  return (
    <a
      className={` ${props.className} ${styles["button"]} ${
        styles[`button-${props.variant !== "primary" ? "secondary" : "primary"}`]
      } `}
    >
      {props.children || (props.icon ? null : "Dolor Sit")}
      {props.icon ? props.icon : ""}
    </a>
  );
};
