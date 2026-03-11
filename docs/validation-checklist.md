# Production Validation Checklist

Run this checklist after first deploy and each production update.

## A. Infrastructure and HTTPS

- [ ] `docker compose ps` shows `web` and `caddy` as running/healthy.
- [ ] `https://<SITE_DOMAIN>` loads successfully.
- [ ] Certificate is valid and issued for the correct domain.
- [ ] HTTP redirects to HTTPS.
- [ ] Security headers present (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`).

## B. Core Site Routing

- [ ] `/` loads.
- [ ] `/doctors` loads.
- [ ] `/services` loads.
- [ ] `/fees` loads.
- [ ] `/contact` loads.

## C. Mobile Validation

- [ ] Header layout is readable and not cramped on mobile.
- [ ] Book Now and Call buttons are usable and visible on mobile.
- [ ] Fees tables are readable and can pan horizontally on mobile.
- [ ] Contact cards/panes render with correct spacing and lists.

## D. Booking Validation (HotDoc)

- [ ] Book Now CTA opens booking modal.
- [ ] Booking iframe loads expected HotDoc endpoint.
- [ ] Close button dismisses modal.
- [ ] Book Now CTA works from all pages where present.

## E. Analytics Validation (if enabled)

- [ ] `PUBLIC_GA_MEASUREMENT_ID` is set in production `.env`.
- [ ] GA script present in page source.
- [ ] Page views appear in GA Realtime.
- [ ] CTA interactions expected to be tracked are observed.

## F. Contact and CTA Validation

- [ ] Call button uses correct phone link.
- [ ] Contact email link is correct.
- [ ] Location/map embed loads.

## G. Final Acceptance

- [ ] Deployment is on separate Ubuntu host.
- [ ] Stack is deployed via Docker Compose.
- [ ] Caddy HTTPS is functioning correctly.
- [ ] Isolation requirement (no clinical/patient-data connectivity) is satisfied.
- [ ] Backup and rollback documentation is in place.
