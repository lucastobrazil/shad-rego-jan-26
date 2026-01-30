# Testing Patterns

**Analysis Date:** 2026-01-30

## Test Framework

**Runner:**
- No test framework configured
- No test runner installed (no Jest, Vitest, or testing-library in dependencies)

**Assertion Library:**
- Not applicable - no testing setup

**Run Commands:**
```bash
# No test commands available
# package.json scripts:
# - dev: next dev
# - build: shadcn build && next build
# - build:registry: shadcn build
# - start: next start
# - lint: next lint
```

## Test File Organization

**Location:**
- No test files exist in the project source
- No `__tests__` directories
- No `*.test.tsx` or `*.spec.tsx` files

**Naming:**
- Not established - no test files present

**Structure:**
- Not established - no test files present

## Test Structure

**Suite Organization:**
- Not applicable - no tests written

**Recommended Pattern (if tests were to be added):**
```typescript
import { render, screen } from "@testing-library/react"
import { Button } from "@/registry/vitality/ui/button"

describe("Button", () => {
  it("renders with default variant", () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole("button")).toHaveClass("bg-muted")
  })

  it("renders with primary variant", () => {
    render(<Button variant="primary">Click me</Button>)
    expect(screen.getByRole("button")).toHaveClass("bg-primary")
  })

  it("renders as child element when asChild is true", () => {
    render(
      <Button asChild>
        <a href="/link">Link Button</a>
      </Button>
    )
    expect(screen.getByRole("link")).toBeInTheDocument()
  })
})
```

## Mocking

**Framework:** Not applicable - no test framework

**Recommended Patterns (if testing were added):**
```typescript
// Mocking next-themes
jest.mock("next-themes", () => ({
  useTheme: () => ({ theme: "light", setTheme: jest.fn() }),
  ThemeProvider: ({ children }: { children: React.ReactNode }) => children,
}))

// Mocking Radix UI portals
jest.mock("@radix-ui/react-dialog", () => ({
  ...jest.requireActual("@radix-ui/react-dialog"),
  Portal: ({ children }: { children: React.ReactNode }) => children,
}))
```

**What to Mock:**
- Theme providers (next-themes)
- Radix UI Portal components for JSDOM testing
- External services or APIs
- Browser APIs not available in JSDOM

**What NOT to Mock:**
- Component internal logic
- Utility functions (cn, cva)
- CSS class merging

## Fixtures and Factories

**Test Data:**
- Not applicable - no test infrastructure

**Recommended Location:**
- `__tests__/fixtures/` for shared test data
- Co-located `*.fixtures.ts` for component-specific data

## Coverage

**Requirements:** No coverage requirements (no testing configured)

**View Coverage:**
```bash
# Not available - no test framework
```

## Test Types

**Unit Tests:**
- Not implemented
- Would target: UI components, utility functions, custom hooks

**Integration Tests:**
- Not implemented
- Would target: Form submissions, theme switching, component compositions

**E2E Tests:**
- Not implemented
- Framework options: Playwright, Cypress

## Recommended Testing Setup

If testing were to be added, consider:

**Package Installation:**
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom @vitejs/plugin-react jsdom
```

**Vitest Config (`vitest.config.ts`):**
```typescript
import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    globals: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
})
```

**Setup File (`vitest.setup.ts`):**
```typescript
import "@testing-library/jest-dom"
```

## Common Testing Scenarios for This Codebase

**Component Variant Testing:**
```typescript
// Test all variants are applied correctly
it.each([
  ["default", "bg-muted"],
  ["primary", "bg-primary"],
  ["destructive", "bg-destructive"],
])("applies %s variant classes", (variant, expectedClass) => {
  render(<Button variant={variant as any}>Test</Button>)
  expect(screen.getByRole("button")).toHaveClass(expectedClass)
})
```

**Form Component Testing:**
```typescript
// Test form field integration
import { useForm } from "react-hook-form"
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/registry/vitality/ui/form"

function TestForm() {
  const form = useForm({ defaultValues: { name: "" } })
  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
          </FormItem>
        )}
      />
    </Form>
  )
}
```

**Theme Toggle Testing:**
```typescript
// Test theme switching behavior
it("toggles theme on click", async () => {
  const setTheme = jest.fn()
  jest.mocked(useTheme).mockReturnValue({ theme: "light", setTheme, themes: [], systemTheme: "light", resolvedTheme: "light" })

  render(<ThemeToggle />)
  await userEvent.click(screen.getByRole("button"))

  expect(setTheme).toHaveBeenCalledWith("dark")
})
```

## Accessibility Testing

**Recommendation:**
```typescript
import { axe, toHaveNoViolations } from "jest-axe"

expect.extend(toHaveNoViolations)

it("has no accessibility violations", async () => {
  const { container } = render(<Button>Accessible Button</Button>)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
```

## Visual Regression Testing

**Not Configured**

Consider tools like:
- Storybook + Chromatic
- Percy
- Playwright visual comparisons

---

*Testing analysis: 2026-01-30*
