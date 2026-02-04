import { AspectRatio } from "@/registry/vitality/ui/aspect-ratio";
import type { Demo } from "../types";

export const aspectRatioDemo: Demo = {
  id: "aspect-ratio",
  title: "Aspect Ratio",
  description: "Displays content within a desired ratio.",
  componentName: "aspect-ratio",
  isOfficial: false,
  render: () => (
    <div className="w-full max-w-[450px]">
      <AspectRatio
        ratio={16 / 9}
        className="bg-muted rounded-md flex items-center justify-center"
      >
        <span className="text-muted-foreground">16:9</span>
      </AspectRatio>
    </div>
  ),
};
