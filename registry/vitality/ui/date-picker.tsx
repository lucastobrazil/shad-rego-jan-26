"use client"

import * as React from "react"
import { addDays, format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { type DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/vitality/ui/button"
import { Calendar } from "@/registry/vitality/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/vitality/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/vitality/ui/select"

const triggerStyles = cn(
  "border-input h-8 w-full min-w-0 rounded-md border bg-background px-3 py-1 text-base transition-[color,box-shadow] outline-none md:text-sm",
  "hover:bg-muted/50",
  "focus-visible:border-ring focus-visible:ring-ring focus-visible:ring-1",
  "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
  "flex items-center gap-2 text-left font-normal"
)

interface DatePickerProps {
  value?: Date
  onChange?: (date: Date | undefined) => void
  placeholder?: string
  disabled?: boolean
  className?: string
}

function DatePicker({
  value,
  onChange,
  placeholder = "Pick a date",
  disabled,
  className,
}: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          disabled={disabled}
          className={cn(
            triggerStyles,
            !value && "text-muted-foreground",
            className
          )}
        >
          <CalendarIcon className="size-4 shrink-0" />
          <span>{value ? format(value, "PPP") : placeholder}</span>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={value} onSelect={onChange} />
      </PopoverContent>
    </Popover>
  )
}

interface DateRangePickerProps {
  value?: DateRange
  onChange?: (range: DateRange | undefined) => void
  placeholder?: string
  disabled?: boolean
  className?: string
  numberOfMonths?: number
}

function DateRangePicker({
  value,
  onChange,
  placeholder = "Pick a date range",
  disabled,
  className,
  numberOfMonths = 2,
}: DateRangePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          disabled={disabled}
          className={cn(
            triggerStyles,
            !value?.from && "text-muted-foreground",
            className
          )}
        >
          <CalendarIcon className="size-4 shrink-0" />
          <span>
            {value?.from ? (
              value.to ? (
                <>
                  {format(value.from, "LLL dd, y")} - {format(value.to, "LLL dd, y")}
                </>
              ) : (
                format(value.from, "LLL dd, y")
              )
            ) : (
              placeholder
            )}
          </span>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="range"
          defaultMonth={value?.from}
          selected={value}
          onSelect={onChange}
          numberOfMonths={numberOfMonths}
        />
      </PopoverContent>
    </Popover>
  )
}

interface DatePickerWithPresetsProps {
  value?: Date
  onChange?: (date: Date | undefined) => void
  placeholder?: string
  disabled?: boolean
  className?: string
}

function DatePickerWithPresets({
  value,
  onChange,
  placeholder = "Pick a date",
  disabled,
  className,
}: DatePickerWithPresetsProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          disabled={disabled}
          className={cn(
            triggerStyles,
            !value && "text-muted-foreground",
            className
          )}
        >
          <CalendarIcon className="size-4 shrink-0" />
          <span>{value ? format(value, "PPP") : placeholder}</span>
        </button>
      </PopoverTrigger>
      <PopoverContent className="flex w-auto flex-col gap-2 p-2" align="start">
        <Select
          onValueChange={(v) => onChange?.(addDays(new Date(), parseInt(v)))}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a preset" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="0">Today</SelectItem>
            <SelectItem value="1">Tomorrow</SelectItem>
            <SelectItem value="3">In 3 days</SelectItem>
            <SelectItem value="7">In a week</SelectItem>
          </SelectContent>
        </Select>
        <Calendar mode="single" selected={value} onSelect={onChange} />
      </PopoverContent>
    </Popover>
  )
}

export { DatePicker, DateRangePicker, DatePickerWithPresets }
export type { DatePickerProps, DateRangePickerProps, DatePickerWithPresetsProps }
