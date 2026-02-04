"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Box, Component } from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/vitality/ui/command";
import { components, blocks } from "@/app/demos";

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSelect = (name: string) => {
    setOpen(false);
    const id = name.toLowerCase().replace(/\s+/g, "-");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search components..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Components">
          {components.map((component) => (
              <CommandItem
                key={component.name}
                value={component.name}
                onSelect={() => handleSelect(component.name)}
              >
                <Component className="mr-2 size-4" />
                <span>{component.name}</span>
                {component.isOfficial && (
                  <span className="ml-auto text-xs text-muted-foreground">
                    Vitality
                  </span>
                )}
              </CommandItem>
            ))}
        </CommandGroup>
        <CommandGroup heading="Blocks">
          {blocks.map((block) => (
            <CommandItem
              key={block.name}
              value={block.name}
              onSelect={() => handleSelect(block.name)}
            >
              <Box className="mr-2 size-4" />
              <span>{block.name}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
