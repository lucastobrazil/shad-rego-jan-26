import { Input } from "@/registry/vitality/ui/input";
import type { Demo } from "../types";

export const inputDemo: Demo = {
  id: "input",
  title: "Input",
  description:
    "Displays a form input field or a component that looks like an input field.",
  componentName: "input",
  isOfficial: true,
  render: () => (
    <div className="space-y-4 max-w-sm">
      <Input placeholder="Email" type="email" />
      <Input placeholder="Password" type="password" />
      <Input placeholder="Disabled" disabled />
    </div>
  ),
};
