import { Skeleton } from "@/registry/vitality/ui/skeleton";
import type { Demo } from "../types";

export const skeletonDemo: Demo = {
  id: "skeleton",
  title: "Skeleton",
  description: "Use to show a placeholder while content is loading.",
  componentName: "skeleton",
  isOfficial: true,
  render: () => (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full max-w-[250px]" />
        <Skeleton className="h-4 w-full max-w-[200px]" />
      </div>
    </div>
  ),
};
