# Altileo — Site Web

Site Next.js 14 + Tailwind CSS pour [altileo.com](https://altileo.com).

## Stack

- **Next.js 14** (App Router) + React 18 + TypeScript 5.6
- **Tailwind CSS 3.4**
- **Geist Sans + Geist Mono** (auto-hosted via `geist` package)
- **Resend** for email (optional)
- **Vercel** for hosting

## Quick start

```bash
npm install
cp .env.example .env.local   # then edit .env.local with your keys
npm run dev                  # http://localhost:3000
```

## Build verification

```bash
npm run build                # full production build
npm run type-check           # typescript only
npm run lint                 # ESLint
```

This project compiles cleanly with `npm run build` — verified before shipping.

## Project layout

```
src/
├── app/                       Next.js App Router
│   ├── layout.tsx             Root layout, fonts, SEO
│   ├── page.tsx               Home page (composes sections)
│   ├── globals.css            Tailwind + utilities
│   ├── sitemap.ts             Dynamic sitemap.xml
│   ├── robots.ts              Dynamic robots.txt
│   ├── not-found.tsx          404 page
│   ├── legal/page.tsx         Mentions légales
│   └── api/
│       ├── audit-request/     Audit form endpoint
│       └── bacs-diagnostic/   BACS lead capture endpoint
│
├── components/
│   ├── sections/              Page sections (one per file)
│   └── ui/                    Primitives (Button, Container, Logo)
│
└── lib/
    ├── cn.ts                  Class name helper
    └── content.ts             ⭐ All site copy lives here

public/
├── screenshots/               Real product screenshots
└── og/                        Open Graph image (add altileo-og.png 1200×630)
```

## Editing content

**Almost all copy edits happen in one file:**
[`src/lib/content.ts`](./src/lib/content.ts)

Search for `TODO` comments to find placeholders awaiting real data:

- Cas client (Ringus): annual savings, % reduction, ROI, pavillon, quote
- PCM partner name + permission
- 4 founder names, roles, bios, photos
- Legal info (SIREN, address)

## Deploy to Vercel from VPS

```bash
# On your VPS, after extracting the tar
cd altileo
npm install
npm run build                 # verify it compiles

# Initialize git
git init
git add .
git commit -m "feat: nouveau site Altileo v1"
git branch -M main

# Push to GitHub (create empty repo first)
git remote add origin https://github.com/YOUR-ORG/altileo.git
git push -u origin main
```

Then on [vercel.com/new](https://vercel.com/new):
1. Import the GitHub repo
2. Vercel detects Next.js automatically — leave all settings as default
3. Click Deploy

## Environment variables (Vercel)

After first deploy, go to **Settings → Environment Variables** and add:

| Key | Required | Purpose |
|---|---|---|
| `ALTILEO_LEAD_EMAIL` | Yes | Where leads are sent (e.g. `contact@altileo.com`) |
| `NEXT_PUBLIC_SITE_URL` | Yes | Canonical site URL (e.g. `https://altileo.com`) |
| `RESEND_API_KEY` | No | For email sending. Free tier at [resend.com](https://resend.com) |
| `LEAD_WEBHOOK_URL` | No | Slack/HubSpot webhook for instant notifications |

After adding env vars, **Deployments → ⋯ → Redeploy** so they take effect.

Without `RESEND_API_KEY`, leads are logged to Vercel Logs (Logs tab) — you can still capture them, just not via email.

## Performance

- Geist auto-hosted (no Google Fonts CDN call)
- Images: AVIF/WebP automatic via `next/image`
- Tailwind purged (~12KB CSS)
- Home page is statically generated (SSG)
- Lighthouse target: 95+ on all axes

## Accessibility

- All decorative elements have `aria-hidden`
- Images have descriptive `alt` text
- Form inputs have associated `<label>` elements
- WCAG AA contrast ratios on body text
- Full keyboard navigation with visible focus states

## Useful commands

```bash
npm run dev          # dev server (port 3000)
npm run build        # production build
npm run start        # serve production build
npm run lint         # ESLint
npm run type-check   # TypeScript validation
```
