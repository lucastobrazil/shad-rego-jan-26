import { Toggle } from "@/registry/vitality/ui/toggle";
import { Bold, Italic, Underline } from "lucide-react";
import type { Demo } from "../types";

export const toggleDemo: Demo = {
  id: "toggle",
  title: "Toggle",
  description: "A two-state button that can be either on or off.",
  componentName: "toggle",
  isOfficial: false,
  filePath: "app/demos/components/toggle.tsx",
  render: () => (
    <div className="flex gap-2">
      <Toggle aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Toggle underline">
        <Underline className="h-4 w-4" />
      </Toggle>
    </div>
  ),
};
