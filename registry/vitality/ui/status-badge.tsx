import * as React from "react"
import { Slot } from "radix-ui"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const statusBadgeVariants = cva(
  "inline-flex items-center justify-center w-fit whitespace-nowrap shrink-0 px-2 py-0.5 text-xs font-medium border border-transparent rounded-md gap-1 [&>svg]:size-3 [&>svg]:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        neutral: "bg-foreground/70 text-muted [a&]:hover:bg-foreground/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface StatusBadgeProps
  extends React.ComponentProps<"span">,
    VariantProps<typeof statusBadgeVariants> {
  asChild?: boolean
}

function StatusBadge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: StatusBadgeProps) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="status-badge"
      data-variant={variant}
      className={cn(statusBadgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { StatusBadge, statusBadgeVariants }
