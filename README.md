# LifePro Design System

Design system for LifePro Fitness — used as a reference for Claude-generated UI and Figma MCP workflows.

## Source of Truth
- `src/styles/tokens.css` — CSS custom properties (runtime source of truth)
- `tokens.json` — W3C design-tokens JSON (Figma MCP, Token Studio)
- `src/design-system/lifepro-design-system.jsx` — full visual reference canvas

## Brand
- **Primary:** `#F15A29` (orange)
- **Ink:** `#1A1A1A`
- **Font:** `area-normal` (Typekit `jhi0vox`)
- **Voice:** efficient, direct, wellness-forward

## Structure
- `tokens.json` — W3C design tokens (primary source for Figma MCP)
- `src/styles/tokens.css` — CSS custom properties with responsive modes
- `src/components/ui/` — base components (vanilla CSS, no Tailwind)
- `src/design-system/` — visual reference canvas (React)
- `public/` — brand logos (`Lifepro_color.png`, `Lifepro_black.png`, `Lifepro_white.png`) and self-hosted fonts

## Responsive Modes
`tokens.css` ships three modes:
- **Mobile** (`≤430px`)
- **Desktop** (default, `1440px`)
- **Desktop XL** (`≥1920px`)

`tokens.json` captures the Desktop (1440) default only. Regenerate per mode if multi-mode variable collections are needed in Figma.

## Figma
- File ID: `03yABO4wJSV78SPvLjdkyB`
- Variable collections: Primitives/Colors, Responsive/Spacing (3 modes), Effects/Shadows
- Local text styles: 13
- Effect styles: 6

## Styling Approach
Vanilla CSS with custom properties. No Tailwind, no CSS-in-JS. Keeps tokens resolvable by Figma MCP and other design tools.
