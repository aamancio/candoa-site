# Candoa Site

Marketing site for [Candoa](https://github.com/aamancio/candoa), an
open-source, Arc-inspired browser workspace for macOS.

The production site is deployed on Vercel at [candoa.app](https://candoa.app).
The download button serves the latest generated macOS disk image from:

```text
public/downloads/Candoa.dmg
```

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Vercel hosting

## Local Development

Install dependencies and start the development server:

```sh
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Useful commands:

```sh
pnpm lint
pnpm build
```

## Download Flow

The Candoa browser repository owns app builds. On every `main` push there, a
GitHub Actions workflow builds the macOS app, packages a drag-to-Applications
DMG, and commits it into this repository at `public/downloads/Candoa.dmg`.

Once that commit lands on `main`, Vercel deploys the site and
[https://candoa.app/downloads/Candoa.dmg](https://candoa.app/downloads/Candoa.dmg)
serves the updated installer.

## Deployment

This repository is connected to the Vercel project `candoa`. Pushing to `main`
creates a production deployment for:

- [candoa.app](https://candoa.app)
- [www.candoa.app](https://www.candoa.app)
- [candoa.vercel.app](https://candoa.vercel.app)

## Related Repositories

- Browser app: [aamancio/candoa](https://github.com/aamancio/candoa)
- Marketing site: [aamancio/candoa-site](https://github.com/aamancio/candoa-site)
