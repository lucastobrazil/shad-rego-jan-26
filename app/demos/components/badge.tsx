import { Badge } from "@/registry/vitality/ui/badge";
import type { Demo } from "../types";

export const badgeDemo: Demo = {
  id: "badge",
  title: "Badge",
  description: "Displays a badge or a component that looks like a badge.",
  componentName: "badge",
  isOfficial: true,
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="neutral">Neutral</Badge>
      <Badge>3</Badge>
      <Badge variant="neutral">42</Badge>
    </div>
  ),
};
