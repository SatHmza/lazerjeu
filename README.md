# Lazar Jeux — redesign pitch

A full rebuild of lazarjeux.com as a pitch piece: same pages and content (laser
game, activités, galerie, menu, anniversaires, laser à vendre / Ultratag,
FAQ, contact), rebuilt with a scroll-driven, high-motion agency-site treatment.

## Stack

- **Next.js 14** (App Router) + TypeScript + Tailwind CSS
- **Lenis** for smooth scroll, driven by the GSAP ticker
- **GSAP + ScrollTrigger** for scroll timelines, pinned/sticky sections, parallax
- **split-type** for per-line/per-char text reveals
- **OGL** for the hover ripple/distortion effect on activity & gallery images
- **threejs-components** (the "tubes1" cursor from
  [this CodePen](https://codepen.io/soju22/pen/qEbdVjK)) for the landing-page
  WebGL cursor trail
- Framework-level page transitions via `app/template.tsx` (remounts a curtain-wipe
  transition on every route change — no extra router library needed)
- A real preloader: it preloads the actual hero/activity images and reports
  genuine load progress, not a fake timer

## What's where

```
app/                    routes (one folder per page, matching the current site's nav)
  page.tsx               Accueil — pinned hero, activities marquee/grid, stats, gallery teaser
  activites/              sticky-stack breakdown of all 8 activities
  galerie/                masonry grid + lightbox, ripple-distortion on featured shots
  menu/                   category nav + muted autoplay video band
  anniversaires/           birthdays / school trips / team building packages
  laser-a-vendre/          the Ultratag B2B arena-building division
  faq/                     GSAP accordion
  contact/                 info + embedded map
  layout.tsx              fonts, nav, footer, providers
  template.tsx             per-route page-transition wrapper
  globals.css
components/              Nav, Footer, Preloader, CustomCursor, TubesCursor,
                         LenisProvider, PageTransition, SplitReveal, Reveal,
                         Marquee, RippleImage
lib/
  data.ts                 all page content (adapted from the live site's copy)
  gsap.ts                  single place GSAP/ScrollTrigger get registered
```

## Media placeholders

Every photo is a seeded `picsum.photos` placeholder (`lib/data.ts` → `img()`),
and the menu page video is a public Google sample clip — both stand-ins so the
direction reads clearly without needing real assets yet. To swap in the real
venue photography/video:

1. Drop optimized WebP/AVIF files in `public/` (or your own CDN/bucket).
2. Replace the `img("seed", w, h)` calls in `lib/data.ts` with the real paths/URLs.
3. If serving from a new external domain, add it to `images.remotePatterns` in
   `next.config.mjs`.

## Running it

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build (this is what Vercel runs)
```

No environment variables are required.

## Deploying

The repo this came in is already linked to the `lazerjeu` project on Vercel —
just push to the branch Vercel is watching (typically `main`) and it deploys
automatically:

```bash
git add .
git commit -m "Rebuild lazarjeux.com pitch site"
git push
```

## Notes / things to decide before sending this to the client

- All copy is adapted from the live site — worth a proofread pass before it's
  client-facing.
- Prices on the Menu page are taken from the current site; confirm they're
  still accurate.
- The custom WebGL cursor and hover ripples are automatically disabled on
  touch devices, so mobile just gets the normal system cursor and static
  images — no extra work needed there.
