import HamburgerMenu from "@/components/ui/HamburgerMenu";
import Logo from "@/components/ui/Logo";
export default function Navigation() {
  return (
    <nav className='fixed w-full top-0 left-0 navigation py-6 bg-charcoal z-[9999] md:border-none border-b border-solid border-white'>
      <div className='wrapper'>
        <div className='navigation-content w-full flex items-center md:justify-start justify-between'>
          <div className='md:mr-20'>
            <Logo />
          </div>
          <HamburgerMenu />
        </div>
      </div>
    </nav>
  );
}
