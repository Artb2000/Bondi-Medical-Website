# Environment Variables (Production)

Set these values in `.env` at the repository root before running Docker Compose.

## Required

- `PUBLIC_HOTDOC_EMBED_URL`
  - Purpose: Booking iframe URL used by the Book Now modal.
  - Example: `https://www.hotdoc.com.au/medical-centres/...`

- `SITE_DOMAIN`
  - Purpose: Public domain Caddy listens on and secures with HTTPS.
  - Example: `www.example.com`

- `SITE_URL`
  - Purpose: Canonical site URL used by Astro at build time for sitemap/canonical output.
  - Example: `https://www.example.com`

- `LETSENCRYPT_EMAIL`
  - Purpose: Contact email used by Caddy/Let's Encrypt certificate operations.
  - Example: `ops@example.com`

## Optional

- `PUBLIC_GA_MEASUREMENT_ID`
  - Purpose: Enables Google Analytics 4 when set.
  - Example: `G-XXXXXXXXXX`
  - Behavior when blank: GA script is not injected.

## Example `.env`

```dotenv
PUBLIC_HOTDOC_EMBED_URL=https://www.hotdoc.com.au/medical-centres
PUBLIC_GA_MEASUREMENT_ID=
SITE_DOMAIN=bondimedical.example.com
SITE_URL=https://bondimedical.example.com
LETSENCRYPT_EMAIL=ops@example.com
```

## Notes

- `PUBLIC_*` variables are compiled into static site assets at build time.
- After changing env values, rebuild and redeploy:

```bash
docker compose build
docker compose up -d
```
