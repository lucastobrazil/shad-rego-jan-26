import { Button } from "@/registry/vitality/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/vitality/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";
import type { Demo } from "../types";

export const collapsibleDemo: Demo = {
  id: "collapsible",
  title: "Collapsible",
  description: "An interactive component which expands/collapses a panel.",
  componentName: "collapsible",
  isOfficial: false,
  filePath: "app/demos/components/collapsible.tsx",
  render: () => (
    <Collapsible className="w-full max-w-[350px] space-y-2">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-3 font-mono text-sm">
        @radix-ui/primitives
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @radix-ui/colors
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
};
