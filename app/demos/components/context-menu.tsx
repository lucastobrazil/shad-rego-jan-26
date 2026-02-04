import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/registry/vitality/ui/context-menu";
import type { Demo } from "../types";

export const contextMenuDemo: Demo = {
  id: "context-menu",
  title: "Context Menu",
  description:
    "Displays a menu located at the pointer, triggered by a right-click.",
  componentName: "context-menu",
  isOfficial: false,
  filePath: "app/demos/components/context-menu.tsx",
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-full max-w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem>Back</ContextMenuItem>
        <ContextMenuItem>Forward</ContextMenuItem>
        <ContextMenuItem>Reload</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};
