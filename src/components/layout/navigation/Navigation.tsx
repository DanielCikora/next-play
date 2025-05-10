import Logo from "@/components/ui/Logo";
import NavItem from "@/components/ui/NavItem";
import { navigationItems } from "@/constants/constants";
export default function Navigation() {
  return (
    <nav className='fixed w-full top-0 left-0 navigation py-6 bg-charcoal z-[9999]'>
      <div className='wrapper'>
        <div className='navigation-content flex items-center md:justify-start justify-between'>
          <div className='md:mr-20'>
            <Logo />
          </div>
          <ul className='flex gap-2 self-center'>
            {navigationItems.map(({ href, linkText }) => (
              <NavItem href={href} linkText={linkText} key={linkText} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
