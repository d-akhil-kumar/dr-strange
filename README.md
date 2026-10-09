# Abhilash — UX Design Portfolio

A React + TypeScript (Vite) rebuild of the Figma Sites portfolio, responsive from 320px phones to wide desktops.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the production build
```

## Pages

| Route | Page |
| --- | --- |
| `/` | Work: intro, tabs and project cards |
| `/move-in-place` | Case study: Designing for Zero-Touch Trust |
| `/accessible-move` | Case study: Safeguarding High-Stakes Migrations |
| `/flow-deployment` | Case study: From Powerful to Practical (Nutanix Flow) |
| `/artwork`, `/resume`, `/about` | Shell pages with placeholder content |
| anything else | 404 |

## Where things live

- `src/content/*.ts`: all case-study copy and media, as typed content blocks (`types.ts`).
  Edit text, swap images, or reorder sections here. No component changes needed.
- `src/content/projects.ts`: the cards on the Work grid and the case-study registry, including the "Next Case Study" order.
- `src/components/Blocks.tsx`: renders every block type (headings, rich text, lists, images, videos, Figma prototype embeds, icon tiles, call-outs, collages, columns).
- `src/pages/`: route components. `Artwork`, `Resume` and `About` are placeholders to fill in.
- `public/assets/`: images (converted to WebP) and screen recordings (re-encoded H.264 MP4) taken from the Figma site.

Interactive prototypes are embedded live from Figma (`embed.figma.com`), so they need the Figma file to stay shared.

## Deploying

The build is a static single-page app. `public/_redirects` (Netlify) and `vercel.json` (Vercel) already rewrite every route to `index.html` so deep links work. Other hosts need the same SPA fallback.
