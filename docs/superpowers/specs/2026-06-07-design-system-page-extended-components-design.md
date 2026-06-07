# Design: deck-kit Design System page + 9 Extended components

**Date:** 2026-06-07
**Status:** Approved
**Source:** `design_handoff_deck_kit/` handoff bundle (static HTML/CSS reference + component specs)

## Goal

1. Publish the deck-kit design-system reference as a static page on GitHub Pages
   at `/asgard-slides/design-system/`.
2. Promote the 9 "Extended" components from the handoff into real deck-kit
   source, following the existing kit contract.
3. Re-plan repo architecture so the Pages site can host non-deck static pages.

## Decisions (user-confirmed)

- **Static page (Path A)** — the handoff's `design-system.html` is checked in
  as-is, not rebuilt as a live gallery deck. Low risk; CSS is a 1:1 port of the
  kit. Trade-off accepted: future kit changes require manually syncing the page.
- **No deck retrofits** — the two existing decks are NOT updated to use the new
  components. New components are for future decks.
- The `design_handoff_deck_kit/` bundle directory is deleted after its content
  is absorbed (reference files moved, specs implemented).

## 1. Repo architecture

```
asgard-slides/
├── packages/deck-kit/          # +9 new components + Quote cite extension
├── decks/                      # unchanged
├── docs/design-system/         # NEW: static reference page
│   ├── index.html              #   ← design_handoff_deck_kit/reference/design-system.html
│   ├── deck-kit.css            #   ← reference/deck-kit.css (ported tokens + all component styles)
│   └── assets/                 #   ← reference/assets/ (font, logos, demo shot, avatar)
└── tools/site-builder/         # +static-pages copy step + landing link
```

The page is fully self-contained (relative paths only) — it works when served
from any sub-path without a build step.

## 2. deck-kit: 9 new components + Quote extension

All CSS already exists in `docs/design-system/deck-kit.css` under the
`EXTENDED COMPONENTS` comment block as `.dk-<name>*` rules. To build each
module: copy the matching block, strip the `dk-` prefix / BEM tail into local
class names, keep every `var(--token)` reference unchanged. **No new colors,
no hard-coded hex** — semantic accents reuse `--brand-on-dark / --good /
--warn / --bad` via `color-mix()`.

### Primitives → `packages/deck-kit/src/primitives/`

| Component | Props | CSS block |
| --- | --- | --- |
| `Callout` | `{ variant?: "info"\|"good"\|"warn"\|"bad" = "info"; title?: ReactNode; icon?: ReactNode; children: ReactNode }` — default icon per variant: `i / ✓ / ! / ✕` | `.dk-callout*` |
| `Badge` | `{ status?: "info"\|"good"\|"warn"\|"bad"\|"neutral" = "neutral"; children: ReactNode }` — status pill with dot | `.dk-badge*` |
| `Avatar` (file also exports `Persona`, `Facepile`) | `Avatar { src?; initials?; alt? }` (img or initials), `Persona { src?; initials?; name; role }`, `Facepile { people: { src?; initials? }[] }` | `.dk-avatar*`, `.dk-persona*`, `.dk-facepile*` |
| `BigStat` | `{ value: ReactNode; label?: ReactNode; delta?: ReactNode; trend?: "up"\|"down" }` — `<em>` inside value renders brand-on-dark | `.dk-bigstat*` |
| `ProgressRing` | `{ pct: number; tone?: "brand"\|"good"\|"warn"\|"bad" = "brand"; label?: ReactNode }` — `style={{ ["--pct" as string]: pct }}`; donut via conic-gradient + radial mask | `.dk-ring*` |
| `Checklist` | `{ items: { text: ReactNode; ok?: boolean }[] }` — `ok !== false` → yes row (✓ green), else no row (✕ red) | `.dk-checklist*` |
| `Legend` | `{ items: { label: ReactNode; color: string }[] }` — swatch via `style={{ ["--accent" as string]: color }}` | `.dk-legend*` |

Plus: extend existing `Quote` with optional `cite?: ReactNode` rendered below
the quote body (backward-compatible; used for Persona attribution).

### Layouts → `packages/deck-kit/src/layouts/`

| Component | Props | CSS block |
| --- | --- | --- |
| `Agenda` | `{ items: { title: ReactNode; sub?: ReactNode; time?: ReactNode; state?: "active"\|"done" }[] }` — auto-numbers `01, 02, …`; state maps to `is-active` / `is-done` classes | `.dk-agenda*` |
| `Compare` | `{ pros: { head: ReactNode; items: ReactNode[] }; cons: { head: ReactNode; items: ReactNode[] } }` — green `+` vs red `−` columns | `.dk-compare*` |

### Contract requirements

- Each component: `Name.tsx` + `Name.module.css`, CSS Modules, named exports,
  `type`-only imports for types.
- Export from `primitives/index.ts` / `layouts/index.ts` AND re-export from the
  root barrel `packages/deck-kit/src/index.ts`, including item/prop types
  (matching how `Step`, `Milestone` etc. are exported today).
- SSR-safe: no `window`/`document` at module scope (these are all pure
  presentational components — trivially satisfied).
- No unit tests for the new components (consistent with existing primitives);
  verification = typecheck + lint + existing tests + visual comparison.

## 3. site-builder: publish the page

- `build-site.ts`: after deck builds, before landing render, add a copy step:
  `cp -r docs/design-system → dist-site/design-system`.
- `render-landing.ts`: add a secondary card below the deck grid linking to
  `design-system/` — title "deck-kit Design System", styled as a quieter
  variant of the deck cards.
- Live URL: `https://asgard-ai-platform.github.io/asgard-slides/design-system/`.
- No changes needed to `.github/workflows/deploy.yml` (it runs `pnpm build:site`
  and deploys `dist-site/` wholesale).

## 4. Documentation sync

- Root `README.md`: add design-system link to the "Live site" table; add
  `docs/design-system/` to the Layout tree.
- `CLAUDE.md`: note the design-system page and the maintenance rule — **when a
  component is added/changed in deck-kit, manually sync
  `docs/design-system/`** (it is a static port and will drift otherwise).
- `packages/deck-kit/README.md`: document the 9 new components in the public
  API listing.

## Verification

1. `pnpm -F deck-kit typecheck && pnpm -F deck-kit lint && pnpm -F deck-kit test`
   (12 existing tests must stay green).
2. Drop each new component into a scratch slide, screenshot via Playwright at
   1280×800, compare against the matching specimen in the reference page;
   remove the scratch slide before commit.
3. `pnpm -r build` — both decks still build (deck-kit was touched).
4. `pnpm build:site` locally — confirm `dist-site/design-system/index.html`
   exists and the landing page links to it.
5. After merge to main, confirm the live URL renders.

## Risks

- `color-mix()` requires modern browsers — fine for the target audience
  (current Chrome/Safari/Firefox), already implied by the kit's use of
  `aspect-ratio`, `conic-gradient`, masks.
- Static reference page can drift from kit source — mitigated by the CLAUDE.md
  maintenance rule; accepted trade-off of Path A.
