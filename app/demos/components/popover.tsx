import { Button } from "@/registry/vitality/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/vitality/ui/popover";
import type { Demo } from "../types";

export const popoverDemo: Demo = {
  id: "popover",
  title: "Popover",
  description: "Displays rich content in a portal, triggered by a button.",
  componentName: "popover",
  isOfficial: true,
  filePath: "app/demos/components/popover.tsx",
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-2">
          <h4 className="font-medium">Dimensions</h4>
          <p className="text-sm text-muted-foreground">
            Set the dimensions for the layer.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  ),
};
