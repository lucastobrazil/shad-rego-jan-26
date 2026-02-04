"use client";

import * as React from "react";
import { Calendar } from "@/registry/vitality/ui/calendar";
import type { Demo } from "../types";

function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  );
}

export const calendarDemo: Demo = {
  id: "calendar",
  title: "Calendar",
  description: "A date field component that allows users to enter and edit date.",
  componentName: "calendar",
  isOfficial: true,
  filePath: "app/demos/components/calendar.tsx",
  render: () => <CalendarDemo />,
};
