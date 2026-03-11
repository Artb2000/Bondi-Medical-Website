# Ubuntu 24.04 Production Deployment (Docker Compose + Caddy)

This runbook deploys the public website to a separate physical Ubuntu host with Docker Compose and Caddy-managed HTTPS.

## 1. Architecture and Isolation Requirements

- Host: dedicated public-facing Ubuntu 24.04 LTS server.
- Runtime: Docker Engine + Docker Compose plugin.
- Web layer: Caddy as reverse proxy and TLS terminator.
- App layer: static site container serving Astro build output.

Mandatory isolation controls:
- No direct network path from this host to clinical or patient-data systems.
- No shared DBs, mounts, VPN routes, or service dependencies with practice servers.
- Publicly exposed ports: 80 and 443 only.

## 2. Domain and DNS Requirements

Before deployment:
- Choose production FQDN, for example `www.example.com`.
- Create DNS records:
	- `A` record (and `AAAA` if IPv6) pointing to this Ubuntu server.
- Wait for propagation and verify:

```bash
dig +short <SITE_DOMAIN>
```

TLS notes:
- Caddy will request and renew certificates from Let's Encrypt.
- Ensure `LETSENCRYPT_EMAIL` is valid and monitored.

## 3. Server Setup

```bash
sudo apt update
sudo apt install -y ca-certificates curl gnupg
curl -fsSL https://get.docker.com | sh
sudo systemctl enable --now docker
sudo usermod -aG docker $USER
```

Log out/in after adding your user to the `docker` group.

Recommended host hardening:
- SSH keys only (disable password auth).
- UFW or equivalent:
	- allow 22/tcp from admin IP range
	- allow 80/tcp
	- allow 443/tcp
- Enable unattended security updates.

## 4. Application Configuration

```bash
git clone <REPO_URL>
cd Bondi-Medical-Website
cp .env.example .env
```

Set required values in `.env` (see `docs/environment-variables.md`):
- `PUBLIC_HOTDOC_EMBED_URL`
- `SITE_DOMAIN`
- `SITE_URL`
- `LETSENCRYPT_EMAIL`

Optional:
- `PUBLIC_GA_MEASUREMENT_ID` (leave blank to disable GA)

## 5. First Production Deploy

```bash
docker compose config
docker compose build
docker compose up -d
```

## 6. Verification

```bash
docker compose ps
docker compose logs --tail=100 web
docker compose logs --tail=100 caddy
curl -I https://<SITE_DOMAIN>
```

Expected:
- `web` and `caddy` containers are healthy.
- HTTPS responds with valid certificate chain.
- No startup errors in Caddy or web logs.

Then execute the full checklist in `docs/validation-checklist.md`.

## 7. Updating Production

```bash
git pull
docker compose build
docker compose up -d
```

Post-update:
- Re-run `docs/validation-checklist.md`.

## 8. Monitoring and Maintenance

Weekly:
- Review logs for `web` and `caddy`.
- Verify booking flow and key routes.

Monthly:
- Apply Ubuntu updates.
- Rebuild images and redeploy.
- Validate certificate status and expiry.

## 9. Backup and Rollback

Use `docs/backup-rollback.md` for:
- what to back up
- restore procedure
- rollback steps

## 10. Acceptance Criteria Mapping

- Separate Ubuntu server: enforced by architecture and isolation requirements.
- Docker Compose deployment: required by runbook commands.
- Caddy HTTPS: required by Caddy service and DNS/TLS configuration.
- Clear setup and maintenance docs: this guide + linked docs:
	- `docs/environment-variables.md`
	- `docs/backup-rollback.md`
	- `docs/validation-checklist.md`
	- `docs/content-updates.md`
