# AETHER

> **AETHER is a fictional concept created as part of Interface Lab and does not represent a real network, cryptocurrency, or infrastructure provider.**

---

## Concept

AETHER is a fictional infrastructure network for autonomous AI agents. It provides a decentralized coordination and compute layer where autonomous software agents can discover compute, execute workloads, coordinate with other agents, and settle machine-to-machine transactions.

**AETHER is not:**
- A cryptocurrency or token project
- An NFT project
- A generic AI startup landing page
- A SaaS dashboard

**AETHER should feel like:**
- Infrastructure from the near future
- A distributed systems protocol
- A machine-network operations center
- Technical telemetry and documentation

**Core statement:** *INFRASTRUCTURE FOR AN AUTONOMOUS INTERNET.*

---

## Creative Direction

AETHER deliberately contrasts with MORPHÉ (the other Interface Lab experiment in this monorepo):

| | MORPHÉ | AETHER |
|---|---|---|
| Mood | Warm, editorial, museum | Cold, technical, systemic |
| Typography | Humanist serif + sans | Dense grotesk + monospace |
| Color | Warm paper / ink | Near-black / acid-green accent |
| Layout | Art-led, whitespace-rich | Spatial, operational, reactive |
| Animation | Gentle editorial reveals | Network pulses, telemetry ticks |
| Feel | Gallery opening | Machine network operations |

**Accent color:** Acid green / signal lime `#a3e635`

---

## Technology

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + Vanilla CSS custom properties
- **Animation:** CSS keyframes (no heavy library required at Phase 1)
- **Fonts:** Space Grotesk (display) + JetBrains Mono (system/monospace)
- **Visualization:** Native Canvas API + SVG (no third-party graph library)
- **Package manager:** pnpm

---

## Homepage Sections

| # | Section | Purpose |
|---|---|---|
| 01 | **Hero / Network** | Wide canvas network visualization, primary statement, and edge telemetry |
| 02 | **The Network** | SVG topology diagram with hover-reactive node classes |
| 03 | **Protocol** | Tabbed execution stack (Compute → Coordinate → Settle) |
| 04 | **Live Telemetry** | Simulated metrics grid + live activity stream |
| 05 | **Architecture** | Interactive SVG architecture diagram with description panel |
| 06 | **Developers** | Animated terminal + API code sample |
| 07 | **Manifesto** | Large typographic statement with network annotation |
| 08 | **Final CTA** | Build statement + network status panel |
| 09 | **Footer** | Technical system info + navigation + fictional disclaimer |

---

## Key Interactions

- **Hero network:** A restrained Canvas sphere renders connected network nodes and occasional packet traces behind the hero statement. Continuous drawing pauses when reduced motion is requested.
- **Network section:** Hover any node class in the legend to highlight that class and its connections in the SVG topology diagram.
- **Protocol section:** Tab selector switches between Compute / Coordinate / Settle stages. Flow diagram highlights the active layer's steps.
- **Telemetry:** Metrics update on a 4-second interval with smooth interpolation within realistic bounded ranges. Activity stream shows new events approximately every 2.8 seconds.
- **Architecture:** Hover/focus any SVG layer to highlight it, dim others, emphasize connections, and display a description panel on the right.
- **Developer terminal:** Typewriter animation triggers when the section enters the viewport. A replay button re-runs the sequence.

---

## Performance Approach

- Canvas animation uses `requestAnimationFrame` and pointer tracking is throttled via `requestAnimationFrame` (not raw mousemove).
- `ResizeObserver` handles canvas resize without layout thrash.
- Telemetry updates use `setInterval` at a minimum 2.8s cadence — no constant spinner.
- All animations respect `prefers-reduced-motion` via CSS `@media (prefers-reduced-motion: reduce)`.
- Canvas animation is tied to the React component lifecycle and cleaned up on unmount.
- SVG diagrams are static until interaction — no continuous animation overhead.

---

## Accessibility

- Semantic HTML throughout: `<section>`, `<nav>`, `<footer>`, `<main>`, `<h1>`–`<h3>`, `<button>`, `<a>`, `role="tablist"` / `role="tab"` / `role="tabpanel"`, `role="list"` / `role="listitem"`.
- Live telemetry uses `aria-live="polite"` and `aria-atomic="false"`.
- Interactive canvas has `role="img"` with descriptive `aria-label`.
- All interactive elements are keyboard accessible with visible focus states (`:focus-visible` outline using accent color).
- Architecture diagram node buttons have `aria-pressed` and `aria-label` with descriptions.
- Network activity stream announces new items to screen readers.
- UTC clock uses `aria-live="polite"`.
- Color contrast: primary text on dark backgrounds meets WCAG AA.

---

## How to Run

```bash
# From monorepo root
pnpm --filter @interface-labs/aether dev

# Or from the app directory
cd apps/aether
pnpm dev
```

Open [http://localhost:3001](http://localhost:3001)

---

## How to Build

```bash
# From monorepo root
pnpm --filter @interface-labs/aether build
```

---

## Project Structure

```
apps/aether/
├── app/
│   ├── layout.tsx          # Root layout (SiteNav, SiteFooter)
│   └── page.tsx            # Homepage — assembles all sections
├── components/
│   ├── architecture/
│   │   └── ArchitectureSection.tsx
│   ├── layout/
│   │   ├── SiteFooter.tsx
│   │   ├── SiteNav.tsx     # Integrated system/status navigation strip
│   │   └── SystemBar.tsx   # Earlier standalone status strip, retained but unused
│   ├── network/
│   │   ├── HeroNetwork.tsx     # Canvas visualization
│   │   ├── HeroSection.tsx
│   │   └── NetworkSection.tsx
│   ├── protocol/
│   │   └── ProtocolSection.tsx
│   ├── system/
│   │   ├── CtaSection.tsx
│   │   └── ManifestoSection.tsx
│   ├── telemetry/
│   │   └── TelemetrySection.tsx
│   └── terminal/
│       └── DevelopersSection.tsx
├── data/
│   ├── network.ts          # Node/edge data
│   ├── protocol.ts         # Protocol stages
│   └── telemetry.ts        # Metrics + activity templates
├── styles/
│   └── globals.css         # Design system tokens + utilities
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

---

## Known Constraints (Phase 1)

- Motion / Framer Motion is installed but not yet used — Phase 1 is intentionally static with minimal CSS animation. Animation pass will follow visual approval.
- Three.js is not used. The hero visualization is native Canvas 2D.
- Inner pages (`/protocol`, `/developers`, `/network`) are scaffolded in navigation but not built yet. Phase 1 scope is the homepage only.
