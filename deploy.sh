#!/usr/bin/env bash
set -euo pipefail

APP_DIR="/opt/Bondi-Medical-Website"
ENVIRONMENT="${1:-staging}"
BRANCH="${2:-main}"

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
    echo "Usage: ./deploy.sh [staging|production] [branch]"
    exit 1
    ;;
esac

echo "==> Deploying environment: $ENVIRONMENT"
echo "==> Branch: $BRANCH"

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

echo "==> Fetching latest code"
git fetch origin --tags

if ! git show-ref --verify --quiet "refs/remotes/origin/$BRANCH"; then
  echo "ERROR: Remote branch origin/$BRANCH not found"
  exit 1
fi

echo "==> Checking out $BRANCH from origin/$BRANCH"
git checkout -B "$BRANCH" "origin/$BRANCH"

echo "==> Activating environment file: $ENV_FILE"
cp "$ENV_FILE" .env

echo "==> Current commit"
git rev-parse --short HEAD

echo "==> Validating Docker Compose"
docker compose config >/dev/null

echo "==> Building containers"
docker compose build

echo "==> Starting services"
docker compose up -d

echo "==> Container status"
docker compose ps

echo "==> Recent logs"
docker compose logs --tail=50 web || true
docker compose logs --tail=50 caddy || true

echo "==> HTTP check"
curl -I "http://$EXPECTED_DOMAIN" || true
curl -I "https://$EXPECTED_DOMAIN" || true

echo "==> Deploy complete"
