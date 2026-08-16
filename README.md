# Inter Smart Web

Marketing site for an AI development company, built with Next.js (App Router) and Tailwind CSS.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- [React 19](https://react.dev)
- [Tailwind CSS 4](https://tailwindcss.com)
- [Framer Motion](https://motion.dev) for carousels/transitions
- [Lucide React](https://lucide.dev) for icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Project structure

```
src/
  app/
    page.js          # assembles the sections into the homepage
    layout.js
    globals.css
  components/
    Header.jsx        # nav bar + mobile hamburger menu
    Footer.jsx         # wraps FooterSection
    Button.jsx         # shared button styles
  sections/
    Hero.jsx           # hero banner with auto-advancing text/image carousel
    ServiceSection.jsx # services accordion + orbital diagram
    ProcessSection.jsx # AI development process tabs/carousel
    ProjectSection.jsx # sliding project image filmstrip
    ContactSection.jsx # contact/schedule-meeting form with validation
    FooterSection.jsx  # footer links + social icons
public/
  images/              # section illustrations/photos
  icons/                # logo + social icons
```

## Notes

- All interactive sections (`Header`, `Hero`, `ServiceSection`, `ProcessSection`, `ProjectSection`, `ContactSection`) are client components (`"use client"`).
- Section containers share a common `max-w-7xl px-6 lg:px-10` wrapper to keep left/right spacing consistent across the page.
- `AGENTS.md` documents Next.js-specific conventions this project deviates from — read it before making framework-level changes.
