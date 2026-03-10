# Ubuntu 24.04 Deployment Guide

## Prerequisites
- Separate physical Ubuntu 24.04 LTS host for website stack only.
- No network path from this host to clinical or patient-data systems.
- Public DNS `A`/`AAAA` records pointed to this server.

## Install runtime
```bash
sudo apt update
sudo apt install -y ca-certificates curl gnupg
curl -fsSL https://get.docker.com | sh
sudo systemctl enable --now docker
sudo usermod -aG docker $USER
```

Log out and back in after adding your user to the `docker` group.

## Deploy
```bash
git clone <REPO_URL>
cd Bondi-Medical-Website
cp .env.example .env
# Update values in .env: PUBLIC_HOTDOC_EMBED_URL, PUBLIC_GA_MEASUREMENT_ID, SITE_DOMAIN
docker compose build
docker compose up -d
```

## Verify
```bash
docker compose ps
docker compose logs --tail=100 caddy
curl -I https://<SITE_DOMAIN>
```

## Hardening Checklist
- Allow inbound ports `80` and `443` only.
- Deny SSH password auth, use keys only.
- Enable unattended security updates.
- Monitor Docker image and OS patch cadence monthly.
- Keep website host isolated from all sensitive internal systems.

## Backup and Recovery
- Keep source in Git as primary backup.
- Back up `.env` securely outside the host.
- Persist and back up Docker volumes `caddy_data` and `caddy_config`.
- Recovery: restore repo, `.env`, and volumes, then run `docker compose up -d`.
