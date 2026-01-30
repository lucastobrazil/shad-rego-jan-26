# External Integrations

**Analysis Date:** 2026-01-30

## APIs & External Services

**None detected.** This is a static component library/registry with no backend API calls.

## Data Storage

**Databases:**
- None - Static site with no database

**File Storage:**
- Local filesystem only (build-time file reading)
- `app/page.tsx` reads `app/globals.css` at build time via Node.js `fs` module

**Caching:**
- None (client-side only, browser caching for static assets)

## Authentication & Identity

**Auth Provider:**
- None - No authentication implemented
- Header component has user avatar/menu UI but no actual auth integration

## Monitoring & Observability

**Error Tracking:**
- None

**Logs:**
- Browser console only (development)

## CI/CD & Deployment

**Hosting:**
- GitHub Pages
- URL: `https://lucastobrazil.github.io/shad-rego-jan-26`

**CI Pipeline:**
- GitHub Actions
- Workflow: `.github/workflows/deploy-registry.yml`
- Triggers: Push to `main` branch, manual dispatch

**Build Process:**
1. Checkout code
2. Setup Node.js 20
3. Install dependencies (`npm ci`)
4. Build shadcn registry (`npx shadcn build`)
5. Build Next.js static site (`npm run build`)
6. Deploy to GitHub Pages

## Environment Configuration

**Required env vars:**
- None required for development
- `NEXT_PUBLIC_BASE_PATH` - Set by CI workflow for production build

**Secrets location:**
- No secrets required
- GitHub Actions uses built-in `GITHUB_TOKEN` for Pages deployment

## Webhooks & Callbacks

**Incoming:**
- None

**Outgoing:**
- None

## Registry Distribution

**shadcn Registry:**
- Components are published as JSON files to `public/r/`
- Registry URL: `https://lucastobrazil.github.io/shad-rego-jan-26/r/`
- Consumers install via: `npx shadcn@latest add <REGISTRY_URL>/r/<component>.json`

**Registry Schema:**
- Defined in `registry.json`
- Built by `shadcn build` command
- Output: Individual component JSON files with source code and dependencies

## Theme Distribution

**CSS Variables:**
- Custom Vitality theme defined in `app/globals.css`
- Consumers copy CSS variables to their project's globals.css
- Light and dark mode support via `.dark` class

## Third-Party CDN Resources

**Images:**
- GitHub avatar used in demo: `https://github.com/shadcn.png`
- No other external image dependencies

---

*Integration audit: 2026-01-30*
