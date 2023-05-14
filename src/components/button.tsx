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
};

export const Component = (props: Props) => {
  return (
    <Link href={props.href ? props.href : null}>
      <a
        {...props}
        className={`${props.className} button button-${props.type || "secondary"}`}
      >
        {props.children || (props.icon ? null : "Dolor Sit")}
        {props.icon ? props.icon : ""}
      </a>
    </Link>
  );
};

export default Component;
