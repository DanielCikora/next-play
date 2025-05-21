import Logo from "@/components/ui/Logo";
import NavItem from "@/components/ui/NavItem";
import { footerItems } from "@/constants/constants";
export default function Footer() {
  return (
    <footer className='footer pt-8 pb-42 border-t border-solid border-white'>
      <div className='wrapper'>
        <nav className='max-w-[1760px] justify-self-center footer__content flex w-full items-center justify-between'>
          <Logo />
          <ul className='flex gap-5'>
            {footerItems.map(({ href, linkText }) => (
              <NavItem key={linkText} href={href} linkText={linkText} />
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
