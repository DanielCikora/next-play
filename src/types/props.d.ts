import { ChangeEventHandler } from "react";
export type NavItemPropsDataType = {
  href: "/" | "/games" | "/about" | "/contact" | "/news";
  linkText: string;
};
export type CheckBoxPropsDataTypes = {
  name: string;
  htmlFor: string;
  labelText: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};
