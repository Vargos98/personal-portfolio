import fiesta from '@/assets/images/projects/FiestaLaBlanc.png';
import reactEssentials from '@/assets/images/projects/React-Essentials.png';
import sundown from '@/assets/images/projects/SundownStudio.png';
import premier from '@/assets/images/projects/premier.png';
import ohmegal from '@/assets/images/projects/OhMegal.png';
import chayaChitra from '@/assets/images/projects/TheChayaChitra.png';

export const projects = [
  {
    id: 'fiesta-la-blanc',
    title: 'Fiesta La Blanc',
    featured: true,
    image: fiesta,
    demo: 'https://restaurant-react-app-rust.vercel.app/',
    code: 'https://github.com/Vargos98/restaurant-react-app',
    stack: ['React.js', 'Express.js', 'Prisma', 'PostgreSQL', 'JWT', 'GSAP'],
    description:
      'Fine-dining site with a live Express API — reservations, newsletter, and menu from the database, plus an admin desk.',
  },
  {
    id: 'react-essentials',
    title: 'React Essentials',
    featured: false,
    image: reactEssentials,
    demo: 'https://react-essentials-rosy.vercel.app/',
    code: 'https://github.com/Vargos98/react-essentials',
    stack: ['React 19', 'Vite', 'Tailwind CSS', 'GSAP', 'Aceternity UI', 'REST APIs'],
    description:
      'Core React taught properly — components, hooks, data fetching, and a React 19 track loaded from a live API.',
  },
  {
    id: 'sundown-studio',
    title: 'Sundown Studio',
    featured: false,
    image: sundown,
    demo: 'https://sundown-studio-puce.vercel.app/',
    code: 'https://github.com/Vargos98/Sundown-website',
    stack: ['React 19', 'Vite', 'GSAP', 'Lenis', 'React Router', 'CSS'],
    description:
      'Studio recreation in React 19 with GSAP, Lenis smooth scroll, and routed Work, Studio, and Contact pages.',
  },
  {
    id: 'premier',
    title: 'Premier',
    featured: false,
    image: premier,
    demo: 'https://premier-website-beta.vercel.app/',
    code: 'https://github.com/Vargos98/Premier-website',
    stack: ['React 19', 'Vite', 'GSAP', 'Lenis', 'React Router', 'CSS'],
    description:
      'Model management site in React 19 with GSAP, Lenis smooth scroll, and routed Models, Talent, and Agency pages.',
  },
  {
    id: 'ohmegal',
    title: 'OhMegal',
    featured: false,
    image: ohmegal,
    demo: 'https://oohmyegal.onrender.com/',
    code: 'https://github.com/Vargos98/OhMegal',
    stack: ['Node.js', 'Express.js', 'Socket.IO', 'WebRTC', 'Tailwind CSS', 'Aceternity UI'],
    description:
      'Random one-to-one text and video chat — Socket.IO matching and WebRTC peer-to-peer calls, with no accounts.',
  },
  {
    id: 'chaya-chitra',
    title: 'The Chaya Chitra',
    featured: true,
    image: chayaChitra,
    demo: 'https://the-chaya-chitra.vercel.app/',
    code: 'https://github.com/Vargos98/The-Chaya-Chitra',
    stack: ['HTML', 'CSS', 'jQuery'],
    description:
      'Photography studio site with a gallery-first layout. Showcases services, visuals, and a contact path for booking.',
  },
];
