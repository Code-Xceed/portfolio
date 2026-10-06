# Aditya Rathore — Atelier Portfolio

A single-page, full-screen portfolio built as three cinematic "screens" you move between with the
wheel, a swipe, the arrow keys, or the two in-page affordances. Everything is rendered live: one WebGL
fluid shader for the hero, a four-row marquee of self-hosted film plates for the gallery, and a
hand-built 3D monograph library for the projects archive.

**Live stack:** React 19 · Vite 8 · Tailwind CSS 4 · Three.js (WebGL) · Web Audio API
**No CMS, no backend, no database** — content lives in typed data modules and is drawn at runtime.

---

## Getting started

```bash
npm install
npm run dev      # local dev server with HMR
npm run build    # production bundle into dist/
npm run preview  # serve dist/ locally
npm run lint     # oxlint (0 errors is the gate)
```

Deploy the contents of `dist/` to any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages,
S3 + CloudFront). It is a fully static build — no server runtime, no environment variables.

---

## The three screens

`src/App.jsx` composes everything into `CinematicFullpage`, which keeps all three screens mounted and
moves between them with a GPU transform (scale + fade + blur) so no WebGL context is ever destroyed.

| # | Screen | Component | What it does |
|---|--------|-----------|--------------|
| 0 | **Hero** | `Hero.jsx` + `FluidShaderCanvas.jsx` | Full-bleed fluid-paint shader over an alpine sanctuary plate; the cursor displaces the paint. Name, editorial about copy, "Connect Me" and five social medallions. |
| 1 | **Gallery** | `GallerySection.jsx` | Two counter-drifting marquee streams of 16:9 film plates, five unique films each (disjoint, so no film is ever on screen twice at once). |
| 2 | **Projects** | `BooksShowcase.jsx` | Seven 3D cloth-bound monographs on a shader landscape. Click a volume and it flies open into a curatorial dossier with the project story, stack and links. |

### Navigation model
`CinematicFullpage` owns the only scroll surface on the site. Wheel deltas are accumulated against a
35px threshold, touch uses `dy > 50 && dy > 1.5·dx`, and keyboard supports arrows / PageUp / PageDown /
Home / End / 1–2. A 1100 ms transition lock prevents double-advance. While a monograph dossier is open
(`.bs-detail-open`) all three inputs are deliberately ignored so the reader can scroll the dossier
without being thrown to another screen.

---

## Media pipeline

| Asset | Where | Notes |
|-------|-------|-------|
| 10 gallery films | `public/gallery/videos/*.mp4` | 960×540, 60 fps, H.264 High, yuv420p, `+faststart`, **audio stripped**, ~23 MB total. |
| Original masters | `source-videos/` | Git-ignored. The 540p/60 files above are transcoded from these. |
| Atlas paintings, shader plates | `public/*.jpg`, `public/*.png` | Served as-is. |
| Audio | `public/*.ogg`, `*.mp3` | One ambient loop + five interaction SFX, mixed by `src/lib/soundManager.js`. |

Re-encoding a new film to match the existing profile:

```bash
ffmpeg -i input.mov \
  -vf "scale=960:540:flags=lanczos" -r 60 \
  -c:v libx264 -preset slow -crf 24 -profile:v high -pix_fmt yuv420p \
  -colorspace bt709 -color_primaries bt709 -color_trc bt709 \
  -movflags +faststart -an \
  public/gallery/videos/Name.mp4
```

### The loading contract
`AtelierLoader` runs `preloadAllSiteAssets()` before the site is revealed. That step fetches **every**
gallery film fully into RAM as a Blob and GPU-decodes every critical texture, then hands the gallery
`blob:` URLs. This is what makes 20 simultaneous `<video>` elements play without a single network
request or dropped frame once you arrive.

Two rules keep it honest:
1. `GalleryVideoCard` attaches **no `src` at all** until its Blob exists, so gallery cards never race
   the loader for bandwidth mid-load.
2. If a single asset fails, the loader still resolves (30 s safety timeout) and galleries fall back to
   the direct network URL via `areVideosPreloaded()`.

If you add films, register them in `CRITICAL_PRELOAD_VIDEOS` **and** in
`src/data/galleryData.js`. Keep the two streams disjoint.

---

## Content

All copy is data, not JSX:

- `src/data/monographsData.js` — the seven projects: title, subtitle, highlights, long + mobile
  descriptions, tech tags, links, chapter list, palette, and the canvas painters that draw each
  volume's cover, spine and back board. This file is the single source of truth for the Projects
  screen.
- `src/data/galleryData.js` — the ten gallery films: title, kicker, caption, video path, frame border.
- `src/lib/assetPreloader.js` — `CRITICAL_PRELOAD_ASSETS` / `CRITICAL_PRELOAD_VIDEOS`.

`src/data/worksData.js` is kept out of the build (unused leftover data).

---

## Responsiveness

Two layout modes exist for the Projects screen, chosen from one place so the 3D placement and the DOM
dossier can never disagree:

- **Stacked** (`--stack`): portrait phones and tablets. The monograph occupies the upper stage and the
  dossier becomes a full-width bottom sheet that scrolls as one unit, with a soft fade where more copy
  continues below and `env(safe-area-inset-bottom)` padding for home-bar devices.
- **Split**: wide landscape. The monograph holds the left column, the dossier the right, and the
  dossier scrolls internally if the window is short.

The monograph's on-screen size is computed from a projection model calibrated against a live `Box3`
projection of the open volume, so it always fits between the header seals and the dossier's real top
edge — no clipping, at any viewport.

---

## Deployment checklist

- [ ] **Replace `https://YOUR-DOMAIN.example`** in `index.html`, `public/robots.txt` and
      `public/sitemap.xml` with the production origin. (Listed as a `TODO(deploy)` comment in each.)
- [ ] Point `og:image` at a real 1200×630 asset — `public/og-image.jpg` already ships one.
- [ ] Confirm long-cache headers on `/gallery/videos/*` and `/assets/*` (they are content-hashed).
- [ ] Compress `public/*.jpg|png` if the host does not do it for you; the shader plates are the
      heaviest first-paint assets.
- [ ] Run `npm run lint` and `npm run build`; both must exit 0.
- [ ] Smoke-test the three screens at ~390×844, 768×1024, 1280×800 and a landscape phone.

## Accessibility notes

- Scroll, touch, swipe and keyboard all reach every screen; interactive targets are ≥44 px.
- `prefers-reduced-motion` stops the marquees, sheen sweeps, shimmer and equaliser pulses, and the 3D
  scenes drop their idle drift.
- The native cursor is suppressed only after `CustomCursor` mounts (`html.has-custom-cursor`), so a
  scripting failure never leaves a visitor without a pointer.
- `<noscript>` in `index.html` carries the real name, project list and contact links.
