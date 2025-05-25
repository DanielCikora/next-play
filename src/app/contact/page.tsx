import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { contactLinks } from "@/constants/constants";
export default function ContactPage() {
  return (
    <main>
      <section
        className='contact py-36 min-h-dvh'
        aria-labelledby='contact-heading'
      >
        <div className='wrapper'>
          <div className='contact__content flex flex-col items-center'>
            <h2
              id='contact-heading'
              className='text-4xl font-bold text-center text-light-orange mb-4'
            >
              Let's Connect
            </h2>
            <p className='text-center text-light-gray max-w-xl mx-auto mb-10'>
              I'm <span className='text-light-orange'>Daniel Cikora</span> — a
              Frontend Developer with a passion for stylish UIs, clean code, and
              tasty web animations. Whether it's a collab or a question, feel
              free to hit me up:
            </p>
            <ul
              className='space-y-6 text-base text-light-gray max-w-md mx-auto'
              aria-label='Contact Methods'
            >
              {contactLinks.map(({ icon, href, label }) => (
                <li key={label} className='flex items-center gap-4'>
                  <FontAwesomeIcon
                    icon={icon}
                    className='text-light-orange w-7 h-7'
                    aria-hidden='true'
                  />
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className='hover:text-burnt-orange transition-colors'
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <p className='text-sm text-center text-light-gray mt-10'>
              Also available on WhatsApp or Viber — just ask via email or
              socials!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
