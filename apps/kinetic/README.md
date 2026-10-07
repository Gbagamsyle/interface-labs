# KINETIC

KINETIC is a fictional human-performance concept designed as a bold sports science campaign and editorial experience. All athlete identity, statistics, and performance outcomes are demo content intended for visual exploration.

## Status

Active concept site in the Interface Labs monorepo. The app is intentionally framed as an interface design study rather than a real training provider or sports operation.

## Creative direction

The experience blends sports science, biomechanics, editorial typography, and high-contrast campaign photography. Black and warm off-white anchor the visual language, while signal orange directs focus and performance cues.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- `next/font` with Anton, Inter, and IBM Plex Mono
- `next/image` with responsive sizing
- pnpm workspace package: `@interface-labs/kinetic`

## Experience highlights

- Hero campaign statement with cinematic athlete photography
- Performance ticker with fictional metrics
- Biomechanics study and annotation-led data composition
- Training discipline banding and editorial manifesto section
- Athlete case studies and high-impact CTA

## Local development

From the monorepo root:

```bash
pnpm install
pnpm --filter @interface-labs/kinetic dev
```

Open http://localhost:3002

## Production checks

```bash
pnpm --filter @interface-labs/kinetic typecheck
pnpm --filter @interface-labs/kinetic lint
pnpm --filter @interface-labs/kinetic build
```

## Notes

Photography and metrics are intentionally placeholder content. Replace with owned or licensed assets before any production use.
