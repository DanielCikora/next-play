import { NavItemPropsDataType } from "@/types/props";

const navigationItems: NavItemPropsDataType[] = [
  { href: "/", linkText: "Home", showIn: ["header"] },
  { href: "/news", linkText: "News", showIn: ["header"] },
  { href: "/about", linkText: "About", showIn: ["header", "footer"] },
  { href: "/contact", linkText: "Contact", showIn: ["header", "footer"] },
  { href: "/favorites", linkText: "Favorites", showIn: ["header"] },
  { href: "/privacy", linkText: "Privacy Policy", showIn: ["footer"] },
  { href: "/terms", linkText: "Terms of Service", showIn: ["footer"] },
];

export const headerItems = navigationItems.filter((item) =>
  item.showIn?.includes("header")
);

export const footerItems = navigationItems.filter((item) =>
  item.showIn?.includes("footer")
);
