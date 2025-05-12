"use client";
import { navigationItems } from "@/constants/constants";
import NavItem from "./NavItem";
import { useEffect, useState } from "react";
import HamburgerButton from "./HamburgerButton";
import useIsTablet from "@/hooks/useIsTablet";
export default function HamburgerMenu() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const isTablet = useIsTablet();
  const [hasMounted, setHasMounted] = useState<boolean>(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const toggleHamburger = () => {
    setOpenMenu((prevOpen) => !prevOpen);
  };

  useEffect(() => {
    if (isTablet) {
      setOpenMenu(false);
    } else {
      setOpenMenu(true);
    }
  }, [isTablet]);

  if (!hasMounted) return null;

  return (
    <>
      <ul
        className={`md:static md:flex-row flex-col absolute top-[75px] left-0 w-full
          gap-2 md:self-center items-center transition-all duration-700 ease-in-out overflow-hidden
          ${
            isTablet
              ? openMenu
                ? "flex bg-charcoal z-[9999] h-dvh pt-20"
                : "h-0 opacity-0 flex"
              : "md:flex"
          }
        `}
      >
        {navigationItems.map(({ href, linkText }) => (
          <NavItem
            onClick={() => setOpenMenu(false)}
            href={href}
            linkText={linkText}
            key={linkText}
          />
        ))}
      </ul>
      <HamburgerButton openMenu={openMenu} onClick={toggleHamburger} />
    </>
  );
}
