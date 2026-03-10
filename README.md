# Bondi Medical Centre Website

Public-facing website for Bondi Medical Centre.

This project is built as a lightweight content-only frontend with:
- Astro
- Tailwind CSS
- TypeScript
- HotDoc booking lightbox integration
- GA4 support via Google tag
- Docker Compose deployment with Caddy HTTPS reverse proxy

## Scope

Included:
- Informational pages
- Persistent `Book Now` CTA
- Embedded booking flow (HotDoc lightbox modal)
- Contact/location details and opening hours
- Docker + Caddy deployment assets

Excluded:
- CMS / staff admin UI
- Contact or appointment request forms
- Patient login
- Custom backend or database features

## Routes

- `/` Home
- `/doctors` Doctors / Team
- `/services` Services
- `/appointments-fees` Appointments & Fees
- `/contact` Contact / Location

## Local Development

```bash
npm install
npm run dev
```

Checks and production build:

```bash
npm run check
npm run build
npm run preview
```

## Environment Variables

Copy `.env.example` to `.env` and set values.

- `PUBLIC_HOTDOC_EMBED_URL`: HotDoc booking URL used by the lightbox iframe.
- `PUBLIC_GA_MEASUREMENT_ID`: GA4 property ID (for example `G-XXXXXXXXXX`).
- `SITE_DOMAIN`: Public domain for Caddy virtual host.
- `LETSENCRYPT_EMAIL`: Email used for TLS certificate registration.

Note: `PUBLIC_*` values are compiled into the static site at build time.

## Deployment (Ubuntu 24.04 + Docker Compose)

See `docs/deployment-ubuntu.md` for full instructions.

Quick start:

```bash
cp .env.example .env
docker compose build
docker compose up -d
```

## Content Updates in Code

Primary content placeholders are in:
- `src/config/site.ts`

Page structure/content blocks are in:
- `src/pages/index.astro`
- `src/pages/doctors.astro`
- `src/pages/services.astro`
- `src/pages/appointments-fees.astro`
- `src/pages/contact.astro`

Images should be placed in `public/images/`.

Content handoff template is in `docs/content-template.md`.

## Security and Isolation Requirements

- Deploy only to a separate public-facing host.
- Do not connect this stack to clinical or patient-data environments.
- Expose only `80` and `443` on the public server.
- Keep host OS and container images updated.
