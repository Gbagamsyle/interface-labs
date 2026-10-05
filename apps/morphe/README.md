# MORPHÉ Contemporary

MORPHÉ is a fictional museum concept created as an independent frontend and interaction design experiment.

A digital-first contemporary art institution in London, MORPHÉ treats art, typography and deliberate space as the interface. The site moves from an approved art-directed homepage into a catalogue-like exhibition programme, an artist index and practical visitor information.

## Design philosophy

Swiss editorial typography meets contemporary museum identity and subtle brutalism. A warm paper palette, near-black ink, restrained rules, asymmetric alignment and artwork-led color form a consistent visual system. Inner pages have their own composition: exhibition information reads like a printed programme, details like a catalogue spread, artists like an index and visitor information like a quiet field guide. There are no generic card grids or product-style components.

## Stack

- Next.js 16 App Router and React 19
- TypeScript with strict checking
- Tailwind CSS 4 plus project-specific editorial styles and tokens
- Motion for React for selected, restrained homepage interactions
- `next/font` with DM Sans, Space Grotesk and IBM Plex Mono
- `next/image` with responsive `sizes` and Unsplash CDN resizing
- pnpm workspace package: `@interface-labs/morphe`

Content is typed local data. The app has no database, authentication, CMS or component library.

## Routes

- `/` — homepage, current exhibition, programme selection, manifesto, artist selection and visitor invitation
- `/exhibitions` — NOW, UPCOMING and ARCHIVE editorial programme with a changing artwork preview
- `/exhibitions/[slug]` — dynamic catalogue detail pages for each exhibition in `data/exhibitions.ts`
- `/artists` — featured Amara K. Mensah composition and alphabetical artist directory
- `/visit` — opening hours, admission, travel, accessibility, contact and abstract location graphic
- Unknown exhibition slugs use Next.js `notFound()` and the MORPHÉ 404 page

## Key interactions

- The homepage hero artwork has restrained mouse-pointer parallax; it does not react to touch and respects reduced-motion preferences.
- The current exhibition image is revealed with a short clip transition on entry.
- Exhibition archive and artist directory previews update on hover or keyboard focus. Touch users can select exhibition previews with an explicit control.
- The abstract map marker reveals the fictional address on hover, keyboard focus or tap.
- Navigation indicates the active section with a minimal underline; the mobile navigation is a bespoke typographic menu.
- Reduced-motion preferences disable transitions and remove scroll-relative movement.

## Responsive approach

Layouts recompose for mobile rather than shrinking desktop compositions. Exhibition rows expose direct preview controls on touch screens; artist hover imagery is reserved for desktop while mobile keeps a readable text directory. Detail imagery, metadata, captions, visitor rows and map annotations adapt at narrow widths. The homepage and inner routes were checked from 375px to 1920px for unintended horizontal overflow.

## Accessibility

Semantic page landmarks, descriptive artwork alternatives, visible focus states, native anchors and buttons, keyboard equivalents for hover interactions, accessible selected/expanded states and reduced-motion support are included. The location annotation is associated with its marker for assistive technology.

## Performance considerations

Pages and exhibition slugs are statically generated from local typed content. Most content remains server-rendered. Client components are limited to pointer, selection and menu interactions. Artwork uses `next/image`, responsive source sizes and the Unsplash image CDN loader. Placeholder images should be replaced with institution-owned or appropriately licensed artwork before production use.

## Local development

From the monorepo root:

```sh
pnpm install
pnpm --filter @interface-labs/morphe dev
```

Open `http://localhost:3000`.

## Typecheck, lint and production build

From the monorepo root:

```sh
pnpm --filter @interface-labs/morphe typecheck
pnpm --filter @interface-labs/morphe lint
pnpm --filter @interface-labs/morphe build
```

## Project status and content

The museum, artists, exhibitions, works, address and visitor details are fictional. Artwork images currently use Unsplash-hosted development placeholders, with sources centralized in `data/exhibitions.ts` and `data/artists.ts` for later replacement. MORPHÉ is a portfolio-oriented frontend experiment, not an operating museum or production visitor service.
