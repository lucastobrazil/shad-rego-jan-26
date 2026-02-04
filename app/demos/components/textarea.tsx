import { Textarea } from "@/registry/vitality/ui/textarea";
import type { Demo } from "../types";

export const textareaDemo: Demo = {
  id: "textarea",
  title: "Textarea",
  description:
    "Displays a form textarea or a component that looks like a textarea.",
  componentName: "textarea",
  isOfficial: true,
  filePath: "app/demos/components/textarea.tsx",
  render: () => (
    <div className="max-w-sm">
      <Textarea placeholder="Type your message here." />
    </div>
  ),
};
