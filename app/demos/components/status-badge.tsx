import { StatusBadge } from "@/registry/vitality/ui/status-badge";
import type { Demo } from "../types";

export const statusBadgeDemo: Demo = {
  id: "status-badge",
  title: "Status Badge",
  description:
    "A rectangular badge component for displaying status indicators.",
  componentName: "status-badge",
  isOfficial: true,
  filePath: "app/demos/components/status-badge.tsx",
  render: () => (
    <div className="flex flex-wrap gap-2">
      <StatusBadge>Default</StatusBadge>
      <StatusBadge variant="neutral">Neutral</StatusBadge>
    </div>
  ),
};
