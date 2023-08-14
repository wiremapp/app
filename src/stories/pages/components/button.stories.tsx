import { Button as ButtonComponent } from "@/components/button";

export default {
  title: "Components/Button",
  component: ButtonComponent,
};

export const Secondary = (props) => (
  <ButtonComponent {...props}>{props.text}</ButtonComponent>
);

export const Primary = (props) => (
  <ButtonComponent {...props}>{props.text}</ButtonComponent>
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