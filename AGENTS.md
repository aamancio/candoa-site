<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Candoa Context

- This project is the marketing site for the macOS app at `/Users/alex/Projects/Candoa/Candoa`.
- Downloadable app builds belong in `public/downloads/` and are served from `/downloads/<filename>`.
- Prefer a drag-to-Applications DMG (`Candoa.dmg`) for public downloads. Zip builds are only for quick internal handoff.
- The app repo has a GitHub Actions workflow that can update `public/downloads/Candoa.dmg` after app `main` pushes. Keep the marketing site download link pointed at `/downloads/Candoa.dmg`.
