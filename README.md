# 728 Collaborative LLC Website

Production-oriented Next.js App Router website for `728collaborative.org`.

## Stack

- Next.js App Router
- TypeScript
- CSS design system with accessible components
- Zod server-side form validation
- Data-driven content models for services, industries, articles, resources, FAQs, and future CMS migration

## Local Development

```bash
npm install
npm run dev
```

## Environment

Copy `.env.example` to `.env.local` and configure:

- `NEXT_PUBLIC_SITE_URL`
- `CONTACT_TO_EMAIL`
- `RESEND_API_KEY`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- `NEXT_PUBLIC_LINKEDIN_URL`
- `SCHEDULE_URL`

## Production Notes

- Wire `/api/contact` to Resend, SMTP, or a secure CRM before launch.
- Replace placeholder founder headshot with an approved image.
- Replace launch PDF resource with the final approved capability statement when UEI, CAGE, NAICS, SAM.gov, classifications, and contracting details are confirmed.
- Add consent controls before enabling analytics in jurisdictions that require them.
- Legal, licensing, adoption-investigation, privacy, and professional-service language should be reviewed before launch.

## QA Checklist

- Verify all contact information and credentials.
- Test keyboard navigation, focus states, mobile menu, forms, filters, accordions, and links.
- Test responsive widths: 320, 375, 390, 430, 768, 1024, 1280, 1440, and 1920.
- Run `npm run typecheck` and `npm run build`.
- Run Lighthouse for Performance, Accessibility, Best Practices, and SEO.
- Confirm no secrets are exposed client-side.

