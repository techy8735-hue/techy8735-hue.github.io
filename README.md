# Tejus Krishna — Portfolio

Personal portfolio for Tejus Krishna K.S., final-year B.Voc IT student. A deliberate dark editorial design with project case studies and restrained motion.

## Live websites

- **GitHub Pages:** https://techy8735-hue.github.io/ (available after GitHub Pages is enabled and the deployment finishes)
- **Lovable:** https://tejus-krishna-portfolio.lovable.app/

## Stack

React 19, TypeScript, Vite, Tailwind CSS v4, Motion for React, TanStack Router. This GitHub version is a standalone client-side app adapted from the Lovable-hosted design.

## Local development

```bash
npm install
npm run dev
npm run typecheck
npm run build
```

## Deploy to GitHub Pages

A GitHub Actions workflow builds the project on every push to `main`. In repository **Settings → Pages → Build and deployment**, set **Source: GitHub Actions**. The domain is `https://techy8735-hue.github.io/`.

The `public/404.html` redirect restores deep links to the project case-study routes under GitHub Pages.

## Content

Update CV information in `src/data/profile.ts`. Project diagrams are illustrative diagrams, not photographs of the original builds. A CV download link is not enabled until the actual PDF is added to `public/` and `profile.cvUrl` is configured.

## Design updates

This is a **separate deployment** of the Lovable site. Edits in Lovable do not automatically sync to this repository.
