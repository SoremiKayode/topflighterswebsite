# Topflighters Academy Website

Production-ready React, TypeScript and Tailwind CSS website for Topflighters Academy. The application is fully static and configured for Cloudflare Pages.

## Local development

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Content and images

Business details, social URLs, map URL, mission and vision live in `src/data/school.ts`; programmes and differentiators live in `src/data/`; the temporary announcement can be toggled in `src/data/announcements.ts`. Put the final logo at `public/assets/logo/topflighters-logo.png`; the included brand mark appears until it exists. Replace descriptive SVGs under `public/assets/hero` and `public/assets/gallery` with optimized WebP/AVIF school photography, retaining filenames or updating references. No testimonials appear until approved entries are added.

## Forms

Forms validate in the browser and share `src/services/forms.ts`. Set `VITE_ENQUIRY_ENDPOINT=https://example.com/api/enquiry` to POST JSON to a Cloudflare Worker, Formspree-compatible endpoint, or custom API. Never place private API keys in a `VITE_` variable because browser variables are public. Without an endpoint, submission is simulated for stakeholder review.

## Cloudflare Pages deployment

1. Push this project to GitHub.
2. Open **Cloudflare Dashboard → Workers & Pages → Create Application → Pages → Connect Git Repository**.
3. Choose the repository and framework preset **Vite**.
4. Use build command `npm run build` and output directory `dist`.
5. Optionally add `VITE_ENQUIRY_ENDPOINT` in project environment variables.
6. Deploy.

`public/_redirects` routes application URLs to `index.html` with a 200 response, so direct SPA route visits work. `public/_headers` supplies safe security and caching headers.
