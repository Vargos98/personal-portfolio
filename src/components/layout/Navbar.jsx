import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { cn } from '@/lib/cn';
import { navLinks, sectionIds } from '@/data/nav';
import { profile } from '@/data/profile';
import { useActiveSection } from '@/hooks/useActiveSection';
import { scrollToId } from '@/lib/scrollTo';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

  const goTo = (id) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled || open ? 'border-b border-white/10 bg-black/80 backdrop-blur-md' : 'bg-transparent',
      )}
    >
      <nav className="relative z-50 mx-auto flex h-20 max-w-site items-center justify-between px-4 sm:px-6 lg:px-8">
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
          className="relative z-50 rounded-md p-2 text-neutral-300 md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </nav>

      {open ? (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black/95 md:hidden">
          <ul className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => goTo(link.id)}
                  className="text-3xl font-semibold capitalize text-neutral-200"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
