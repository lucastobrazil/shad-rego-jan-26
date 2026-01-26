import * as React from "react"
import { Loader2Icon } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const spinnerVariants = cva("animate-spin", {
  variants: {
    variant: {
      default: "text-foreground/70",
      inverse: "text-white",
    },
    size: {
      xs: "size-2",
      sm: "size-4",
      md: "size-6",
      lg: "size-12",
      xl: "size-24",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "sm",
  },
})

interface SpinnerProps
  extends React.ComponentProps<"svg">,
    VariantProps<typeof spinnerVariants> {}

function Spinner({ className, variant, size, ...props }: SpinnerProps) {
  return (
    <Loader2Icon
      data-slot="spinner"
      strokeLinecap="round"
      className={cn(spinnerVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Spinner, spinnerVariants }
