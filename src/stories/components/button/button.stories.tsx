import { Button } from "@/stories/components/button";
import React from "react";

export default {
  title: "Components/Button",
  component: Button,
};

export const Secondary = (props) => (
  <Button {...props}>{props.text}</Button>
);

export const Primary = (props) => (
  <Button {...props}>{props.text}</Button>
);

Secondary.args = {
  text: "Button",
  disabled: false,
};

Primary.args = {
  text: "Button",
  variant: "primary",
  disabled: false,
};