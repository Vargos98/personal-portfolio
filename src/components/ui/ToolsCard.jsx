import { useRef } from 'react';
import { featuredSkills } from '@/data/skills';
import { gsap, prefersReducedMotion, ScrollTrigger, useGSAP } from '@/lib/gsap';
import SkillMark from '@/components/ui/SkillMark';

const SPARKLES = [
  { top: '18%', left: '46%', size: 3, delay: '0s', duration: '2.2s' },
  { top: '28%', left: '54%', size: 2, delay: '0.4s', duration: '2.8s' },
  { top: '36%', left: '43%', size: 2, delay: '0.8s', duration: '2.1s' },
  { top: '22%', left: '58%', size: 1.5, delay: '1.1s', duration: '2.6s' },
  { top: '48%', left: '51%', size: 2.5, delay: '0.2s', duration: '3s' },
  { top: '58%', left: '45%', size: 2, delay: '1.4s', duration: '2.4s' },
  { top: '42%', left: '57%', size: 1.5, delay: '0.6s', duration: '2.7s' },
  { top: '64%', left: '53%', size: 2, delay: '1.8s', duration: '2.3s' },
  { top: '32%', left: '49%', size: 3, delay: '0.9s', duration: '2.5s' },
  { top: '70%', left: '47%', size: 1.5, delay: '1.2s', duration: '2.9s' },
  { top: '14%', left: '51%', size: 2, delay: '0.3s', duration: '2s' },
  { top: '76%', left: '55%', size: 2, delay: '1.6s', duration: '2.4s' },
];

export default function ToolsCard() {
  const root = useRef(null);

  useGSAP(
    () => {
      const icons = gsap.utils.toArray('[data-tool-icon]');
      if (!icons.length) return;

      gsap.set(icons, { transformOrigin: '50% 50%' });

      if (prefersReducedMotion()) {
        gsap.set(icons, { opacity: 1, y: 0, scale: 1 });
        return;
      }

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.4,
        defaults: { ease: 'power2.out' },
      });

      icons.forEach((icon) => {
        tl.to(icons, { opacity: 0.42, y: 0, scale: 1, duration: 0.18 }, '>')
          .to(icon, { opacity: 1, y: -12, scale: 1.12, duration: 0.32, ease: 'back.out(1.7)' })
          .to(icon, { y: 0, scale: 1, duration: 0.26, ease: 'power2.in' }, '+=0.06');
      });

      ScrollTrigger.create({
        trigger: root.current,
        start: 'top bottom',
        end: 'bottom top',
        onEnter: () => tl.play(),
        onLeave: () => tl.pause(),
        onEnterBack: () => tl.play(),
        onLeaveBack: () => tl.pause(),
      });
    },
    { scope: root },
  );

  return (
    <article
      ref={root}
      data-animate
      className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
    >
      <div className="relative isolate flex min-h-[15rem] items-center justify-center overflow-hidden px-4 py-8 sm:min-h-[17rem] sm:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.14),transparent_58%)]" />
        <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 overflow-hidden">
            <div className="mx-auto h-28 w-px animate-beam-fall bg-gradient-to-b from-transparent via-cyan-300 to-transparent shadow-[0_0_12px_1px_rgba(34,211,238,0.8)]" />
          </div>
          {SPARKLES.map((sparkle, index) => (
            <span
              key={index}
              className="absolute rounded-full bg-white motion-safe:animate-sparkle"
              style={{
                top: sparkle.top,
                left: sparkle.left,
                width: sparkle.size,
                height: sparkle.size,
                animationDelay: sparkle.delay,
                animationDuration: sparkle.duration,
              }}
            />
          ))}
        </div>

        <ul className="relative z-10 flex max-w-2xl flex-wrap items-center justify-center gap-2 sm:gap-3">
          {featuredSkills.map((skill) => (
            <li key={skill.id} className="cursor-default select-none">
              <div
                data-tool-icon
                title={skill.title}
                className="flex h-10 w-10 cursor-default items-center justify-center rounded-full border border-white/10 bg-[#111113] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:h-12 sm:w-12"
              >
                <SkillMark
                  skill={skill}
                  className="h-5 w-5 object-contain sm:h-6 sm:w-6"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-white/5 px-6 py-5 sm:px-7 sm:py-6">
        <h3 className="text-lg font-bold sm:text-xl">The stack I ship with</h3>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-neutral-400">
          MERN, TypeScript, and production tooling I use for Jira-integrated SaaS and scalable Node.js apps.
        </p>
      </div>
    </article>
  );
}
