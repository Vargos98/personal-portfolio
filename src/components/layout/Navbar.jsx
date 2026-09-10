import { useEffect, useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { cn } from '@/lib/cn';
import { navLinks, sectionIds } from '@/data/nav';
import { profile } from '@/data/profile';
import { useActiveSection } from '@/hooks/useActiveSection';
import { gsap, prefersReducedMotion, useGSAP } from '@/lib/gsap';
import { scrollToId } from '@/lib/scrollTo';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const overlayRef = useRef(null);
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px)');
    const onChange = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  useGSAP(
    () => {
      if (!open) return;

      const links = overlayRef.current?.querySelectorAll('[data-mobile-link]');
      if (!links?.length) return;

      if (prefersReducedMotion()) {
        gsap.set(links, { y: 0, opacity: 1 });
        return;
      }

      gsap.fromTo(
        links,
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.45, delay: 0.18, ease: 'power3.out' },
      );
    },
    { dependencies: [open], scope: overlayRef },
  );

  const goTo = (id) => {
    setOpen(false);
    window.setTimeout(() => scrollToId(id), open ? 280 : 0);
  };

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-[110] transition-colors duration-300',
          open
            ? 'bg-transparent'
            : scrolled
              ? 'bg-black/80 backdrop-blur-md'
              : 'bg-transparent',
        )}
      >
        <nav className="mx-auto flex h-20 max-w-site items-center justify-between px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => goTo('home')}
            className="text-lg font-extrabold tracking-tight text-white transition-transform duration-200 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400 sm:text-2xl"
          >
            {profile.brand}
          </button>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => goTo(link.id)}
                  className={cn(
                    'rounded-full px-2 py-2 text-xs font-medium capitalize transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400 lg:px-3 lg:text-sm',
                    activeId === link.id
                      ? 'text-white'
                      : 'text-neutral-400 hover:text-white',
                  )}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="rounded-md p-2 text-white md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </nav>
      </header>

      <div
        ref={overlayRef}
        className={cn(
          'fixed inset-0 z-[100] flex h-[100dvh] w-full flex-col justify-center bg-ink transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden',
          open ? 'translate-x-0' : 'pointer-events-none translate-x-full',
        )}
        aria-hidden={!open}
      >
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute right-0 top-1/3 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />

        <ul className="relative z-10 flex flex-col items-center gap-6 px-6 pt-8">
          {navLinks.map((link) => (
            <li key={link.id} data-mobile-link>
              <button
                type="button"
                onClick={() => goTo(link.id)}
                className={cn(
                  'text-4xl font-bold capitalize tracking-tight transition-colors sm:text-5xl',
                  activeId === link.id ? 'gradient-text' : 'text-white',
                )}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
