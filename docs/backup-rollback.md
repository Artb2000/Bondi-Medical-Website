# Backup and Rollback

This document defines minimum backup and rollback steps for the production Ubuntu + Docker Compose deployment.

## Backup Scope

Back up the following:

1. Source repository (Git remote is primary source backup)
2. Production `.env`
3. Caddy persistent volumes:
   - `caddy_data`
   - `caddy_config`

## Backup Commands

Run from project root on production host:

```bash
mkdir -p backups/$(date +%F)
cp .env backups/$(date +%F)/.env

docker run --rm -v bondi-medical-website_caddy_data:/from -v "$PWD"/backups/$(date +%F):/to alpine \
  sh -c "cd /from && tar -czf /to/caddy_data.tar.gz ."

docker run --rm -v bondi-medical-website_caddy_config:/from -v "$PWD"/backups/$(date +%F):/to alpine \
  sh -c "cd /from && tar -czf /to/caddy_config.tar.gz ."
```

Store backup artifacts in secure off-host storage.

## Restore Procedure

1. Restore repository and correct release version.
2. Restore `.env`.
3. Restore Caddy volumes from backup.
4. Start stack.

Example:

```bash
cp /secure-backup/.env .env

docker compose down

docker run --rm -v bondi-medical-website_caddy_data:/to -v /secure-backup:/from alpine \
  sh -c "cd /to && tar -xzf /from/caddy_data.tar.gz"

docker run --rm -v bondi-medical-website_caddy_config:/to -v /secure-backup:/from alpine \
  sh -c "cd /to && tar -xzf /from/caddy_config.tar.gz"

docker compose up -d
```

## Rollback Strategy

Preferred rollback:

1. Checkout previous known-good Git commit/tag.
2. Rebuild and redeploy.
3. Validate using `docs/validation-checklist.md`.

```bash
git checkout <KNOWN_GOOD_TAG_OR_COMMIT>
docker compose build
docker compose up -d
```

If rollback needs previous `.env`, restore it before rebuild.

## Minimum Retention Guidance

- Keep at least 7 daily backups and 4 weekly backups.
- Keep at least one backup aligned to each production release.
