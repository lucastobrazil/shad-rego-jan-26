import { Button } from "@/registry/vitality/ui/button";
import {
  Empty,
  EmptyIcon,
  EmptyTitle,
  EmptyDescription,
} from "@/registry/vitality/ui/empty";
import { FolderOpen } from "lucide-react";
import type { Demo } from "../types";

export const emptyDemo: Demo = {
  id: "empty",
  title: "Empty",
  description:
    "Empty state placeholder for when there is no data to display.",
  componentName: "empty",
  isOfficial: true,
  filePath: "app/demos/components/empty.tsx",
  render: () => (
    <Empty className="min-h-[250px]">
      <EmptyIcon>
        <FolderOpen className="h-10 w-10 text-muted-foreground" />
      </EmptyIcon>
      <EmptyTitle>No projects found</EmptyTitle>
      <EmptyDescription>
        Get started by creating a new project.
      </EmptyDescription>
      <Button>Create Project</Button>
    </Empty>
  ),
};
