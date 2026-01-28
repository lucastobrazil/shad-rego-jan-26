"use client";

import { Badge } from "@/registry/vitality/ui/badge";
import { Separator } from "@/registry/vitality/ui/separator";

export const components: { name: string; isOfficial: boolean }[] = [
  { name: "Theming", isOfficial: true },
  { name: "Accordion", isOfficial: false },
  { name: "Aspect Ratio", isOfficial: false },
  { name: "Avatar", isOfficial: true },
  { name: "Badge", isOfficial: true },
  { name: "Breadcrumb", isOfficial: true },
  { name: "Button", isOfficial: true },
  { name: "Calendar", isOfficial: true },
  { name: "Callout", isOfficial: true },
  { name: "Card", isOfficial: false },
  { name: "Carousel", isOfficial: false },
  { name: "Checkbox", isOfficial: true },
  { name: "Collapsible", isOfficial: false },
  { name: "Command", isOfficial: false },
  { name: "Context Menu", isOfficial: false },
  { name: "Dialog", isOfficial: true },
  { name: "Drawer", isOfficial: false },
  { name: "Dropdown Menu", isOfficial: true },
  { name: "Hover Card", isOfficial: false },
  { name: "Input", isOfficial: true },
  { name: "Input OTP", isOfficial: false },
  { name: "Label", isOfficial: true },
  { name: "Menubar", isOfficial: false },
  { name: "Navigation Menu", isOfficial: false },
  { name: "Pagination", isOfficial: false },
  { name: "Popover", isOfficial: true },
  { name: "Progress", isOfficial: true },
  { name: "Radio Group", isOfficial: true },
  { name: "Resizable", isOfficial: false },
  { name: "Scroll Area", isOfficial: false },
  { name: "Select", isOfficial: true },
  { name: "Separator", isOfficial: true },
  { name: "Sheet", isOfficial: false },
  { name: "Skeleton", isOfficial: true },
  { name: "Slider", isOfficial: false },
  { name: "Sonner", isOfficial: true },
  { name: "Spinner", isOfficial: true },
  { name: "Status Badge", isOfficial: true },
  { name: "Switch", isOfficial: true },
  { name: "Table", isOfficial: true },
  { name: "Tabs", isOfficial: true },
  { name: "Textarea", isOfficial: true },
  { name: "Toggle", isOfficial: false },
  { name: "Toggle Group", isOfficial: false },
  { name: "Tooltip", isOfficial: true },
];

export function SidebarNav() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r bg-background p-6 overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Components</h2>
      <nav className="space-y-1">
        {components.map(({ name, isOfficial }) => (
          <a
            key={name}
            href={`#${name.toLowerCase().replace(/\s+/g, "-")}`}
            className="flex items-center justify-between px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
          >
            {name}
            {isOfficial && <Badge variant="neutral">Official</Badge>}
          </a>
        ))}
      </nav>
      <Separator className="my-4" />
      <p className="text-xs text-muted-foreground">
        Press{" "}
        <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs">Shift+C</kbd> to
        toggle theme
      </p>
    </aside>
  );
}
