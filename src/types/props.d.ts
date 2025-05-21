import { ChangeEventHandler, MouseEventHandler } from "react";
import { FetchGamesDataTypes } from "./games";

export type NavItemPropsDataType = {
  href:
    | "/"
    | "/games"
    | "/about"
    | "/contact"
    | "/news"
    | "/favorites"
    | "/privacy"
    | "/terms"
    | "/faq";
  linkText: string;
  onClick?: MouseEvent<HTMLAnchorElement>;
  showIn?: Array<"header" | "footer">;
};

export type CheckBoxPropsDataTypes = {
  name: string;
  htmlFor: string;
  labelText: string;
  value: string;
  checked?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export type ButtonPropsDataTypes = {
  buttonText: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export type CardPropsDataTypes = {
  game: FetchGamesDataTypes;
};

export type CTAPropsDataTypes = {
  href: string;
  ctaText: string;
  className?: string;
};

export type PaginationPropsDataTypes = {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
};

export type SelectPropsDataTypes = {
  options: string[];
  value: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  name: string;
};

export type SearchPropsDataTypes = {
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  ariaLabel: string;
};

export type HamburgerButtonPropsDataTypes = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  openMenu: boolean;
};
