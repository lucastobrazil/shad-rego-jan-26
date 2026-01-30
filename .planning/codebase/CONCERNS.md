# Codebase Concerns

**Analysis Date:** 2026-01-30

## Tech Debt

**Monolithic Demo Page:**
- Issue: `app/home-content.tsx` is a 1666-line file containing all component demos and the entire showcase application
- Files: `app/home-content.tsx`
- Impact: Difficult to maintain, hard to navigate, increases bundle size for demo page
- Fix approach: Split into separate demo components per UI element, lazy load demos

**Duplicate Navigation Data:**
- Issue: Component/block navigation data is defined in `components/sidebar-nav.tsx` with `isOfficial` and `notYet` flags, but not derived from `registry.json`
- Files: `components/sidebar-nav.tsx`, `registry.json`
- Impact: Manual synchronization required when adding components; potential for mismatches
- Fix approach: Generate navigation from registry.json or create shared source of truth

**Hardcoded Demo Data in Header Block:**
- Issue: Header block contains hardcoded user info ("Dr Andrew Demo", "Brisbane Medical Centres", "GTU99999") that should be configurable
- Files: `registry/vitality/blocks/header.tsx` (lines 154-163)
- Impact: Users installing the block get demo data instead of using props
- Fix approach: Move hardcoded values to props with defaults, or document clearly as demo-only

**Missing Side Nav from Registry:**
- Issue: `side-nav.tsx` block exists in filesystem but is not registered in `registry.json`
- Files: `registry/vitality/blocks/side-nav.tsx`, `registry.json`
- Impact: Block cannot be installed via npx shadcn; users must manually copy
- Fix approach: Add side-nav entry to registry.json with proper dependencies

**Unused Imports in Side Nav:**
- Issue: Several lucide-react icons imported but never used in side-nav.tsx
- Files: `registry/vitality/blocks/side-nav.tsx` (lines 5-8: Sun, Calendar, Users, Mail, BookUser, BarChart3, Store)
- Impact: Larger bundle size, lint warnings
- Fix approach: Remove unused imports

## Known Bugs

**None detected via static analysis.**

## Security Considerations

**Clipboard Access Without User Gesture Context:**
- Risk: CopyButton uses `navigator.clipboard.writeText()` which may fail in some browsers without proper user gesture context
- Files: `app/home-content.tsx` (lines 244-248)
- Current mitigation: None - silent failure possible
- Recommendations: Add try/catch with user feedback; consider using execCommand fallback

**External Image Source:**
- Risk: Avatar component demo loads external image from github.com
- Files: `app/home-content.tsx` (line 479)
- Current mitigation: None
- Recommendations: For production registries, use local assets or CSP headers

## Performance Bottlenecks

**Large Single-Page Demo:**
- Problem: All 48+ component demos render on single page load
- Files: `app/home-content.tsx`
- Cause: No code splitting or lazy loading for demo sections
- Improvement path: Implement virtual scrolling or lazy load demo sections as they scroll into view

**Server-Side File Read:**
- Problem: `app/page.tsx` reads globals.css synchronously on every request
- Files: `app/page.tsx` (lines 6-9)
- Cause: Using `fs.readFileSync` to pass CSS to client for theming demo
- Improvement path: Build-time extraction or static import; this is mitigated by static export but adds build complexity

## Fragile Areas

**home-content.tsx Component Cards:**
- Files: `app/home-content.tsx`
- Why fragile: Tight coupling between ComponentCard/BlockCard wrapper functions and the navigation in sidebar-nav.tsx via string matching on component names
- Safe modification: Ensure component `id` props match navigation href anchors exactly
- Test coverage: None

**Theme Toggle Keyboard Shortcut:**
- Files: `components/theme-toggle.tsx` (lines 16-25)
- Why fragile: Global keyboard listener for Shift+C could conflict with other shortcuts; no way to disable
- Safe modification: Add conditional check or configurable keybinding
- Test coverage: None

**Registry URL Hardcoding:**
- Files: `app/home-content.tsx` (line 239)
- Why fragile: Registry URL `https://lucastobrazil.github.io/shad-rego-jan-26` is hardcoded; requires code change to update
- Safe modification: Move to environment variable or config file
- Test coverage: None

## Scaling Limits

**Component Count:**
- Current capacity: 48 UI components, 2 blocks registered
- Limit: Demo page performance degrades as more components added
- Scaling path: Paginate demos, implement search/filter, or separate documentation site

## Dependencies at Risk

**None critical detected.**

All dependencies are well-maintained:
- Radix UI primitives: actively maintained
- shadcn tooling: actively maintained
- Tailwind CSS v4: latest stable

## Missing Critical Features

**No Testing Infrastructure:**
- Problem: Zero test files in the codebase (no .test.ts, .spec.ts files)
- Blocks: Cannot verify component behavior, accessibility, or prevent regressions
- Files: None exist in `app/`, `components/`, `registry/`

**No ESLint/Prettier Configuration:**
- Problem: `npm run lint` defined but no eslint config file exists
- Blocks: Inconsistent code style, lint command likely fails or uses default Next.js config only

**No Component Documentation:**
- Problem: Components lack JSDoc/TSDoc comments for props and usage
- Blocks: Consumers must read source code to understand API

**Incomplete "notYet" Components:**
- Problem: sidebar-nav.tsx lists ~25 components marked `notYet: true` (Audit Trail, Box, Chip, etc.) that don't exist
- Files: `components/sidebar-nav.tsx` (lines 27-98)
- Impact: Navigation shows components that can't be installed; confusing for users

## Test Coverage Gaps

**Complete Absence of Tests:**
- What's not tested: All 48 UI components, 2 blocks, theme provider, theme toggle, sidebar nav, home content
- Files: All files in `app/`, `components/`, `registry/vitality/`
- Risk: Any change could break components without detection; accessibility regressions possible
- Priority: High

**No Visual Regression Testing:**
- What's not tested: Component appearance across themes (light/dark)
- Risk: Style changes could unintentionally alter component appearance
- Priority: Medium

**No Accessibility Testing:**
- What's not tested: Keyboard navigation, screen reader compatibility, ARIA compliance
- Risk: Components may not meet WCAG standards
- Priority: High (Radix primitives help, but custom styling could break a11y)

---

*Concerns audit: 2026-01-30*
