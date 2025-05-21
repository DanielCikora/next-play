export default function PrivacyPage() {
  const formattedDate: string = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date());
  return (
    <main className='privacy-policy py-32'>
      <div className='wrapper wrapper--privacy-policy'>
        <section className='privacy__content max-w-[800px] justify-self-center gap-5 flex flex-col'>
          <h2 className='text-3xl font-bold'>Privacy Policy for NextPlay</h2>
          <p className='text-sm text-muted-foreground'>
            Last updated: {formattedDate}
          </p>
          <p>
            Welcome to <strong>NextPlay</strong> - a personal game store project
            created and designed by me, Daniel Cikora. This project is for
            portfolio and educational purposes only.
          </p>
          <h2 className='text-xl font-semibold'>1. Personal Information</h2>
          <p>
            NextPlay does not collect, store, or share any personal information
            from users. This site does not use forms, cookies, tracking,
            analytics, or third-party services that gather data. It&apos;s just
            a frontend demo (with a publicly available API for free games) — no
            backend, no database, no funny business.
          </p>
          <p>
            Data fetched from the external API is used in real-time and not
            stored or processed in any way by NextPlay itself.
          </p>
          <h2 className='text-xl font-semibold'>2. Intellectual Property</h2>
          <p>
            The <strong>NextPlay name, logo, and custom design elements</strong>{" "}
            are original creations and are owned by me. Please{" "}
            <strong>do not copy, use, or redistribute</strong> the logo or
            design without permission.
          </p>
          <p>
            All game-related content (images, names, and artwork) displayed on
            this site is used purely for non-commercial demonstration purposes.
            All respective assets belong to their rightful owners and are not
            claimed by me.
          </p>
          <h2 className='text-xl font-semibold'>3. No Commercial Intent</h2>
          <p>
            This website is a personal portfolio project intended to showcase
            frontend development skills using technologies like React, Next.js,
            and Tailwind CSS. It is <strong>not</strong> a real store, and no
            products are being sold here.
          </p>
          <h2 className='text-xl font-semibold'>4. External Links</h2>
          <p>
            If the site includes links to other websites, those sites are not
            operated by me. I have no control over their content or privacy
            practices, and visiting them is at your own discretion.
          </p>
          <h2 className='text-xl font-semibold'>5. Contact</h2>
          <p>
            If you have any questions about this policy or want to say hi, feel
            free to reach out via my portfolio or social profiles.
          </p>
          <hr className='my-6' />
          <p className='italic text-muted-foreground'>
            Thanks for checking out NextPlay. Please respect the creative work
            that went into building this project.
          </p>
        </section>
      </div>
    </main>
  );
}
