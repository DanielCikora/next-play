import Link from "next/link";
import { NavItemPropsDataType } from "@/types/props";
export default function NavItem({ href, linkText }: NavItemPropsDataType) {
  return <Link href={href}>{linkText}</Link>;
}
