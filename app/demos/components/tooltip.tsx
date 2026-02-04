import { Button } from "@/registry/vitality/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/vitality/ui/tooltip";
import type { Demo } from "../types";

export const tooltipDemo: Demo = {
  id: "tooltip",
  title: "Tooltip",
  description: "A popup that displays information related to an element.",
  componentName: "tooltip",
  isOfficial: true,
  filePath: "app/demos/components/tooltip.tsx",
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button>Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This is a tooltip</p>
      </TooltipContent>
    </Tooltip>
  ),
};
