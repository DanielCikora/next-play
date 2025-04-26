import Link from "next/link";
import { NavItemPropsDataType } from "@/types/props";
export default function NavItem({ href, linkText }: NavItemPropsDataType) {
  return (
    <li>
      <Link
        className='custom-underline block text-xl font-semibold text-burnt-orange'
        href={href}
      >
        {linkText}
      </Link>
    </li>
  );
}
