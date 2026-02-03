"use client";

import * as React from "react";
import { Menu, Filter } from "lucide-react";
import { Badge } from "@/registry/vitality/ui/badge";
import { Button } from "@/registry/vitality/ui/button";
import { Separator } from "@/registry/vitality/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/registry/vitality/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/registry/vitality/ui/dropdown-menu";

export const blocks: { name: string; isOfficial: boolean }[] = [
  { name: "Header", isOfficial: false },
  { name: "Side Nav", isOfficial: false },
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
  { name: "Breadcrumb", isOfficial: true },
  { name: "Button", isOfficial: true },
  { name: "Button Group", isOfficial: true },
  { name: "Calendar", isOfficial: true },
  { name: "Callout", isOfficial: true },
  { name: "Card", isOfficial: false },
  { name: "Carousel", isOfficial: false },
  { name: "Checkbox", isOfficial: true },
  { name: "Chip", isOfficial: true, notYet: true },
  { name: "Collapsible", isOfficial: false },
  { name: "Command", isOfficial: false },
  { name: "Context Menu", isOfficial: false },
  { name: "Currency Input", isOfficial: true, notYet: true },
  { name: "Date Picker", isOfficial: true },
  { name: "Date Range Picker", isOfficial: true, notYet: true },
  { name: "Dialog", isOfficial: true },
  { name: "Drawer", isOfficial: false },
  { name: "Dropdown Menu", isOfficial: true },
  { name: "Duration Input", isOfficial: true, notYet: true },
  { name: "Empty", isOfficial: true },
  { name: "Form Field", isOfficial: true, notYet: true },
  { name: "Hover Card", isOfficial: false },
  { name: "Icon Button", isOfficial: true, notYet: true },
  { name: "Icons", isOfficial: true, notYet: true },
  { name: "Input", isOfficial: true },
  { name: "Input Group", isOfficial: false },
  { name: "Input OTP", isOfficial: false },
  { name: "Kbd", isOfficial: false },
  { name: "Label", isOfficial: false },
  { name: "Linear Progress", isOfficial: true, notYet: true },
  { name: "Menubar", isOfficial: false },
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
  { name: "Skeleton", isOfficial: true },
  { name: "Skeleton Box", isOfficial: true, notYet: true },
  { name: "Slider", isOfficial: false },
  { name: "Spinner", isOfficial: true },
  { name: "Status Badge", isOfficial: true },
  { name: "Switch", isOfficial: true },
  { name: "Table", isOfficial: true },
  { name: "Tabs", isOfficial: true },
  { name: "Textarea", isOfficial: true },
  { name: "Time Picker", isOfficial: true, notYet: true },
  { name: "Toaster", isOfficial: true },
  { name: "Toggle", isOfficial: false },
  { name: "Toggle Group", isOfficial: false },
  { name: "Tooltip", isOfficial: true },
  { name: "Truncate Content", isOfficial: true, notYet: true },
  { name: "Typography", isOfficial: true },
];

type FilterOption = "all" | "vitality" | "soon";

function NavContent({ onLinkClick }: { onLinkClick?: () => void }) {
  const [filter, setFilter] = React.useState<FilterOption>("all");

  const filteredComponents = components.filter(({ isOfficial, notYet }) => {
    if (filter === "all") return true;
    if (filter === "vitality") return isOfficial && !notYet;
    if (filter === "soon") return notYet;
    return true;
  });

  return (
    <>
      <nav className="mb-4">
        <a
          href="#getting-started"
          onClick={onLinkClick}
          className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-muted transition-colors"
        >
          Getting Started
        </a>
      </nav>
      <Separator className="mb-4" />
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Components</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
              <Filter
                className={`h-4 w-4 ${filter !== "all" ? "text-primary" : ""}`}
              />
              <span className="sr-only">Filter components</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuRadioGroup
              value={filter}
              onValueChange={(v) => setFilter(v as FilterOption)}
            >
              <DropdownMenuRadioItem value="all">All</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="vitality">
                Vitality
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="soon">Soon</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <nav className="space-y-1">
        {filteredComponents.map(({ name, isOfficial, notYet }) => (
          <a
            key={name}
            href={`#${name.toLowerCase().replace(/\s+/g, "-")}`}
            onClick={onLinkClick}
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
            onClick={onLinkClick}
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
    </>
  );
}

export function SidebarNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {/* Mobile hamburger button */}
      <div className="fixed top-4 left-4 z-50 lg:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="sm" className="h-10 w-10 p-0">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-6 overflow-y-auto">
            <NavContent onLinkClick={() => setOpen(false)} />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop sidebar - hidden on mobile */}
      <aside className="fixed left-0 top-0 h-screen w-64 border-r bg-background p-6 overflow-y-auto hidden lg:block">
        <NavContent />
      </aside>
    </>
  );
}
