import { useRef } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { profile } from '@/data/profile';
import { featuredSkills } from '@/data/skills';
import { socials } from '@/data/socials';
import { gsap, prefersReducedMotion, useGSAP } from '@/lib/gsap';
import { scrollToId } from '@/lib/scrollTo';
import BackgroundBeams from '@/components/ui/BackgroundBeams';
import SkillMark from '@/components/ui/SkillMark';
import Spotlight from '@/components/ui/Spotlight';

const iconMap = {
  linkedin: FaLinkedin,
  github: FaGithub,
  email: HiOutlineMail,
};

const highlights = [
  { label: 'Experience', value: '3+ years' },
  { label: 'Based in', value: 'Gurugram' },
  { label: 'Focus', value: 'MERN & Jira SaaS' },
  { label: 'Currently', value: 'Gudakesa' },
];

const heroStack = featuredSkills.slice(0, 8);

export default function Hero({ ready = true }) {
  const root = useRef(null);

  useGSAP(
    () => {
      const pieces =
        '[data-hero="title"] span, [data-hero="body"], [data-hero="stats"], [data-hero="cta"] > *, [data-hero="stack"]';

      if (!ready) {
        gsap.set(pieces, { opacity: 0, y: 20 });
        return;
      }

      if (prefersReducedMotion()) {
        gsap.set(pieces, { opacity: 1, y: 0 });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: 'power3.out', clearProps: 'transform' } });
      tl.to('[data-hero="title"] span', { y: 0, opacity: 1, stagger: 0.08, duration: 0.65 })
        .to('[data-hero="body"]', { y: 0, opacity: 1, duration: 0.5 }, '-=0.28')
        .to('[data-hero="stats"]', { y: 0, opacity: 1, duration: 0.5 }, '-=0.28')
        .to('[data-hero="cta"] > *', { y: 0, opacity: 1, stagger: 0.08, duration: 0.4 }, '-=0.22')
        .to('[data-hero="stack"]', { y: 0, opacity: 1, duration: 0.45 }, '-=0.2');
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
      <Spotlight className="left-[72%] top-1/2 hidden lg:block" />
      <p
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 select-none font-extrabold leading-none text-white/[0.035] lg:block lg:text-[18vw]"
      >
        DEV
      </p>

      <div className="relative z-10 w-full px-4 py-12 sm:px-6 lg:px-10 xl:px-16">
        <div data-hero="copy" className="w-full lg:w-[68%]">
          <div className="flex items-center gap-4">
            <p className="shrink-0 text-sm font-semibold uppercase tracking-[0.22em] text-purple-300">
              {profile.role}
            </p>
            <span className="hidden h-px flex-1 bg-gradient-to-r from-purple-400/60 via-fuchsia-400/25 to-transparent sm:block" />
          </div>

          <h1
            data-hero="title"
            className="mt-5 text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.25rem] xl:leading-[1.05]"
          >
            <span className="block">{profile.headline}</span>
            <span className="gradient-text">I'm {profile.name}.</span>
          </h1>

          <p
            data-hero="body"
            className="mt-6 max-w-2xl text-sm leading-relaxed text-neutral-400 sm:text-base lg:text-lg"
          >
            {profile.summary}
          </p>

          <dl
            data-hero="stats"
            className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5"
              >
                <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                  {item.label}
                </dt>
                <dd className="mt-1.5 text-sm font-semibold text-white sm:text-base">{item.value}</dd>
              </div>
            ))}
          </dl>

          <div
            data-hero="cta"
            className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:flex-wrap sm:items-center"
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

          <div data-hero="stack" className="mt-10 flex flex-wrap gap-2.5">
            {heroStack.map((skill) => (
              <span
                key={skill.id}
                className="inline-flex cursor-default items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-neutral-200"
              >
                <SkillMark skill={skill} className="h-3.5 w-3.5" />
                {skill.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
