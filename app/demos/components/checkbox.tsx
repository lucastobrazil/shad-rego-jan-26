import { Checkbox } from "@/registry/vitality/ui/checkbox";
import { Label } from "@/registry/vitality/ui/label";
import type { Demo } from "../types";

export const checkboxDemo: Demo = {
  id: "checkbox",
  title: "Checkbox",
  description:
    "A control that allows the user to toggle between checked and not checked.",
  componentName: "checkbox",
  isOfficial: true,
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="newsletter" defaultChecked />
        <Label htmlFor="newsletter">Subscribe to newsletter</Label>
      </div>
    </div>
  ),
};
