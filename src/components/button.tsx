import Link from "next/link";
import React from "react";

type Props = {
  children?: any;
  className?: string;
  href?: string;
  icon?: React.ReactNode;
  onClick?: (e: any) => void;
  size?: string;
  type?: string;
  ariaLabel?: string;
  variant?: string;
  target?: string;
  space?: string;
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
    props.type || "secondary"
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
