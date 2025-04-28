import { ChangeEventHandler, MouseEventHandler } from "react";
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
export type ButtonPropsDataTypes = {
  buttonText: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};
export type CardPropsDataTypes = {
  src: string;
  alt: string;
  cardTitle: string;
  platformName: string;
  genre: string;
  description?: string;
  gameUrl: string;
  publisher: string;
  developer?: string;
  releaseDate?: string;
  viewMoreUrl: string;
};
export type CTAPropsDataTypes = {
  href: string;
  ctaText: string;
  className?: string;
};
export type PaginationPropsDataTypes = {
  totalPosts: number;
  postsPerPage: number;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
};
