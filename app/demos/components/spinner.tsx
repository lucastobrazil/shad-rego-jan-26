import { Spinner } from "@/registry/vitality/ui/spinner";
import type { Demo } from "../types";

export const spinnerDemo: Demo = {
  id: "spinner",
  title: "Spinner",
  description: "A loading spinner with size and variant options.",
  componentName: "spinner",
  isOfficial: true,
  render: () => (
    <div className="space-y-4">
      <div className="flex items-end gap-4">
        <Spinner size="xs" />
        <Spinner size="sm" />
        <Spinner size="md" />
        <Spinner size="lg" />
        <Spinner size="xl" />
      </div>
      <div className="flex gap-4">
        <Spinner variant="default" />
        <div className="bg-primary p-2 rounded">
          <Spinner variant="inverse" />
        </div>
      </div>
    </div>
  ),
};
