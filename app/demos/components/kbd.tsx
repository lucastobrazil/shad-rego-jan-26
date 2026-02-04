import { Kbd } from "@/registry/vitality/ui/kbd";
import type { Demo } from "../types";

export const kbdDemo: Demo = {
  id: "kbd",
  title: "Kbd",
  description: "Displays keyboard keys or shortcuts.",
  componentName: "kbd",
  isOfficial: false,
  filePath: "app/demos/components/kbd.tsx",
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex items-center gap-1">
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </div>
      <div className="flex items-center gap-1">
        <Kbd>Ctrl</Kbd>
        <span className="text-muted-foreground">+</span>
        <Kbd>C</Kbd>
      </div>
      <div className="flex items-center gap-1">
        <Kbd>Shift</Kbd>
        <span className="text-muted-foreground">+</span>
        <Kbd>Enter</Kbd>
      </div>
      <Kbd>Esc</Kbd>
    </div>
  ),
};
