"use client";

import { Badge } from "@/registry/vitality/ui/badge";
import { Separator } from "@/registry/vitality/ui/separator";

export const blocks: { name: string; isOfficial: boolean }[] = [
  { name: "Header", isOfficial: false },
];

export const components: {
  name: string;
  isOfficial: boolean;
  notYet?: boolean;
}[] = [
  { name: "Theming", isOfficial: true },
  { name: "Accordion", isOfficial: false },
  { name: "Aspect Ratio", isOfficial: false },
  { name: "Audit Trail", isOfficial: true, notYet: true },
  { name: "Avatar", isOfficial: true },
  { name: "Badge", isOfficial: true },
  { name: "Box", isOfficial: true, notYet: true },
  { name: "Breadcrumb", isOfficial: true },
  { name: "Button", isOfficial: true },
  { name: "Calendar", isOfficial: true },
  { name: "Callout", isOfficial: true },
  { name: "Card", isOfficial: false },
  { name: "Carousel", isOfficial: false },
  { name: "Checkbox", isOfficial: true },
  { name: "Chip", isOfficial: true, notYet: true },
  { name: "Collapsible", isOfficial: false },
  { name: "Combo Button", isOfficial: true, notYet: true },
  { name: "Command", isOfficial: false },
  { name: "Context Menu", isOfficial: false },
  { name: "Currency Input", isOfficial: true, notYet: true },
  { name: "Date Picker", isOfficial: true, notYet: true },
  { name: "Date Range Picker", isOfficial: true, notYet: true },
  { name: "Dialog", isOfficial: true },
  { name: "Divider", isOfficial: true, notYet: true },
  { name: "Drawer", isOfficial: false },
  { name: "Dropdown Menu", isOfficial: true },
  { name: "Duration Input", isOfficial: true, notYet: true },
  { name: "Empty", isOfficial: true },
  { name: "Flex", isOfficial: true, notYet: true },
  { name: "Form Field", isOfficial: true, notYet: true },
  { name: "Hover Card", isOfficial: false },
  { name: "Icon Button", isOfficial: true, notYet: true },
  { name: "Icons", isOfficial: true, notYet: true },
  { name: "Input", isOfficial: true },
  { name: "Input OTP", isOfficial: false },
  { name: "Kbd", isOfficial: false },
  { name: "Label", isOfficial: true },
  { name: "Linear Progress", isOfficial: true, notYet: true },
  { name: "Link", isOfficial: true, notYet: true },
  { name: "Menubar", isOfficial: false },
  { name: "Modal", isOfficial: true, notYet: true },
  { name: "Navigation Menu", isOfficial: false },
  { name: "Pagination", isOfficial: false },
  { name: "Password Input", isOfficial: true, notYet: true },
  { name: "Popover", isOfficial: true },
  { name: "Progress", isOfficial: true },
  { name: "Radio Group", isOfficial: true },
  { name: "Resizable", isOfficial: false },
  { name: "Scroll Area", isOfficial: false },
  { name: "Search Input", isOfficial: true, notYet: true },
  { name: "Search Select Input", isOfficial: true, notYet: true },
  { name: "Select", isOfficial: true },
  { name: "Separator", isOfficial: true },
  { name: "Sheet", isOfficial: false },
  { name: "Shortcuts", isOfficial: true, notYet: true },
  { name: "Sidebar", isOfficial: true, notYet: true },
  { name: "Skeleton", isOfficial: true },
  { name: "Skeleton Box", isOfficial: true, notYet: true },
  { name: "Slider", isOfficial: false },
  { name: "Sonner", isOfficial: true },
  { name: "Spinner", isOfficial: true },
  { name: "Stack", isOfficial: true, notYet: true },
  { name: "Status Badge", isOfficial: true },
  { name: "Switch", isOfficial: true },
  { name: "Table", isOfficial: true },
  { name: "Tabs", isOfficial: true },
  { name: "Textarea", isOfficial: true },
  { name: "Time Picker", isOfficial: true, notYet: true },
  { name: "Toaster", isOfficial: true, notYet: true },
  { name: "Toggle", isOfficial: false },
  { name: "Toggle Group", isOfficial: false },
  { name: "Tooltip", isOfficial: true },
  { name: "Truncate Content", isOfficial: true, notYet: true },
  { name: "Typography", isOfficial: true },
  { name: "Vitality Provider", isOfficial: true, notYet: true },
];

export function SidebarNav() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r bg-background p-6 overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Components</h2>
      <nav className="space-y-1">
        {components.map(({ name, isOfficial, notYet }) => (
          <a
            key={name}
            href={`#${name.toLowerCase().replace(/\s+/g, "-")}`}
            className="flex items-center justify-between px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
          >
            <span className={notYet ? "text-muted-foreground" : ""}>
              {name}
            </span>
            <div className="flex gap-1">
              {notYet && <Badge variant="neutral">Soon</Badge>}
              {isOfficial && !notYet && <Badge>Vitality</Badge>}
            </div>
          </a>
        ))}
      </nav>
      <Separator className="my-4" />
      <h2 className="text-lg font-semibold mb-4">Blocks</h2>
      <nav className="space-y-1">
        {blocks.map(({ name, isOfficial }) => (
          <a
            key={name}
            href={`#${name.toLowerCase().replace(/\s+/g, "-")}`}
            className="flex items-center justify-between px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
          >
            {name}
            {isOfficial && <Badge variant="neutral">Vitality</Badge>}
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
