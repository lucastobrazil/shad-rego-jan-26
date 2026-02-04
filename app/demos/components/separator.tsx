import { Separator } from "@/registry/vitality/ui/separator";
import type { Demo } from "../types";

export const separatorDemo: Demo = {
  id: "separator",
  title: "Separator",
  description: "Visually or semantically separates content.",
  componentName: "separator",
  isOfficial: true,
  filePath: "app/demos/components/separator.tsx",
  render: () => (
    <div className="space-y-4">
      <div>
        <p className="text-sm">Above the separator</p>
      </div>
      <Separator />
      <div>
        <p className="text-sm">Below the separator</p>
      </div>
    </div>
  ),
};
