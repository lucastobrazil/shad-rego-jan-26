# Coding Conventions

**Analysis Date:** 2026-01-30

## Naming Patterns

**Files:**
- Component files: `kebab-case.tsx` (e.g., `theme-toggle.tsx`, `side-nav.tsx`, `input-otp.tsx`)
- Utility files: `kebab-case.ts` (e.g., `utils.ts`)
- CSS files: `kebab-case.css` (e.g., `globals.css`, `docs.css`)

**Functions:**
- Components: `PascalCase` (e.g., `Button`, `Card`, `ThemeToggle`)
- Hooks: `camelCase` with `use` prefix (e.g., `useFormField`)
- Helper functions: `camelCase` (e.g., `cn`)
- Variant definitions: `camelCase` with `Variants` suffix (e.g., `buttonVariants`, `badgeVariants`)

**Variables:**
- Constants: `camelCase` for module-level (e.g., `defaultUser`, `defaultNavItems`)
- Context: `PascalCase` with `Context` suffix (e.g., `FormFieldContext`, `FormItemContext`)

**Types:**
- Interfaces: `PascalCase` with descriptive suffixes (e.g., `HeaderProps`, `SideNavItem`, `AvatarProps`)
- Type exports: `PascalCase` (e.g., `VariantProps`, `ClassValue`)

## Code Style

**Formatting:**
- No explicit Prettier/ESLint configuration in project root
- Consistent 2-space indentation
- Double quotes for JSX attributes
- Single quotes for imports (mixed usage observed)
- Semicolons at end of statements (mixed usage - some files omit them)
- Trailing commas in multi-line objects and arrays

**Linting:**
- Next.js built-in ESLint via `next lint`
- No custom ESLint rules configured

## Import Organization

**Order:**
1. React imports first: `import * as React from "react"`
2. External library imports (Radix, lucide-react, class-variance-authority)
3. Internal utilities: `import { cn } from "@/lib/utils"`
4. Internal components: `import { Button } from "@/registry/vitality/ui/button"`

**Path Aliases:**
- `@/*` maps to project root (configured in `tsconfig.json`)
- Common aliases used:
  - `@/lib/utils` for utility functions
  - `@/components/*` for app-level components
  - `@/registry/vitality/ui/*` for UI primitives
  - `@/registry/vitality/blocks/*` for block components

## Component Patterns

**UI Component Structure:**
```tsx
"use client" // Only when using hooks or browser APIs

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Define variants using cva
const componentVariants = cva(
  "base-classes",
  {
    variants: {
      variant: { ... },
      size: { ... },
    },
    defaultVariants: { ... },
  }
)

// Function component (not const arrow function)
function Component({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"element"> & VariantProps<typeof componentVariants> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : "element"

  return (
    <Comp
      data-slot="component"
      data-variant={variant}
      data-size={size}
      className={cn(componentVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Component, componentVariants }
```

**Key Patterns:**
- Use `function` declarations (not `const` arrow functions) for components
- Include `data-slot` attribute for component identification
- Include `data-variant` and `data-size` for variant tracking
- Use `React.ComponentProps<"element">` for native element props
- Support `asChild` prop with Radix Slot for composition
- Spread `...props` last after explicit props

**Typography Components Exception:**
- Typography components use `React.forwardRef` pattern
- Include `displayName` assignment for debugging

## Error Handling

**Patterns:**
- Custom hooks throw explicit errors for misuse:
  ```tsx
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }
  ```
- Early returns for null/undefined conditions:
  ```tsx
  if (!body) {
    return null
  }
  ```
- Form validation errors displayed via `FormMessage` component

## Logging

**Framework:** Not configured - no logging framework in use

**Patterns:**
- No explicit logging in components
- Console methods not used in source code

## Comments

**When to Comment:**
- Comments are sparse - code is self-documenting
- JSDoc/TSDoc not used on components or functions
- Inline comments used sparingly for complex CSS selectors or calculations

**Example from globals.css:**
```css
/* Font Sizes - Tailwind Defaults (for reference)
 * --font-size-xs: 0.75rem;      12px  → text-xs
 * ...
 */
```

## Function Design

**Size:** Components are focused and single-purpose

**Parameters:**
- Destructure props in function signature
- Group related props (className first, then variant props, then asChild, then ...props)
- Use default values in destructuring where appropriate

**Return Values:**
- Components return JSX directly
- Hooks return objects with named properties
- Utility functions return single values

## Module Design

**Exports:**
- Named exports only (no default exports)
- Export components and their variant definitions together
- Export types/interfaces alongside components

**Barrel Files:**
- No barrel files (index.ts) used
- Components imported directly from their file paths

## CSS Patterns

**Styling Approach:**
- Tailwind CSS v4 with CSS variables
- CSS-in-JS via className strings
- `cn()` utility for conditional class merging (clsx + tailwind-merge)

**CSS Variable Naming:**
- Color tokens: `--color-{name}` (e.g., `--color-primary`, `--color-muted-foreground`)
- Spacing: `--spacing-{scale}` or `--spacing-base`
- Radius: `--radius-{size}` (e.g., `--radius-default`, `--radius-large`)
- Semantic colors: `--{variant}` (e.g., `--destructive`, `--success`, `--warning`)

**Dark Mode:**
- Uses CSS custom properties with `.dark` class
- Custom variant: `@custom-variant dark (&:is(.dark *))`
- Theme toggled via `next-themes` library

## Variant System (CVA)

**Pattern for variants:**
```tsx
const variants = cva(
  "base classes always applied",
  {
    variants: {
      variant: {
        default: "classes for default",
        primary: "classes for primary",
        destructive: "classes for destructive",
      },
      size: {
        default: "h-8 px-4",
        sm: "h-7 px-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
```

## Client Components

**"use client" Directive:**
- Required for components using React hooks (useState, useEffect, useContext)
- Required for components using browser APIs (window, document)
- Required for components wrapping Radix UI primitives that need interactivity
- NOT required for pure server components that only render JSX

---

*Convention analysis: 2026-01-30*
