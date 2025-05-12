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
        className='custom-underline block md:text-xl text-2xl font-semibold text-burnt-orange'
        href={href}
        onClick={onClick}
      >
        {linkText}
      </Link>
    </li>
  );
}
