# MORPHÉ

MORPHÉ is a fictional contemporary art museum concept designed as a digital-first editorial experience. It presents a quiet, art-led interface that moves from a homepage to a programme, artist index, and visitor information system.

## Status

Active concept site in the Interface Labs monorepo. The project is built as a front-end design experiment rather than a functioning museum platform or production CMS.

## Design philosophy

The identity combines Swiss editorial typography, warm paper tones, and restrained museum branding. It uses asymmetry, whitespace, and artwork-led composition instead of product-card patterns.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- `next/font` with DM Sans, Space Grotesk, and IBM Plex Mono
- `next/image` with responsive sizing
- pnpm workspace package: `@interface-labs/morphe`

## Routes

- `/` — homepage and featured exhibition context
- `/exhibitions` — programme of current, upcoming, and archive moments
- `/exhibitions/[slug]` — detailed exhibition pages
- `/artists` — artist directory and selected profile
- `/visit` — visitor information and fictional location notes

## Local development

From the monorepo root:

```bash
pnpm install
pnpm --filter @interface-labs/morphe dev
```

Open http://localhost:3000

## Production checks

```bash
pnpm --filter @interface-labs/morphe typecheck
pnpm --filter @interface-labs/morphe lint
pnpm --filter @interface-labs/morphe build
```

## Notes

The content is fictional and uses placeholder imagery. Replace artwork and metadata with owned or licensed content before any production or public-facing deployment.
