# KINETIC — Human Performance Lab

KINETIC is a fictional concept created as part of Interface Lab. All athlete identities, statistics and performance results presented in this concept are fictional/demo content.

## Concept and creative direction

An experimental human-performance laboratory combining sports science, biomechanics, elite training and recovery. The visual language brings together high-contrast athlete photography, condensed campaign typography, sports timing graphics and measured data annotations. Black and warm off-white form the base; signal orange marks deltas and directional cues. This is a sports campaign and editorial system—not a gym, apparel store or SaaS dashboard.

## Stack

- Next.js 16 App Router / React 19
- TypeScript with strict checking
- Tailwind CSS 4 with a project-specific graphic system
- Motion dependency available for a later interaction phase; this initial pass is intentionally static
- `next/font` using Anton, Inter and IBM Plex Mono
- `next/image` with responsive `sizes` and Unsplash CDN resizing
- pnpm workspace package: `@interface-labs/kinetic`

No backend, database, authentication, CMS, charting package or component library.

## Homepage sections

- Hero campaign statement, explosive movement photography and fictional sprint context
- Performance ticker with explicitly fictional metrics
- Biomechanics study with spatial measurement annotations
- Four image-led training discipline bands
- Asymmetric manifesto with athlete photography
- Three-part measure / train / repeat method
- Fictional athlete progress studies
- High-impact lab CTA and compact footer

## Responsive strategy

Desktop uses a wide editorial grid and image/data overlays. Tablet compresses the hero and measurement composition. Mobile rearranges the hero, stacks image-led disciplines, simplifies measurement overlays and turns athlete cases into compact split rows. Tested at 375, 430, 768, 1024, 1440 and 1920 CSS pixels for unintended horizontal overflow.

## Accessibility

Semantic sections/headings, descriptive photo alt text, visible keyboard focus, touch-sized navigation, accessible menu state and keyboard dismissal are included. The performance ticker pauses under reduced-motion preferences; global motion rules respect `prefers-reduced-motion`. Fictional/demo metric context is available in the page copy and accessible labels.

## Performance

Images use `next/image`, accurate `sizes`, and a custom Unsplash CDN loader. Hero photography is prioritized; below-fold photos remain lazy-loaded. Layout dimensions/aspect ratios are reserved to reduce shift. The first design pass avoids scroll-driven animations, third-party chart libraries and heavy client-side effects.

## Local development

From the monorepo root:

```sh
pnpm install
pnpm --filter @interface-labs/kinetic dev
```

Open `http://localhost:3002`.

## Checks and production build

```sh
pnpm --filter @interface-labs/kinetic typecheck
pnpm --filter @interface-labs/kinetic lint
pnpm --filter @interface-labs/kinetic build
```

## Placeholder imagery

Development photography is served from Unsplash URLs centralized in `data/disciplines.ts` and `data/athletes.ts`. Replace these with owned or appropriately licensed imagery before production. KINETIC is an illustrative interface/design experiment, not a real lab or training provider.
