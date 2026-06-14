# Candoa Site

Marketing site for [Candoa](https://github.com/aamancio/candoa), an
open-source, Arc-inspired browser workspace for macOS.

The production site is deployed on Vercel at [candoa.app](https://candoa.app).
The download button serves the latest versioned macOS disk image from:

```text
public/downloads/Candoa-<version>.dmg
```

The site also reads the current app version and suggested download filename
from:

```text
public/downloads/latest.json
```

Sparkle in-app updates use:

```text
public/downloads/appcast.xml
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
DMG, and commits both a stable copy and a versioned archive into this
repository:

- `public/downloads/Candoa.dmg`
- `public/downloads/Candoa-<version>.dmg`

Once that commit lands on `main`, Vercel deploys the site and
[https://candoa.app/downloads/Candoa-<version>.dmg](https://candoa.app/downloads/Candoa-0.1.0.dmg)
serves the user-facing installer.

The stable URL `Candoa.dmg` remains available as a fallback, but the page uses
`latest.json` to point download buttons at the versioned archive so Finder shows
the version in Downloads, for example `Candoa 0.1.0.dmg`. Sparkle uses
`appcast.xml` for in-app update detection, download, verification, and
installation.

## Deployment

This repository is connected to the Vercel project `candoa`. Pushing to `main`
creates a production deployment for:

- [candoa.app](https://candoa.app)
- [www.candoa.app](https://www.candoa.app)
- [candoa.vercel.app](https://candoa.vercel.app)

## Related Repositories

- Browser app: [aamancio/candoa](https://github.com/aamancio/candoa)
- Marketing site: [aamancio/candoa-site](https://github.com/aamancio/candoa-site)
