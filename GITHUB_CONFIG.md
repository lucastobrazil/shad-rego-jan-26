# GitHub Configuration

## Repository Setup

- **Repository**: `lucastobrazil/shad-rego-jan-26`
- **Visibility**: Public
- **Default Branch**: `main`

## GitHub Pages

### Configuration

1. Go to **Settings** > **Pages**
2. Under **Build and deployment**:
   - **Source**: GitHub Actions
3. The site will be available at: `https://lucastobrazil.github.io/shad-rego-jan-26/`

### Deployment Workflow

The deployment is handled automatically via GitHub Actions. On every push to `main`:

1. Installs dependencies with `npm ci`
2. Builds the shadcn registry with `npx shadcn build`
3. Builds the Next.js static site with `npm run build`
4. Deploys both to GitHub Pages

**Workflow file**: `.github/workflows/deploy-registry.yml`

```yaml
name: Deploy Registry to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Build registry
        run: npx shadcn build

      - name: Build Next.js site
        run: npm run build
        env:
          NEXT_PUBLIC_BASE_PATH: /shad-rego-jan-26

      - name: Prepare deployment
        run: |
          mkdir -p deploy
          cp -r out/* deploy/
          cp -r public/r deploy/r

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: deploy

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## URLs

| Resource | URL |
|----------|-----|
| Demo Site | https://lucastobrazil.github.io/shad-rego-jan-26/ |
| Registry Index | https://lucastobrazil.github.io/shad-rego-jan-26/r/index.json |
| Component JSON | https://lucastobrazil.github.io/shad-rego-jan-26/r/{component}.json |

## Installing Components

To install a component from this registry:

```bash
npx shadcn@latest add https://lucastobrazil.github.io/shad-rego-jan-26/{component}
```

Example:
```bash
npx shadcn@latest add https://lucastobrazil.github.io/shad-rego-jan-26/button
```

## Next.js Configuration

The `next.config.ts` is configured for GitHub Pages static export:

```typescript
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/shad-rego-jan-26" : "",
  assetPrefix: isProd ? "/shad-rego-jan-26/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

## Registry Configuration

The `registry.json` points to the GitHub Pages URL:

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  "name": "my-registry",
  "homepage": "https://lucastobrazil.github.io/shad-rego-jan-26",
  "items": [...]
}
```
