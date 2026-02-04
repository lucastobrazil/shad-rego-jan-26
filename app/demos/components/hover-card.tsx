import { Button } from "@/registry/vitality/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/vitality/ui/hover-card";
import type { Demo } from "../types";

export const hoverCardDemo: Demo = {
  id: "hover-card",
  title: "Hover Card",
  description:
    "For sighted users to preview content available behind a link.",
  componentName: "hover-card",
  isOfficial: false,
  filePath: "app/demos/components/hover-card.tsx",
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">@nextjs</h4>
          <p className="text-sm">
            The React Framework – created and maintained by @vercel.
          </p>
          <div className="flex items-center pt-2">
            <span className="text-xs text-muted-foreground">
              Joined December 2021
            </span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};
