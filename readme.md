# Personal Website

A lightweight personal website hosted on GitHub Pages.

## Live Site
Visit at [https://palloncino.github.io/resume](https://palloncino.github.io/resume)

## Development

Use **Node 20** and **pnpm** (see `.nvmrc`).

```bash
nvm use
corepack enable
pnpm install
```

### PDF Generation
- Hospitality resume PDF: `pnpm run pdf:hotel` → `media/hotel-resume.pdf`
- Restaurant resume PDF: `pnpm run pdf:restaurant` → `media/restaurant-resume.pdf`
- Electrical formula poster PDF: `pnpm run pdf:electrical` → `media/electrical-formulas-poster.pdf`
- Posters: `scripts/convert-to-pdf.js` (Puppeteer)


