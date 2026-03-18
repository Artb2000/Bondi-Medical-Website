# Bondi Medical Centre Website

Public-facing website for Bondi Medical Centre.

## Production Architecture

This project is deployed in production on a separate physical Ubuntu server using:

- Docker Engine
- Docker Compose
- Caddy as reverse proxy and HTTPS termination
- A static Astro site served by a web container

Production deployment is Compose-first and intentionally isolated from all clinical and patient-data systems.

## Tech Stack

- Astro
- Tailwind CSS
- TypeScript
- HotDoc booking lightbox integration
- Google Analytics 4 integration (optional)
- Docker Compose + Caddy for production delivery

## Scope

Included:
- Informational pages
- Persistent Book Now CTA
- Embedded booking flow (HotDoc lightbox modal)
- Contact/location details and opening hours
- Docker Compose and Caddy deployment assets

Excluded:
- CMS or staff admin UI
- Contact or appointment request forms
- Patient login
- Custom backend or database features

## Routes

- `/` Home
- `/doctors` Team
- `/services` Services
- `/fees` Fees
- `/contact` Contact

## Local Development

```bash
npm install
npm run dev
```

Checks and build:

```bash
npm run check
npm run build
npm run preview
```

## Production Deployment Docs

- Ubuntu deployment runbook: `docs/deployment-ubuntu.md`
- Environment variables reference: `docs/environment-variables.md`
- Backup and rollback: `docs/backup-rollback.md`
- Validation checklist: `docs/validation-checklist.md`
- Future content updates in code: `docs/content-updates.md`

## Deployment Script

For Ubuntu server deployments, use `deploy.sh` from the server after creating environment-specific files such as `.env.staging` and `.env.production`. Example templates are committed as `.env.staging.example` and `.env.production.example`.

```bash
cp .env.staging.example .env.staging
cp .env.production.example .env.production
chmod +x deploy.sh
./deploy.sh staging main
./deploy.sh production main
```

For rollbacks on the Ubuntu server, use `rollback.sh` with a known-good tag or commit.

```bash
chmod +x rollback.sh
./rollback.sh v1.0.0 production
./rollback.sh <commit-sha> staging
```

## Security and Isolation Requirements

- Deploy only to a separate public-facing host.
- No direct network path to clinical or patient-data environments.
- No shared database, file mounts, or service dependencies with practice systems.
- Expose only ports 80 and 443 publicly.
- Keep host OS and container images updated.
