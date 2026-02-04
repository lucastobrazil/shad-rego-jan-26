import { ToggleGroup, ToggleGroupItem } from "@/registry/vitality/ui/toggle-group";
import { Bold, Italic, Underline } from "lucide-react";
import type { Demo } from "../types";

export const toggleGroupDemo: Demo = {
  id: "toggle-group",
  title: "Toggle Group",
  description: "A set of two-state buttons that can be toggled on or off.",
  componentName: "toggle-group",
  isOfficial: false,
  render: () => (
    <ToggleGroup type="multiple">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};
