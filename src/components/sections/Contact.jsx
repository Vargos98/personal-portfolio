import { profile } from '@/data/profile';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Spotlight from '@/components/ui/Spotlight';
import Section from '@/components/layout/Section';

const FORM_ENDPOINT = 'https://getform.io/f/94df8ff0-a64f-456b-800d-19f62720c52e';

export default function Contact() {
  const details = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { label: 'Location', value: profile.location },
  ];

  return (
    <Section id="contact" className="overflow-hidden bg-gradient-to-b from-ink to-ink-muted">
      <Spotlight className="opacity-70" />
      <Container className="relative">
        <SectionHeading
          title="Contact"
          description="Wanna chat? Hit me up, I'm ready to help."
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
          <ul data-animate className="space-y-4">
            {details.map((item) => (
              <li key={item.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-purple-300">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-1 block text-sm text-white hover:text-purple-200 sm:text-base"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-1 text-sm text-white sm:text-base">{item.value}</p>
                )}
              </li>
            ))}
          </ul>

          <form
            data-animate
            action={FORM_ENDPOINT}
            method="POST"
            className="flex w-full flex-col"
          >
            <label className="sr-only" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              autoComplete="name"
              required
              className="rounded-md border border-white/20 bg-transparent p-3 text-white outline-none transition-colors focus:border-purple-400"
            />

            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              autoComplete="email"
              required
              className="my-4 rounded-md border border-white/20 bg-transparent p-3 text-white outline-none transition-colors focus:border-purple-400"
            />

            <label className="sr-only" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              rows="8"
              required
              className="resize-y rounded-md border border-white/20 bg-transparent p-3 text-white outline-none transition-colors focus:border-purple-400"
            />

            <button
              type="submit"
              className="mx-auto mt-8 rounded-md bg-gradient-to-b from-yellow-500 to-orange-500 px-6 py-3 font-bold text-black transition-transform duration-200 hover:scale-[1.03] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300"
            >
              Let's chat
            </button>
          </form>
        </div>
      </Container>
    </Section>
  );
}
