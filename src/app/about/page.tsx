import { aboutTechStack } from "@/constants/constants";
export default function AboutPage() {
  return (
    <main>
      <section className='about py-36 min-h-dvh bg-charcoal text-light-gray'>
        <div className='wrapper'>
          <div className='about__content max-w-4xl mx-auto text-center'>
            <h1 className='text-4xl font-bold text-light-orange mb-6'>
              About NextPlay
            </h1>

            <p className='mb-6 text-lg'>
              <span className='text-light-orange font-semibold'>NextPlay</span>{" "}
              is a passion project built by{" "}
              <span className='text-light-orange'>Daniel Cikora</span> — a
              Frontend Developer who loves games, design, and creating slick
              user experiences.
            </p>
            <p className='mb-6'>
              It's not a real game store — you can't buy anything here. Instead,
              NextPlay gives you quick access to the best{" "}
              <span className='text-light-orange'>free-to-play</span> games and
              MMO titles. Each game includes a quick overview and a link to its
              official site, so you can jump in and play.
            </p>
            <p className='mb-6'>The project was created with:</p>
            <ul className='list-disc text-left inline-block mb-6 space-y-2 text-light-gray'>
              {aboutTechStack.map(({ label, note, link }) => (
                <li key={label}>
                  {link ? (
                    <a
                      href={link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-light-orange underline hover:text-burnt-orange'
                    >
                      {label}
                    </a>
                  ) : (
                    <span className='text-light-orange'>{label}</span>
                  )}{" "}
                  {note && <span className='text-light-gray'>{note}</span>}
                </li>
              ))}
            </ul>
            <p className='text-base'>
              This site is part of my developer portfolio. If you're curious
              about how it's built or want to collaborate,{" "}
              <a
                href='/contact'
                className='custom-underline text-light-orange font-medium'
              >
                get in touch
              </a>{" "}
              — I'd love to connect!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
