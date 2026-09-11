import { FaAws, FaRobot } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';
import {
  SiTypescript,
  SiRedux,
  SiMui,
  SiAntdesign,
  SiPostgresql,
  SiDocker,
  SiPostman,
  SiJira,
  SiConfluence,
  SiGooglechrome,
  SiTurborepo,
  // SiKubernetes,
  // SiPrometheus,
  // SiGrafana,
  SiSocketdotio,
  SiGithubactions,
  SiAtlassian,
  SiReact,
  SiExpress,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiGithub,
  SiVercel,
  SiTailwindcss,
  SiJquery,
  SiOpenjdk,
  SiCplusplus,
  SiVite,
  SiGreensock,
  SiReactrouter,
} from 'react-icons/si';
import zustand from '@/assets/images/tech/zustand.svg';

export const skills = [
  { id: 'html', title: 'HTML', Icon: SiHtml5, color: '#E34F26', group: 'frontend' },
  { id: 'css', title: 'CSS', Icon: SiCss, color: '#1572B6', group: 'frontend' },
  { id: 'javascript', title: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E', group: 'frontend' },
  { id: 'typescript', title: 'TypeScript', Icon: SiTypescript, color: '#3178C6', group: 'frontend' },
  { id: 'react', title: 'React', Icon: SiReact, color: '#61DAFB', group: 'frontend' },
  { id: 'react-native', title: 'React Native', Icon: SiReact, color: '#61DAFB', group: 'frontend' },
  { id: 'redux', title: 'Redux', Icon: SiRedux, color: '#764ABC', group: 'frontend' },
  { id: 'zustand', title: 'Zustand', src: zustand, color: '#F59E0B', group: 'frontend' },
  { id: 'tailwind', title: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4', group: 'frontend' },
  { id: 'mui', title: 'Material UI', Icon: SiMui, color: '#007FFF', group: 'frontend' },
  { id: 'antd', title: 'Ant Design', Icon: SiAntdesign, color: '#0170FE', group: 'frontend' },
  { id: 'atlaskit', title: 'Atlaskit', Icon: SiAtlassian, color: '#2684FF', group: 'frontend' },
  { id: 'jquery', title: 'jQuery', Icon: SiJquery, color: '#0769AD', group: 'frontend', hidden: true },
  { id: 'vite', title: 'Vite', Icon: SiVite, color: '#646CFF', group: 'devops', hidden: true },
  { id: 'gsap', title: 'GSAP', Icon: SiGreensock, color: '#88CE02', group: 'frontend', hidden: true },
  { id: 'lenis', title: 'Lenis', group: 'frontend', hidden: true },
  { id: 'react-router', title: 'React Router', Icon: SiReactrouter, color: '#CA4245', group: 'frontend', hidden: true },
  { id: 'prisma', title: 'Prisma', group: 'backend', hidden: true },
  { id: 'jwt', title: 'JWT', group: 'backend', hidden: true },
  { id: 'node', title: 'Node.js', Icon: SiNodedotjs, color: '#5FA04E', group: 'backend' },
  { id: 'express', title: 'Express.js', Icon: SiExpress, color: '#FFFFFF', group: 'backend' },
  { id: 'mongo', title: 'MongoDB', Icon: SiMongodb, color: '#47A248', group: 'backend' },
  { id: 'postgres', title: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1', group: 'backend' },
  { id: 'rest', title: 'REST APIs', Icon: TbApi, color: '#38BDF8', group: 'backend' },
  { id: 'socketio', title: 'Socket.IO', Icon: SiSocketdotio, color: '#FFFFFF', group: 'backend' },
  { id: 'java', title: 'Java', Icon: SiOpenjdk, color: '#ED8B00', group: 'languages' },
  { id: 'cpp', title: 'C++', Icon: SiCplusplus, color: '#00599C', group: 'languages' },
  { id: 'github', title: 'Git/GitHub', Icon: SiGithub, color: '#FFFFFF', group: 'devops' },
  { id: 'turborepo', title: 'Turborepo', Icon: SiTurborepo, color: '#EF4444', group: 'devops' },
  { id: 'docker', title: 'Docker', Icon: SiDocker, color: '#2496ED', group: 'devops' },
  { id: 'cicd', title: 'CI/CD', Icon: SiGithubactions, color: '#2088FF', group: 'devops' },
  { id: 'aws', title: 'AWS', Icon: FaAws, color: '#FF9900', group: 'devops' },
  { id: 'postman', title: 'Postman', Icon: SiPostman, color: '#FF6C37', group: 'devops' },
  { id: 'forge', title: 'Forge CLI', Icon: SiAtlassian, color: '#0052CC', group: 'devops' },
  { id: 'jira', title: 'Jira', Icon: SiJira, color: '#1868DB', group: 'devops' },
  { id: 'confluence', title: 'Confluence', Icon: SiConfluence, color: '#2684FF', group: 'devops' },
  { id: 'devtools', title: 'Chrome DevTools', Icon: SiGooglechrome, color: '#4285F4', group: 'devops' },
  // { id: 'kubernetes', title: 'Kubernetes', Icon: SiKubernetes, color: '#326CE5', group: 'devops' },
  // { id: 'prometheus', title: 'Prometheus', Icon: SiPrometheus, color: '#E6522C', group: 'devops' },
  // { id: 'grafana', title: 'Grafana', Icon: SiGrafana, color: '#F46800', group: 'devops' },
  { id: 'vercel', title: 'Vercel', Icon: SiVercel, color: '#FFFFFF', group: 'devops' },
  { id: 'llm', title: 'LLM Integration', Icon: FaRobot, color: '#A855F7', group: 'ai' },
];

const visible = (group) =>
  skills.filter((skill) => skill.group === group && !skill.hidden);

export const skillGroups = [
  { id: 'frontend', title: 'Frontend', items: visible('frontend') },
  { id: 'backend', title: 'Backend', items: visible('backend') },
  { id: 'devops', title: 'DevOps & tools', items: visible('devops') },
  // { id: 'languages', title: 'Languages', items: visible('languages') },
  { id: 'ai', title: 'AI/ML', items: visible('ai') },
];

export const featuredSkills = [
  'react',
  'typescript',
  'javascript',
  'tailwind',
  'node',
  'express',
  'mongo',
  'postgres',
  'docker',
  'redux',
  'aws',
  'jira',
]
  .map((id) => skills.find((skill) => skill.id === id))
  .filter(Boolean);

export const STACK_ALIASES = {
  'React.js': 'react',
  'React 19': 'react',
  'Express.js': 'express',
  Prisma: 'prisma',
  JWT: 'jwt',
  PostgreSQL: 'postgres',
  HTML: 'html',
  CSS: 'css',
  'CSS Grid': 'css',
  Flexbox: 'css',
  jQuery: 'jquery',
  JavaScript: 'javascript',
  'Tailwind CSS': 'tailwind',
  GSAP: 'gsap',
  Vite: 'vite',
  'REST APIs': 'rest',
  Vercel: 'vercel',
  Lenis: 'lenis',
  'React Router': 'react-router',
};

export function skillFromStackLabel(label) {
  const id = STACK_ALIASES[label] || label.toLowerCase();
  return skills.find((skill) => skill.id === id) || { title: label };
}
