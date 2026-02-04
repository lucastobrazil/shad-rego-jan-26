import { Label } from "@/registry/vitality/ui/label";
import { RadioGroup, RadioGroupItem } from "@/registry/vitality/ui/radio-group";
import type { Demo } from "../types";

export const radioGroupDemo: Demo = {
  id: "radio-group",
  title: "Radio Group",
  description:
    "A set of checkable buttons where no more than one can be checked at a time.",
  componentName: "radio-group",
  isOfficial: true,
  filePath: "app/demos/components/radio-group.tsx",
  render: () => (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="option-three" />
        <Label htmlFor="option-three">Option Three</Label>
      </div>
    </RadioGroup>
  ),
};
