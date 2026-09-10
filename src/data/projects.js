import fiesta from '@/assets/images/projects/FiestaLaBlanc.png';
import reactEssentials from '@/assets/images/projects/React-Essentials.png';
import fashion from '@/assets/images/projects/fashion-profile.png';
import premier from '@/assets/images/projects/premier.png';
import trendline from '@/assets/images/projects/trendline.png';
import chayaChitra from '@/assets/images/projects/TheChayaChitra.png';

export const projects = [
  {
    id: 'fiesta-la-blanc',
    title: 'Fiesta La Blanc',
    featured: true,
    image: fiesta,
    demo: 'https://restaurant-react-app-rust.vercel.app/',
    code: 'https://github.com/Vargos98/restaurant-react-app',
    stack: ['React.js'],
    description:
      'Immersive restaurant website crafted with React.js for a seamless browsing experience. Explore the menu and the ambiance through visuals and dynamic layouts.',
  },
  {
    id: 'react-essentials',
    title: 'React Essentials',
    featured: false,
    image: reactEssentials,
    demo: 'https://react-essentials-rosy.vercel.app/',
    code: 'https://github.com/Vargos98/react-essentials',
    stack: ['React 19', 'Vite', 'Tailwind CSS', 'GSAP', 'REST APIs', 'Vercel'],
    description:
      'Core React taught properly — components, hooks, data fetching, and a React 19 track loaded from a live API.',
  },
  {
    id: 'fashion-week',
    title: 'Fashion Week',
    featured: false,
    image: fashion,
    demo: 'https://dribble-fashion-week.vercel.app/',
    code: 'https://github.com/Vargos98/profile-page/tree/main',
    stack: ['HTML', 'CSS', 'CSS Grid'],
    description:
      'Dribbble design recreation using HTML and CSS Grid. Practiced responsive layout and visual polish from a production-style mock.',
  },
  {
    id: 'premier',
    title: 'Premier',
    featured: false,
    image: premier,
    demo: 'https://premier-website-beta.vercel.app/',
    code: 'https://github.com/Vargos98/Premier-website',
    stack: ['HTML', 'CSS', 'Flexbox'],
    description:
      'Pinterest and Behance inspired landing page built with HTML, CSS, and Flexbox, focused on responsive visual layout.',
  },
  {
    id: 'trendline',
    title: 'Trendline',
    featured: false,
    image: trendline,
    demo: 'https://trendline-dribble.vercel.app/',
    code: 'https://github.com/Vargos98/Trendline-dribble',
    stack: ['HTML', 'CSS', 'Flexbox'],
    description:
      'Dribbble recreation using HTML, CSS, and Flexbox to practice production-quality spacing, type, and responsive structure.',
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
