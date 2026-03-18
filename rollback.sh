#!/usr/bin/env bash
set -euo pipefail

APP_DIR="/opt/Bondi-Medical-Website"
REF="${1:-}"
ENVIRONMENT="${2:-production}"

if [ -z "$REF" ]; then
  echo "Usage: ./rollback.sh <tag-or-commit> [staging|production]"
  exit 1
fi

case "$ENVIRONMENT" in
  staging)
    ENV_FILE=".env.staging"
    EXPECTED_DOMAIN="staging.ptload.com.au"
    ;;
  production)
    ENV_FILE=".env.production"
    EXPECTED_DOMAIN="www.bondimedicalcentre.com.au"
    ;;
  *)
    echo "Usage: ./rollback.sh <tag-or-commit> [staging|production]"
    exit 1
    ;;
esac

cd "$APP_DIR"

if [ ! -d .git ]; then
  echo "ERROR: $APP_DIR is not a git repository"
  exit 1
fi

if [ ! -f "$ENV_FILE" ]; then
  echo "ERROR: Missing $ENV_FILE"
  exit 1
fi

if [ -n "$(git status --porcelain)" ]; then
  echo "ERROR: Working tree is dirty. Commit, stash, or discard local changes first."
  git status --short
  exit 1
fi

echo "==> Fetching tags and refs"
git fetch origin --tags

if ! git rev-parse --verify --quiet "$REF^{commit}" >/dev/null; then
  echo "ERROR: Rollback target not found or not a commit: $REF"
  exit 1
fi

echo "==> Checking out rollback target: $REF"
git checkout --detach "$REF"

echo "==> Activating environment file: $ENV_FILE"
cp "$ENV_FILE" .env

echo "==> Current commit"
git rev-parse --short HEAD

echo "==> Validating Docker Compose"
docker compose config >/dev/null

echo "==> Rebuilding services"
docker compose build

echo "==> Restarting services"
docker compose up -d

echo "==> Container status"
docker compose ps

echo "==> Recent logs"
docker compose logs --tail=50 web || true
docker compose logs --tail=50 caddy || true

echo "==> HTTP check"
curl -I "http://$EXPECTED_DOMAIN" || true
curl -I "https://$EXPECTED_DOMAIN" || true

echo "==> Rollback complete"
