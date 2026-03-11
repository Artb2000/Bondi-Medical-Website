# IT Go-Live Runbook (Ubuntu + Docker Compose + Caddy)

Use this runbook for production cutover on the separate public Ubuntu server.

## 1. Preconditions

- Separate physical Ubuntu host is provisioned.
- No direct network path to clinical/patient-data systems.
- DNS for `SITE_DOMAIN` points to this server.
- Ports 80 and 443 are open publicly.
- SSH key access to server is confirmed.

## 2. Required Files

- Project repository checked out on server.
- `.env` created from `.env.example`.

Required `.env` values:
- `PUBLIC_HOTDOC_EMBED_URL`
- `SITE_DOMAIN`
- `SITE_URL`
- `LETSENCRYPT_EMAIL`

Optional:
- `PUBLIC_GA_MEASUREMENT_ID` (leave blank if GA is disabled)

## 3. Go-Live Commands

From repository root:

```bash
docker compose config
docker compose build
docker compose up -d
```

## 4. Immediate Verification

```bash
docker compose ps
docker compose logs --tail=100 web
docker compose logs --tail=100 caddy
curl -I https://<SITE_DOMAIN>
```

Expected:
- `web` and `caddy` running/healthy.
- HTTPS response is successful.
- No critical errors in logs.

## 5. Functional Smoke Checks

In browser (desktop + mobile):
- Home, Team, Services, Fees, Contact pages load.
- Book Now button opens booking modal.
- Call button launches phone link.
- Fees tables are readable on mobile (horizontal pan works).
- Contact map and "Where to find us" content render correctly.
- Certificate is valid and browser shows secure lock.

If GA enabled:
- Realtime traffic appears in GA4 after page load and CTA interactions.

## 6. Backup Right After Go-Live

```bash
mkdir -p backups/$(date +%F)
cp .env backups/$(date +%F)/.env

docker run --rm -v bondi-medical-website_caddy_data:/from -v "$PWD"/backups/$(date +%F):/to alpine \
  sh -c "cd /from && tar -czf /to/caddy_data.tar.gz ."

docker run --rm -v bondi-medical-website_caddy_config:/from -v "$PWD"/backups/$(date +%F):/to alpine \
  sh -c "cd /from && tar -czf /to/caddy_config.tar.gz ."
```

Copy backup folder to secure off-host storage.

## 7. Rollback Trigger and Steps

Rollback trigger examples:
- HTTPS unavailable for more than 5 minutes.
- Booking modal broken after deploy.
- Critical route failures.

Rollback:

```bash
git checkout <KNOWN_GOOD_TAG_OR_COMMIT>
docker compose build
docker compose up -d
```

Re-run Section 4 and Section 5 checks.

## 8. Go-Live Sign-Off

- [ ] Isolated host requirement confirmed.
- [ ] Compose deployment completed.
- [ ] Caddy HTTPS valid on production domain.
- [ ] Mobile + booking + analytics (if enabled) validated.
- [ ] Backups created and exported off-host.
- [ ] Ops handover complete (docs shared with support team).

## 9. Reference Docs

- `docs/deployment-ubuntu.md`
- `docs/environment-variables.md`
- `docs/backup-rollback.md`
- `docs/validation-checklist.md`
- `docs/content-updates.md`
