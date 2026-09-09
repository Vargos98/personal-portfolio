import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { profile } from '@/data/profile';
import { socials } from '@/data/socials';

const iconMap = {
  linkedin: FaLinkedin,
  github: FaGithub,
  email: HiOutlineMail,
};

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-site flex-col items-center justify-between gap-4 px-4 text-sm text-neutral-500 sm:flex-row sm:px-6 lg:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind, and GSAP.
        </p>
        <div className="flex items-center gap-4">
          {socials.map((item) => {
            const Icon = iconMap[item.id];
            return (
              <a
                key={item.id}
                href={item.href}
                target={item.id === 'email' ? undefined : '_blank'}
                rel={item.id === 'email' ? undefined : 'noreferrer'}
                aria-label={item.label}
                className="transition-colors hover:text-white"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
