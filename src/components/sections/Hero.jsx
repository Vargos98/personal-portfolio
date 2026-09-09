import { useRef } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import heroImage from '@/assets/images/heroImage.png';
import { profile } from '@/data/profile';
import { socials } from '@/data/socials';
import { gsap, prefersReducedMotion, useGSAP } from '@/lib/gsap';
import { scrollToId } from '@/lib/scrollTo';
import BackgroundBeams from '@/components/ui/BackgroundBeams';
import Container from '@/components/ui/Container';
import Spotlight from '@/components/ui/Spotlight';

const iconMap = {
  linkedin: FaLinkedin,
  github: FaGithub,
  email: HiOutlineMail,
};

export default function Hero({ ready = true }) {
  const root = useRef(null);

  useGSAP(
    () => {
      if (!ready) {
        gsap.set('[data-hero="title"] span, [data-hero="body"], [data-hero="cta"] > *', {
          opacity: 0,
          y: 20,
        });
        gsap.set('[data-hero="photo"]', { opacity: 0, x: 24 });
        return;
      }

      if (prefersReducedMotion()) {
        gsap.set('[data-hero="title"] span, [data-hero="body"], [data-hero="cta"] > *, [data-hero="photo"]', {
          opacity: 1,
          x: 0,
          y: 0,
        });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: 'power3.out', clearProps: 'transform' } });
      tl.to('[data-hero="title"] span', { y: 0, opacity: 1, stagger: 0.08, duration: 0.65 })
        .to('[data-hero="body"]', { y: 0, opacity: 1, duration: 0.55 }, '-=0.3')
        .to('[data-hero="cta"] > *', { y: 0, opacity: 1, stagger: 0.08, duration: 0.45 }, '-=0.25')
        .to('[data-hero="photo"]', { x: 0, opacity: 1, duration: 0.8 }, '-=0.7');
    },
    { scope: root, dependencies: [ready] },
  );

  return (
    <section
      id="home"
      ref={root}
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-ink pt-20"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
      <BackgroundBeams />
      <Spotlight />

      <Container className="relative z-10 grid items-center gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
        <div data-hero="copy" className="max-w-xl text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-300">
            {profile.role}
          </p>
          <h1
            data-hero="title"
            className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl"
          >
            <span className="block">{profile.headline}</span>
            <span className="gradient-text">I'm {profile.name}.</span>
          </h1>
          <p
            data-hero="body"
            className="mt-5 text-sm leading-relaxed text-neutral-400 sm:text-base"
          >
            {profile.summary}
          </p>

          <div
            data-hero="cta"
            className="mt-8 flex flex-col items-center gap-5 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start"
          >
            <div className="flex items-center gap-1">
              {socials.map((item) => {
                const Icon = iconMap[item.id];
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    target={item.id === 'email' ? undefined : '_blank'}
                    rel={item.id === 'email' ? undefined : 'noreferrer'}
                    aria-label={item.label}
                    className="rounded-full p-2 text-white transition-transform duration-200 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400"
                  >
                    <Icon size={22} />
                  </a>
                );
              })}
            </div>

            <a
              href={profile.resumePath}
              download
              className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-bold text-gray-900 transition-transform duration-200 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              Download Resume
            </a>

            <button
              type="button"
              onClick={() => scrollToId('contact')}
              className="text-sm font-semibold text-neutral-300 underline-offset-4 hover:text-white hover:underline"
            >
              Let's talk
            </button>
          </div>
        </div>

        <div data-hero="photo" className="mx-auto w-48 sm:w-64 lg:w-72">
          <div className="relative">
            <div className="absolute -inset-3 rounded-[1.6rem] bg-gradient-to-br from-indigo-500/40 via-purple-500/20 to-pink-500/40 blur-xl" />
            <img
              src={heroImage}
              alt={`${profile.name} portrait`}
              fetchPriority="high"
              className="relative z-10 w-full rounded-2xl object-cover shadow-2xl motion-safe:animate-float"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
