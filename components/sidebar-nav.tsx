"use client";

import * as React from "react";
import { Menu, Filter } from "lucide-react";
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
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/vitality/ui/tooltip";
import { components, blocks } from "@/app/demos";

type FilterOption = "all" | "vitality" | "not-vitality";

function NavContent({ onLinkClick }: { onLinkClick?: () => void }) {
  const [filter, setFilter] = React.useState<FilterOption>("all");

  const filteredComponents = components.filter(({ isOfficial }) => {
    if (filter === "all") return true;
    if (filter === "vitality") return isOfficial;
    if (filter === "not-vitality") return !isOfficial;
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
      <h2 className="text-lg font-semibold mb-4">Blocks</h2>
      <nav className="space-y-1">
        {blocks.map(({ name, isOfficial }) => (
          <a
            key={name}
            href={`#${name.toLowerCase().replace(/\s+/g, "-")}`}
            onClick={onLinkClick}
            className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
          >
            <span>{name}</span>
            {isOfficial && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                </TooltipTrigger>
                <TooltipContent>
                  This component exists in Vitality
                </TooltipContent>
              </Tooltip>
            )}
          </a>
        ))}
      </nav>
      <Separator className="my-4" />
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
              <DropdownMenuRadioItem value="not-vitality">
                Not Vitality
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <nav className="space-y-1">
        {filteredComponents.map(({ name, isOfficial }) => (
          <a
            key={name}
            href={`#${name.toLowerCase().replace(/\s+/g, "-")}`}
            onClick={onLinkClick}
            className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
          >
            <span>{name}</span>
            {isOfficial && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                </TooltipTrigger>
                <TooltipContent>
                  This component exists in Vitality
                </TooltipContent>
              </Tooltip>
            )}
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
