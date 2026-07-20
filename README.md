# Kiarash Miri — Portfolio

Personal portfolio site, converted from the Crypgo Next.js/Tailwind template.
Built with Next.js 16, TypeScript, Tailwind CSS 4, shadcn/ui, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## What to edit

- **Profile photo**: replace the "KM" placeholder circle in
  `src/components/Home/Hero/index.tsx` with a real `<Image />` once you have a
  photo. Drop the file in `public/images/` first.
- **Projects**: add new entries to the `projects` array in
  `src/components/Home/portfolio/data.tsx`. Each one automatically becomes a
  card in the Projects section.
- **Contact links**: edit `footerlabels` in `src/app/api/data.tsx` (used in
  both the footer and the header's Contact button).
- **Skills / tech stack**: `src/components/Home/BrandLogo/data.tsx` (logos)
  and `src/app/api/data.tsx` → `upgradeData` / `perksData`.
- **Bio text**: `src/components/Home/Hero/index.tsx` and
  `src/components/Home/work/index.tsx` (the fake `about-me.ts` code block).
- **FAQ**: `src/components/Home/Faq/index.tsx`.

## Notes

This was trimmed down from the original crypto exchange template — sign
in/up pages, the documentation site, the blog, and all crypto-specific
widgets were removed. Every image that showed a crypto app mockup was
replaced with icon-based visuals or code-editor mockups, since there were no
real project screenshots available yet. Swap those in as you get real
screenshots of your work.
