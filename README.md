# Tejus Krishna — Portfolio

A personal portfolio for Tejus Krishna K.S., a final-year B.Voc Information Technology student at Christ College, Irinjalakuda.

**Portfolio:** https://techy8735-hue.github.io/

## Overview

This website presents selected work in web development and IoT alongside technical skills, internship experience and education. It uses a dark, editorial visual system with restrained motion, responsive layouts and detailed project pages.

## Technology

- React and TypeScript
- Vite
- Tailwind CSS
- TanStack Router
- Motion for React

## Development

Requirements: Node.js 22 or later.

```bash
npm install
npm run dev
```

To verify the project:

```bash
npm run typecheck
npm run build
```

## Structure

- `src/components/site/` — portfolio sections, navigation and project illustrations
- `src/data/profile.ts` — profile details, skills, experience and projects
- `src/routes/` — homepage and project case-study routes
- `src/styles.css` — global typography and visual styles
- `public/` — static files and routing fallback

The project illustrations are concept diagrams, not photographs of completed builds.

## Deployment

Commits to the `main` branch trigger the workflow in `.github/workflows/deploy.yml`. Configure **Settings → Pages → Build and deployment → GitHub Actions** to publish the website.

Project case-study URLs use the `public/404.html` fallback to support direct navigation on GitHub Pages.

## Contact

- Email: techy8735@gmail.com
- GitHub: https://github.com/techy8735-hue
