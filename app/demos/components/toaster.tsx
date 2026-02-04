import { toast } from "sonner";
import { Button } from "@/registry/vitality/ui/button";
import type { Demo } from "../types";

export const toasterDemo: Demo = {
  id: "toaster",
  title: "Toaster (Sonner)",
  description: "An opinionated toast component for React.",
  componentName: "sonner",
  isOfficial: true,
  filePath: "app/demos/components/toaster.tsx",
  render: () => (
    <div className="flex gap-2">
      <Button onClick={() => toast("Event has been created")}>
        Show Toast
      </Button>
      <Button
        onClick={() =>
          toast.success("Success!", {
            description: "Your changes have been saved.",
          })
        }
      >
        Success Toast
      </Button>
      <Button
        onClick={() =>
          toast.error("Error!", {
            description: "Something went wrong.",
          })
        }
      >
        Error Toast
      </Button>
    </div>
  ),
};
