# Future Content Updates (Code-Based)

This website is maintained through code updates and rebuild/redeploy.

## Where to Edit Content

Primary content data:
- `src/config/site.ts`

Page-level structure/content slots:
- `src/pages/index.astro`
- `src/pages/doctors.astro`
- `src/pages/services.astro`
- `src/pages/fees.astro`
- `src/pages/contact.astro`

Shared components:
- `src/components/`

Images:
- Place/update assets in `public/images/`

## Update Workflow

1. Create a branch and edit content files.
2. Run checks locally:

```bash
npm run check
npm run build
```

3. Open PR/review.
4. Merge and deploy to production:

```bash
docker compose build
docker compose up -d
```

5. Run `docs/validation-checklist.md`.

## HotDoc and Analytics Updates

- HotDoc URL changes: update `PUBLIC_HOTDOC_EMBED_URL` in `.env`, rebuild, redeploy.
- GA changes:
  - Enable/update: set `PUBLIC_GA_MEASUREMENT_ID`, rebuild, redeploy.
  - Disable: leave `PUBLIC_GA_MEASUREMENT_ID` blank, rebuild, redeploy.

## Content Handoff Template

Use:
- `docs/content-template.md`
