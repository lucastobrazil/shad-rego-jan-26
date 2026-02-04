"use client";

import * as React from "react";
import { Progress } from "@/registry/vitality/ui/progress";
import type { Demo } from "../types";

function ProgressDemo() {
  const [progress, setProgress] = React.useState(33);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-4 max-w-md">
      <Progress value={progress} />
      <Progress value={25} />
      <Progress value={75} />
    </div>
  );
}

export const progressDemo: Demo = {
  id: "progress",
  title: "Progress",
  description:
    "Displays an indicator showing the completion progress of a task.",
  componentName: "progress",
  isOfficial: true,
  render: () => <ProgressDemo />,
};
