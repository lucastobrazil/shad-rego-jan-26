import { ScrollArea } from "@/registry/vitality/ui/scroll-area";
import type { Demo } from "../types";

export const scrollAreaDemo: Demo = {
  id: "scroll-area",
  title: "Scroll Area",
  description:
    "Augments native scroll functionality for custom, cross-browser styling.",
  componentName: "scroll-area",
  isOfficial: false,
  filePath: "app/demos/components/scroll-area.tsx",
  render: () => (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="text-sm py-1">
            Tag {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};
