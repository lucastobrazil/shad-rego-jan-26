# Codebase Structure

**Analysis Date:** 2026-01-30

## Directory Layout

```
shad-rego-26-jan/
├── app/                    # Next.js App Router pages
├── components/             # Demo-app-specific components
├── lib/                    # Shared utilities
├── registry/               # Distributable component library
│   └── vitality/           # Named registry theme
│       ├── ui/             # UI primitive components
│       └── blocks/         # Composed block components
├── public/                 # Static assets
│   └── r/                  # Built registry JSON files
├── out/                    # Static export output
├── .github/workflows/      # CI/CD configuration
├── .planning/              # Planning documentation
├── components.json         # shadcn CLI configuration
├── registry.json           # Component registry manifest
├── next.config.ts          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## Directory Purposes

**`app/`:**
- Purpose: Next.js App Router application code
- Contains: Pages, layouts, global CSS
- Key files:
  - `layout.tsx`: Root layout with ThemeProvider
  - `page.tsx`: Server component entry point
  - `home-content.tsx`: Client component with all demos
  - `globals.css`: Design tokens and Tailwind config
  - `docs.css`: Documentation-specific styles

**`components/`:**
- Purpose: Application-specific components (NOT distributed)
- Contains: Components used only in the demo app
- Key files:
  - `theme-provider.tsx`: next-themes wrapper
  - `theme-toggle.tsx`: Light/dark mode toggle button
  - `sidebar-nav.tsx`: Demo app navigation sidebar

**`lib/`:**
- Purpose: Shared utility functions
- Contains: Helper functions used across the codebase
- Key files:
  - `utils.ts`: `cn()` function for className merging

**`registry/vitality/ui/`:**
- Purpose: Distributable UI primitive components
- Contains: 48 UI components (buttons, inputs, dialogs, etc.)
- Key files: `button.tsx`, `dialog.tsx`, `form.tsx`, `card.tsx`, etc.

**`registry/vitality/blocks/`:**
- Purpose: Distributable composed block components
- Contains: Pre-built UI patterns combining multiple primitives
- Key files:
  - `header.tsx`: App header with search, user menu
  - `side-nav.tsx`: Collapsible sidebar navigation

**`public/r/`:**
- Purpose: Built registry output for distribution
- Contains: JSON files for each component (auto-generated)
- Generated: By `shadcn build` command

## Key File Locations

**Entry Points:**
- `app/layout.tsx`: Application root layout
- `app/page.tsx`: Homepage server component
- `registry.json`: Component registry manifest

**Configuration:**
- `next.config.ts`: Static export, base path for GitHub Pages
- `tsconfig.json`: TypeScript settings, path aliases
- `components.json`: shadcn CLI configuration
- `postcss.config.mjs`: PostCSS/Tailwind setup

**Core Logic:**
- `app/home-content.tsx`: Main demo page implementation
- `components/sidebar-nav.tsx`: Component listing data

**Styling:**
- `app/globals.css`: Design tokens, CSS variables, Tailwind theme
- `app/docs.css`: Documentation-specific styles

## Naming Conventions

**Files:**
- kebab-case for all files: `button.tsx`, `dropdown-menu.tsx`, `side-nav.tsx`
- Component files match component name: `Button` in `button.tsx`

**Directories:**
- lowercase, hyphenated: `registry/vitality/ui/`

**Components:**
- PascalCase: `Button`, `DropdownMenu`, `SideNav`
- Compound components: `Dialog`, `DialogContent`, `DialogHeader`

**Exports:**
- Named exports for components: `export { Button, buttonVariants }`
- Type exports alongside components: `export type { HeaderProps }`

## Where to Add New Code

**New UI Component:**
- Implementation: `registry/vitality/ui/<component-name>.tsx`
- Registry entry: Add to `registry.json` items array
- Demo: Add demo section in `app/home-content.tsx`
- Nav: Add to `components` array in `components/sidebar-nav.tsx`

**New Block Component:**
- Implementation: `registry/vitality/blocks/<block-name>.tsx`
- Registry entry: Add to `registry.json` with `type: "registry:block"`
- Demo: Add BlockCard section in `app/home-content.tsx`
- Nav: Add to `blocks` array in `components/sidebar-nav.tsx`

**New Utility Function:**
- Shared utilities: `lib/utils.ts` or new file in `lib/`

**Application-Only Component:**
- Implementation: `components/<component-name>.tsx`
- Note: These are NOT distributed via the registry

## Special Directories

**`out/`:**
- Purpose: Next.js static export output
- Generated: By `next build` command
- Committed: No (in .gitignore)

**`.next/`:**
- Purpose: Next.js build cache
- Generated: Automatically during development/build
- Committed: No (in .gitignore)

**`public/r/`:**
- Purpose: Registry distribution files
- Generated: By `shadcn build` command
- Committed: Yes (needed for deployment)

**`node_modules/`:**
- Purpose: npm dependencies
- Generated: By `npm install`
- Committed: No (in .gitignore)

## Import Path Aliases

**Configured in `tsconfig.json`:**
- `@/*` maps to project root

**Usage Examples:**
```typescript
import { cn } from "@/lib/utils"
import { Button } from "@/registry/vitality/ui/button"
import { Header } from "@/registry/vitality/blocks/header"
import { ThemeProvider } from "@/components/theme-provider"
```

---

*Structure analysis: 2026-01-30*
