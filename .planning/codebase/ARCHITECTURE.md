# Architecture

**Analysis Date:** 2026-01-30

## Pattern Overview

**Overall:** shadcn/ui Component Registry with Static Site Demo

**Key Characteristics:**
- Custom component registry distributable via shadcn CLI
- Static export Next.js showcase/demo application
- Component library organized by type (UI primitives vs Blocks)
- Radix UI primitives with Tailwind CSS styling
- Class Variance Authority (CVA) for variant management

## Layers

**Registry Layer (Distributable Components):**
- Purpose: Contains all reusable UI components designed for distribution
- Location: `registry/vitality/`
- Contains: UI primitives (`ui/`) and composed blocks (`blocks/`)
- Depends on: `@/lib/utils`, Radix UI primitives, CVA
- Used by: Demo application, external consumers via shadcn CLI

**Application Layer (Demo/Showcase):**
- Purpose: Demonstrates registry components in a browsable showcase
- Location: `app/`
- Contains: Next.js pages, layouts, route handlers
- Depends on: Registry components, Application components
- Used by: End users browsing the component library

**Application Components Layer:**
- Purpose: Components specific to the demo application (not distributed)
- Location: `components/`
- Contains: Theme provider, theme toggle, sidebar navigation
- Depends on: Registry UI components, next-themes
- Used by: Application layer only

**Library Layer:**
- Purpose: Shared utilities and helpers
- Location: `lib/`
- Contains: `cn()` utility function for className merging
- Depends on: clsx, tailwind-merge
- Used by: All component layers

## Data Flow

**Component Distribution Flow:**

1. Components defined in `registry/vitality/ui/` and `registry/vitality/blocks/`
2. `shadcn build` command reads `registry.json` manifest
3. Generates JSON files to `public/r/` for each component
4. GitHub Actions deploys to GitHub Pages
5. Consumers install via `npx shadcn@latest add <registry-url>/r/<component>.json`

**Page Rendering Flow:**

1. `app/page.tsx` (Server Component) reads `globals.css` at build time
2. Passes CSS content to `app/home-content.tsx` (Client Component)
3. HomeContent renders all component demos with TooltipProvider context
4. Theme state managed by next-themes ThemeProvider in layout

**State Management:**
- Theme: Client-side via next-themes (localStorage persistence)
- Component demo state: Local React state in `home-content.tsx`
- No global state management library

## Key Abstractions

**Component Variants (CVA Pattern):**
- Purpose: Type-safe variant styling for components
- Examples: `registry/vitality/ui/button.tsx`, `registry/vitality/ui/badge.tsx`
- Pattern: `cva()` defines base styles and variant maps, exported alongside component

**Compound Components (Radix Pattern):**
- Purpose: Composable component APIs with shared context
- Examples: `registry/vitality/ui/dialog.tsx`, `registry/vitality/ui/dropdown-menu.tsx`
- Pattern: Re-export Radix primitives with custom styling applied

**Block Components:**
- Purpose: Pre-composed, opinionated UI patterns
- Examples: `registry/vitality/blocks/header.tsx`, `registry/vitality/blocks/side-nav.tsx`
- Pattern: Combine multiple UI primitives into ready-to-use patterns with props for customization

## Entry Points

**Application Entry:**
- Location: `app/layout.tsx`
- Triggers: Next.js routing
- Responsibilities: Root layout, ThemeProvider wrapper, Toaster placement, metadata

**Page Entry:**
- Location: `app/page.tsx`
- Triggers: Root route `/`
- Responsibilities: Server-side CSS reading, renders HomeContent

**Registry Build Entry:**
- Location: `registry.json`
- Triggers: `shadcn build` command
- Responsibilities: Manifest for component distribution, defines dependencies

## Error Handling

**Strategy:** Minimal - relies on React's error boundaries and Next.js defaults

**Patterns:**
- No explicit try/catch blocks in component code
- Form validation via zod (available in form.tsx)
- Client component hydration handled via mounted state checks

## Cross-Cutting Concerns

**Styling:**
- Tailwind CSS v4 with CSS variables for theming
- `cn()` utility for conditional class merging
- Design tokens defined in `app/globals.css`

**Theming:**
- Light/dark mode via next-themes
- CSS custom properties for color palette
- Vitality theme with oklch color space

**Type Safety:**
- TypeScript strict mode enabled
- Component props typed via React.ComponentProps and custom interfaces
- Path aliases: `@/*` maps to project root

---

*Architecture analysis: 2026-01-30*
