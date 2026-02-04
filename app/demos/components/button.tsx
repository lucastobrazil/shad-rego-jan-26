import { Button } from "@/registry/vitality/ui/button";
import { Settings, User, Search } from "lucide-react";
import type { Demo } from "../types";

export const buttonDemo: Demo = {
  id: "button",
  title: "Button",
  description: "Displays a button or a component that looks like a button.",
  componentName: "button",
  isOfficial: true,
  filePath: "app/demos/components/button.tsx",
  render: () => (
    <>
      <div className="flex flex-wrap gap-2">
        <Button>Default</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button variant="destructive">Destructive</Button>
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
      </div>
      <div className="flex flex-wrap items-center gap-2 mt-4">
        <Button size="icon-sm">
          <Settings className="size-4" />
        </Button>
        <Button size="icon">
          <Settings className="size-4" />
        </Button>
        <Button size="icon" variant="primary">
          <User className="size-4" />
        </Button>
        <Button size="icon-sm" variant="ghost">
          <Search className="size-4" />
        </Button>
      </div>
    </>
  ),
};
