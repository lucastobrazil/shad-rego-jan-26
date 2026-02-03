"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonGroupVariants = cva(
  "inline-flex items-center [&>button]:rounded-none [&>button]:border-r-0 [&>button:first-child]:rounded-l-md [&>button:last-child]:rounded-r-md [&>button:last-child]:border-r",
  {
    variants: {
      orientation: {
        horizontal:
          "[&>button]:rounded-none [&>button]:border-r-0 [&>button:first-child]:rounded-l-md [&>button:last-child]:rounded-r-md [&>button:last-child]:border-r",
        vertical:
          "flex-col [&>button]:rounded-none [&>button]:border-b-0 [&>button:first-child]:rounded-t-md [&>button:last-child]:rounded-b-md [&>button:last-child]:border-b [&>button]:border-r [&>button]:w-full",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  }
)

interface ButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonGroupVariants> {}

function ButtonGroup({
  className,
  orientation = "horizontal",
  ...props
}: ButtonGroupProps) {
  return (
    <div
      role="group"
      data-slot="button-group"
      data-orientation={orientation}
      className={cn(buttonGroupVariants({ orientation }), className)}
      {...props}
    />
  )
}

const buttonGroupSeparatorVariants = cva("bg-border shrink-0", {
  variants: {
    orientation: {
      vertical: "h-px w-full",
      horizontal: "h-full w-px",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
})

interface ButtonGroupSeparatorProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonGroupSeparatorVariants> {}

function ButtonGroupSeparator({
  className,
  orientation = "horizontal",
  ...props
}: ButtonGroupSeparatorProps) {
  return (
    <div
      role="separator"
      data-slot="button-group-separator"
      data-orientation={orientation}
      className={cn(buttonGroupSeparatorVariants({ orientation }), className)}
      {...props}
    />
  )
}

interface ButtonGroupTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  asChild?: boolean
}

function ButtonGroupText({
  className,
  asChild = false,
  ...props
}: ButtonGroupTextProps) {
  const Comp = asChild ? Slot : "span"
  return (
    <Comp
      data-slot="button-group-text"
      className={cn(
        "flex items-center justify-center px-3 text-sm text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

export { ButtonGroup, ButtonGroupSeparator, ButtonGroupText }
export type { ButtonGroupProps, ButtonGroupSeparatorProps, ButtonGroupTextProps }
