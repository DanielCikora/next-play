import Logo from "@/components/ui/Logo";
import NavItem from "@/components/ui/NavItem";
import { footerItems } from "@/constants/constants";
import { formattedYear } from "@/lib/utils/currentDate";
export default function Footer() {
  return (
    <footer className='footer pt-8  border-t border-solid border-white'>
      <div className='wrapper'>
        <nav className='max-w-[1000px] mb-20 justify-self-center footer__content flex sm:flex-row sm:gap-0 gap-5 flex-col w-full sm:items-center justify-between'>
          <Logo />
          <ul className='flex md:flex-row flex-col md:gap-5 gap-2'>
            {footerItems.map(({ href, linkText }) => (
              <NavItem key={linkText} href={href} linkText={linkText} />
            ))}
          </ul>
        </nav>
        <div className='footer-bottom py-2 flex flex-col gap-2'>
          <p className='text-center text-sm'>
            © {formattedYear} NextPlay. All rights reserved.
          </p>
          <p className='text-xs text-center text-muted-foreground'>
            Game data provided by{" "}
            <a
              href='https://www.freetogame.com'
              target='_blank'
              rel='noopener noreferrer'
              className='font-semibold custom-underline text-burnt-orange'
            >
              FreeToGame.com
            </a>
            . This is a personal, non-commercial project by{" "}
            <a
              href='https://danielcikora.netlify.app'
              target='_blank'
              rel='noopener noreferrer'
              className='font-semibold custom-underline text-burnt-orange'
            >
              Daniel Cikora
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
