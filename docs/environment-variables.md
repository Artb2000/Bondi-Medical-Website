# Environment Variables

Set these values in the environment file used for deployment, such as `.env`, `.env.staging`, or `.env.production`.

## Required

- `PUBLIC_HOTDOC_EMBED_URL`
  - Purpose: Booking iframe URL used by the Book Now modal.
  - Example: `https://www.hotdoc.com.au/medical-centres/...`

- `SITE_DOMAIN`
  - Purpose: Public domain Caddy listens on and secures with HTTPS.
  - Example: `www.bondimedicalcentre.com.au`

- `SITE_URL`
  - Purpose: Canonical site URL used by Astro at build time for sitemap/canonical output.
  - Example: `https://www.bondimedicalcentre.com.au`

- `LETSENCRYPT_EMAIL`
  - Purpose: Contact email used by Caddy/Let's Encrypt certificate operations.
  - Example: `artb2000@gmail.com`

## Optional

- `PUBLIC_GA_MEASUREMENT_ID`
  - Purpose: Enables Google Analytics 4 when set.
  - Example: `G-XXXXXXXXXX`
  - Behavior when blank: GA script is not injected.

## Example `.env.production`

```dotenv
PUBLIC_HOTDOC_EMBED_URL=https://www.hotdoc.com.au/medical-centres
PUBLIC_GA_MEASUREMENT_ID=
SITE_DOMAIN=www.bondimedicalcentre.com.au
SITE_URL=https://www.bondimedicalcentre.com.au
LETSENCRYPT_EMAIL=artb2000@gmail.com
```

## Example `.env.staging`

```dotenv
PUBLIC_HOTDOC_EMBED_URL=https://www.hotdoc.com.au/medical-centres
PUBLIC_GA_MEASUREMENT_ID=
SITE_DOMAIN=staging.ptload.com.au
SITE_URL=https://staging.ptload.com.au
LETSENCRYPT_EMAIL=artb2000@gmail.com
```

## Notes

- `PUBLIC_*` variables are compiled into static site assets at build time.
- After changing env values, rebuild and redeploy:

```bash
docker compose build
docker compose up -d
```
