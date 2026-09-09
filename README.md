# Umesh Kumar — Portfolio

Personal site for a Full-Stack Developer based in Gurugram.

**Live:** [umeshkumar.vercel.app](https://umeshkumar.vercel.app/)

## Stack

- React 18 + Vite
- Tailwind CSS
- GSAP + ScrollTrigger via `@gsap/react`

Motion lives in one place: GSAP. UI structure is React + Tailwind, with Aceternity-inspired beams, spotlight, and card glow implemented as local primitives (no second animation library).

## Run locally

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173`. `npm start` is an alias for the same command.

Production build:

```bash
npm run build
npm run preview
```

## Build logic

| Path | Role |
|---|---|
| `src/data` | All copy, links, project list, work history, and skill list. Edit content here first. |
| `src/components/layout` | Shell: navbar, footer, section wrapper with scroll reveal. |
| `src/components/sections` | Page blocks composed in `App.jsx` (Hero → Projects → Work → Skills → About → Contact). |
| `src/components/ui` | Reusable presentational pieces (beams, spotlight, cards, headings). |
| `src/animations` | GSAP scroll-reveal helper used by `Section`. |
| `src/lib` | Shared utilities (`cn`, GSAP setup, smooth scroll). |
| `src/hooks` | `useActiveSection`, `useMediaQuery`. |
| `src/assets/images` | Hero, project screenshots, tech icons. |
| `public` | Favicon, resume PDF, robots. |

`App.jsx` only composes layout and sections. It does not hold content or animation code.

## Motion rules

- Hero uses a load timeline.
- Later sections use `ScrollTrigger` once, on `[data-animate]` nodes.
- Hover glow and beams are CSS.
- `prefers-reduced-motion` skips GSAP.
- No scroll hijacking (no Locomotive / Lenis), so native scrolling and nav anchors stay intact.

Resume file: `public/UmeshKumar_Resume.pdf`.
