import { Slider } from "@/registry/vitality/ui/slider";
import type { Demo } from "../types";

export const sliderDemo: Demo = {
  id: "slider",
  title: "Slider",
  description:
    "An input where the user selects a value from within a given range.",
  componentName: "slider",
  isOfficial: false,
  filePath: "app/demos/components/slider.tsx",
  render: () => (
    <div className="w-full max-w-sm space-y-4">
      <Slider defaultValue={[50]} max={100} step={1} />
      <Slider defaultValue={[25, 75]} max={100} step={1} />
    </div>
  ),
};
