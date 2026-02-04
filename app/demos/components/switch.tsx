"use client";

import * as React from "react";
import { Label } from "@/registry/vitality/ui/label";
import { Switch } from "@/registry/vitality/ui/switch";
import type { Demo } from "../types";

function SwitchDemo() {
  const [airplaneMode, setAirplaneMode] = React.useState(false);
  const [notifications, setNotifications] = React.useState(true);

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Switch
          id="airplane-mode"
          checked={airplaneMode}
          onCheckedChange={setAirplaneMode}
        />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch
          id="notifications"
          checked={notifications}
          onCheckedChange={setNotifications}
        />
        <Label htmlFor="notifications">Notifications</Label>
      </div>
    </div>
  );
}

export const switchDemo: Demo = {
  id: "switch",
  title: "Switch",
  description: "A control that allows the user to toggle between on and off.",
  componentName: "switch",
  isOfficial: true,
  render: () => <SwitchDemo />,
};
