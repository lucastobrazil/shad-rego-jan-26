# Technology Stack

**Analysis Date:** 2026-01-30

## Languages

**Primary:**
- TypeScript 5.7.2 - All application code (`.ts`, `.tsx` files)

**Secondary:**
- CSS - Styling via Tailwind CSS 4.0 (`app/globals.css`, `app/docs.css`)

## Runtime

**Environment:**
- Node.js 20.x (specified in GitHub Actions workflow)

**Package Manager:**
- npm (inferred from `package-lock.json` presence)
- Lockfile: present (`package-lock.json`)

## Frameworks

**Core:**
- Next.js 15.1.0 - React framework with App Router
- React 19.0.0 - UI library
- React DOM 19.0.0 - DOM rendering

**UI Component System:**
- shadcn/ui 2.3.0 - Component registry system (dev dependency)
- Radix UI Primitives - Headless accessible components (multiple packages)
- class-variance-authority 0.7.1 - Variant-based styling

**Styling:**
- Tailwind CSS 4.0.0 - Utility-first CSS framework
- @tailwindcss/postcss 4.0.0 - PostCSS integration
- tailwind-merge 2.6.0 - Class merging utility
- clsx 2.1.1 - Conditional class names

**Build/Dev:**
- shadcn CLI 2.3.0 - Registry building tool
- TypeScript 5.7.2 - Type checking

## Key Dependencies

**Critical:**
- `next` 15.1.0 - Application framework
- `react` 19.0.0 - UI rendering
- `next-themes` 0.4.6 - Dark/light mode theming

**UI Components (Radix UI):**
- `@radix-ui/react-accordion` 1.2.12
- `@radix-ui/react-avatar` 1.1.11
- `@radix-ui/react-checkbox` 1.3.3
- `@radix-ui/react-dialog` 1.1.15
- `@radix-ui/react-dropdown-menu` 2.1.16
- `@radix-ui/react-label` 2.1.8
- `@radix-ui/react-navigation-menu` 1.2.14
- `@radix-ui/react-popover` 1.1.15
- `@radix-ui/react-select` 2.2.6
- `@radix-ui/react-slot` 1.2.4
- `@radix-ui/react-tabs` 1.1.13
- `@radix-ui/react-tooltip` 2.8
- (and more - see `package.json` for full list)

**Form Handling:**
- `react-hook-form` 7.71.1 - Form state management
- `@hookform/resolvers` 5.2.2 - Validation resolvers
- `zod` 4.3.6 - Schema validation

**Utilities:**
- `date-fns` 4.1.0 - Date manipulation
- `lucide-react` 0.469.0 - Icon library
- `sonner` 2.0.7 - Toast notifications
- `cmdk` 1.1.1 - Command palette
- `vaul` 1.1.2 - Drawer component
- `embla-carousel-react` 8.6.0 - Carousel
- `react-day-picker` 9.13.0 - Date picker
- `react-resizable-panels` 4.5.3 - Resizable layouts
- `input-otp` 1.4.2 - OTP input

## Configuration

**TypeScript:**
- Config: `tsconfig.json`
- Target: ES2017
- Module: ESNext with bundler resolution
- Strict mode: enabled
- Path alias: `@/*` maps to project root

**Next.js:**
- Config: `next.config.ts`
- Output: Static export (`output: "export"`)
- Base path: `/shad-rego-jan-26` (production only)
- Images: Unoptimized (for static export)

**Tailwind CSS:**
- Config: Inline via `app/globals.css` (Tailwind 4.0 style)
- PostCSS: `postcss.config.mjs`
- Custom theme with Vitality design tokens

**shadcn/ui:**
- Config: `components.json`
- Style: "vitality" (custom)
- RSC: enabled
- Icon library: lucide

**Environment:**
- No `.env` files present
- Environment variables used:
  - `NODE_ENV` - Build mode detection
  - `NEXT_PUBLIC_BASE_PATH` - Set in CI for deployment

## Platform Requirements

**Development:**
- Node.js 20.x
- npm (any recent version)

**Production:**
- GitHub Pages (static hosting)
- No server runtime required (static export)

## Build Commands

```bash
npm run dev           # Start development server
npm run build         # Build registry + Next.js static export
npm run build:registry # Build shadcn registry only
npm run start         # Serve production build
npm run lint          # Run Next.js linting
```

---

*Stack analysis: 2026-01-30*
