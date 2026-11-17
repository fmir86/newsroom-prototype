# Newsroom Prototype

Single-page newsroom prototype: a news grid, a LinkedIn posts carousel and a webinars carousel, built with Next.js 15 (App Router), React 18, Tailwind CSS 4 and shadcn/ui components. All content is placeholder data defined in the components; there is no backend and no environment variables are needed.

## Requirements

- Node.js 20 or newer
- npm (the repo ships a `package-lock.json`)

## Getting started

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server on port 3000 |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint (`next/core-web-vitals` + `next/typescript`) |
| `npx tsc --noEmit` | Type check |

`next.config.mjs` skips lint and type errors during `next build`, so run `npm run lint` and `npx tsc --noEmit` to check them.

## Layout

- `app/page.tsx`: the page, composed from the components below
- `components/news-grid.tsx`, `components/linkedin-carousel.tsx`, `components/webinars-carousel.tsx`: the three sections and their sample data
- `components/ui/`: shadcn/ui primitives
- `public/`: sample images and logos
