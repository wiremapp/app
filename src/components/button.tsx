import Link from "next/link";
import React, { MutableRefObject } from "react";

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
  ref?: MutableRefObject<any>
};

export const Component = (props: Props) => {
  const Content = () => {
    return (
      <>
        {props.children || (props.icon ? null : "Dolor Sit")}
        {props.icon ? props.icon : ""}
      </>
    );
  };
  const className = `${props.className} button button-${
    props.variant || "secondary"
  } ${
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
    <Link href={props.href} passHref>
      <a {...props} className={className}>
        <Content />
      </a>
    </Link>
  );
};

export default Component;
