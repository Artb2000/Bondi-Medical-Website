# Bondi Medical Site Content (Approved)

## Sitemap

| Nav label | Route | Type |
|---|---|---|
| Home | `/` | Page |
| Doctors / Team | `/doctors` | Page |
| Services | `/services` | Page |
| Appointments & Fees | `/appointments-fees` | Page |
| Contact / Location | `/contact` | Page |
| Book Now | `/appointments-fees#book-now` or HotDoc link | Global CTA |

## Global Content

### Header
- Logo label: Bondi Medical Centre.
- Primary nav: Home, Doctors / Team, Services, Appointments & Fees, Contact / Location.
- Primary CTA label: Book Now.
- CTA behavior: open HotDoc lightbox or link to the embedded booking section.

### Footer
- Clinic name: Bondi Medical Centre.
- Address: Suite 101A, Level 1, 183-193 Oxford Street, Bondi Junction NSW 2022.
- Phone: (02) 9389 7667.
- Email: info@bondimedicalcentre.com.au.
- Hours summary: Monday to Friday, 9:00 am to 5:00 pm; closed Saturday and Sunday.
- Footer CTA: Book Now.

## Astro Content Notes
- Shared layout slots: `hero`, `intro`, `contentSections`, `ctaStrip`, `seo`.
- Reusable components: `FeeTable.astro`, `SidebarCard.astro`.
- Suggested page content schema fields:
  - `slug`
  - `navLabel`
  - `pageTitle`
  - `metaDescription`
  - `hero`
  - `sections`
  - `cta`

## Global CTA Object
- `label`: Book Now
- `href`: /appointments-fees#book-now
- `variant`: primary
