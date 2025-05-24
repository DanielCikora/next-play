import Link from "next/link";
import { NavItemPropsDataType } from "@/types/props";
export default function NavItem({
  href,
  linkText,
  onClick,
}: NavItemPropsDataType) {
  return (
    <li>
      <Link
        className='custom-underline block text-xl md:font-semibold font-normal text-burnt-orange'
        href={href}
        onClick={onClick}
      >
        {linkText}
      </Link>
    </li>
  );
}
