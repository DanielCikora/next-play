import { NavItemPropsDataType } from "@/types/props";
import { ContactLinkType } from "@/types/contact";

import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const navigationItems: NavItemPropsDataType[] = [
  { href: "/", linkText: "Home", showIn: ["header"] },
  { href: "/about", linkText: "About", showIn: ["header", "footer"] },
  { href: "/contact", linkText: "Contact", showIn: ["header", "footer"] },
  { href: "/favorites", linkText: "Favorites", showIn: ["header"] },
  { href: "/privacy", linkText: "Privacy Policy", showIn: ["footer"] },
];

export const headerItems = navigationItems.filter((item) =>
  item.showIn?.includes("header")
);

export const footerItems = navigationItems.filter((item) =>
  item.showIn?.includes("footer")
);

export const contactLinks: ContactLinkType[] = [
  {
    icon: faEnvelope,
    href: "mailto:d.cikora98@gmail.com",
    label: "d.cikora98@gmail.com",
    isEmail: true,
  },
  {
    icon: faLinkedin,
    href: "https://linkedin.com/in/daniel-cikora-a7344a253",
    label: "LinkedIn Profile",
  },
  {
    icon: faGlobe,
    href: "https://danielcikora.netlify.app",
    label: "Portfolio Website",
  },
  {
    icon: faInstagram,
    href: "https://instagram.com/_dissimulated_",
    label: "@_dissimulated_",
  },
];
