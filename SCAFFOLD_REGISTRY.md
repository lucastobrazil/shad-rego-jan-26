# Shadcn Registry Scaffold

A custom shadcn component registry using the **"vitality"** theme, built with Next.js 15, Tailwind CSS v4, and TypeScript.

## Project Structure

```
├── app/
│   ├── globals.css          # Tailwind v4 theme configuration
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Demo page showcasing components
├── lib/
│   └── utils.ts             # cn() utility for class merging
├── registry/
│   └── vitality/
│       └── ui/
│           └── status-badge.tsx   # Sample component
├── public/
│   └── r/                   # Built registry JSON files (generated)
├── components.json          # shadcn CLI configuration
├── registry.json            # Registry entry point & item definitions
├── package.json
├── tsconfig.json
├── next.config.ts
└── postcss.config.mjs
```

## Key Configuration Files

### registry.json

The entry point that defines all registry items:

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  "name": "my-registry",
  "homepage": "https://my-registry.com",
  "items": [
    {
      "name": "status-badge",
      "type": "registry:ui",
      "title": "Status Badge",
      "description": "...",
      "dependencies": ["class-variance-authority"],
      "registryDependencies": [],
      "files": [
        {
          "path": "registry/vitality/ui/status-badge.tsx",
          "type": "registry:ui"
        }
      ]
    }
  ]
}
```

### components.json

shadcn CLI configuration with the custom "vitality" style:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "vitality",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
```

## Tailwind CSS v4 Setup

### Critical: Theme Configuration

Tailwind v4 requires explicit color definitions in the `@theme` block. Without this, utility classes like `bg-primary` or `border-border` won't work.

**globals.css structure:**

```css
@import "tailwindcss";

@theme inline {
  /* All colors must be defined here for utility classes to work */
  --color-background: hsl(var(--background));
  --color-foreground: hsl(var(--foreground));
  --color-primary: hsl(var(--primary));
  --color-primary-foreground: hsl(var(--primary-foreground));
  --color-muted: hsl(var(--muted));
  --color-muted-foreground: hsl(var(--muted-foreground));
  --color-border: hsl(var(--border));
  /* ... etc */
}

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
    /* ... HSL values without hsl() wrapper */
  }
  .dark {
    /* Dark mode overrides */
  }
}
```

### Build Error Fix

**Problem:** `Cannot apply unknown utility class 'border-border'`

**Solution:** In Tailwind v4, you cannot use `@apply border-border` directly. Instead:

```css
/* Don't do this in Tailwind v4 */
* {
  @apply border-border;
}

/* Do this instead */
* {
  border-color: var(--color-border);
}
```

## Commands

```bash
# Install dependencies
npm install

# Build registry only (generates public/r/*.json)
npm run build:registry

# Full build (registry + Next.js)
npm run build

# Development server
npm run dev
```

## Sample Component: StatusBadge

Located at `registry/vitality/ui/status-badge.tsx`

**Features:**

- 7 variants: `default`, `success`, `warning`, `error`, `info`, `neutral`, `outline`
- 3 sizes: `sm`, `md`, `lg`
- Optional status dot with pulse animation
- Full dark mode support
- Built with class-variance-authority (CVA)

**Usage:**

```tsx
import { StatusBadge } from "@/registry/vitality/ui/status-badge";

<StatusBadge variant="success">Online</StatusBadge>
<StatusBadge variant="error" pulse>Critical</StatusBadge>
<StatusBadge variant="info" size="lg" showDot={false}>Info</StatusBadge>
```

## Adding New Components

1. Create component in `registry/vitality/ui/your-component.tsx`
2. Add entry to `registry.json` items array:

```json
{
  "name": "your-component",
  "type": "registry:ui",
  "title": "Your Component",
  "description": "Description for LLMs and users",
  "dependencies": ["any-npm-packages"],
  "registryDependencies": ["button", "card"],
  "files": [
    {
      "path": "registry/vitality/ui/your-component.tsx",
      "type": "registry:ui"
    }
  ]
}
```

3. Run `npm run build:registry` to generate JSON

## Distribution

Once deployed, users install components via:

```bash
npx shadcn@latest add https://your-domain.com/r/status-badge.json
```

## Tech Stack

- **Next.js 15.1** with App Router
- **React 19**
- **Tailwind CSS v4** with `@tailwindcss/postcss`
- **TypeScript 5.7**
- **class-variance-authority** for component variants
- **clsx + tailwind-merge** via `cn()` utility

## References

- [shadcn Registry Docs](https://ui.shadcn.com/docs/registry)
- [Registry Getting Started](https://ui.shadcn.com/docs/registry/getting-started)
- [Official Registry Template](https://github.com/shadcn-ui/registry-template)
