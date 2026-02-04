"use client";

import * as React from "react";
import {
  DatePicker,
  DateRangePicker,
  DatePickerWithPresets,
} from "@/registry/vitality/ui/date-picker";
import { type DateRange } from "react-day-picker";
import type { Demo } from "../types";

function DatePickerDemo() {
  const [pickerDate, setPickerDate] = React.useState<Date | undefined>();
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>();
  const [presetDate, setPresetDate] = React.useState<Date | undefined>();

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Basic</p>
        <div className="max-w-[280px]">
          <DatePicker
            value={pickerDate}
            onChange={setPickerDate}
            placeholder="Select a date"
          />
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Date Range</p>
        <div className="max-w-[320px]">
          <DateRangePicker
            value={dateRange}
            onChange={setDateRange}
            placeholder="Select date range"
          />
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">With Presets</p>
        <div className="max-w-[280px]">
          <DatePickerWithPresets
            value={presetDate}
            onChange={setPresetDate}
            placeholder="Pick a date"
          />
        </div>
      </div>
    </div>
  );
}

export const datePickerDemo: Demo = {
  id: "date-picker",
  title: "Date Picker",
  description: "A date picker component with popover calendar.",
  componentName: "date-picker",
  isOfficial: true,
  render: () => <DatePickerDemo />,
};
