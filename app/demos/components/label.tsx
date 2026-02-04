import { Input } from "@/registry/vitality/ui/input";
import { Label } from "@/registry/vitality/ui/label";
import type { Demo } from "../types";

export const labelDemo: Demo = {
  id: "label",
  title: "Label",
  description: "Renders an accessible label associated with controls.",
  componentName: "label",
  isOfficial: false,
  filePath: "app/demos/components/label.tsx",
  render: () => (
    <div className="space-y-4 max-w-sm">
      <div className="space-y-2">
        <Label htmlFor="email-label">Email</Label>
        <Input id="email-label" placeholder="Enter your email" />
      </div>
    </div>
  ),
};
