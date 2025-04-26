import Logo from "@/components/ui/Logo";
import NavItem from "@/components/ui/NavItem";
import { NavItemPropsDataType } from "@/types/props";
export default function Navigation() {
  const navigationItems: NavItemPropsDataType[] = [
    { href: "/", linkText: "Home" },
    { href: "/games", linkText: "Games" },
    { href: "/news", linkText: "News" },
    { href: "/about", linkText: "About" },
    { href: "/contact", linkText: "Contact" },
  ];
  return (
    <nav className='fixed w-full top-0 left-0 navigation py-2 bg-gray-700'>
      <div className='wrapper'>
        <div className='navigation-content flex items-center'>
          <Logo />
          <ul className='flex gap-2'>
            {navigationItems.map(({ href, linkText }) => (
              <NavItem href={href} linkText={linkText} key={linkText} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
