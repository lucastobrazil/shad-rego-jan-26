import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const calloutVariants = cva(
  "relative w-full rounded-lg [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg~*]:pl-7 [&>svg]:pointer-events-none [&>svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        muted: "text-foreground bg-muted [&>svg]:text-foreground",
        destructive:
          "text-destructive bg-destructive/10 [&>svg]:text-destructive",
        warning: "text-warning bg-warning/10 [&>svg]:text-warning",
        success: "text-success bg-success/10 [&>svg]:text-success",
        info: "text-info bg-info/10 [&>svg]:text-info",
        brand: "text-brand bg-brand/10 [&>svg]:text-brand",
      },
      size: {
        default: "px-4 py-3 text-sm grid has-[>svg]:gap-x-3",
        compact:
          "px-0 py-0 text-xs bg-transparent! border-transparent! inline",
        blockCompact:
          "px-3 py-2 text-xs flex! gap-x-1!",
      },
    },
    defaultVariants: {
      variant: "muted",
      size: "default",
    },
  }
)

function Callout({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof calloutVariants>) {
  return (
    <div
      data-slot="callout"
      data-variant={variant}
      data-size={size}
      role="alert"
      className={cn(calloutVariants({ variant, size }), className)}
      {...props}
    />
  )
}

function CalloutTitle({
  className,
  ...props
}: React.ComponentProps<"h5">) {
  return (
    <h5
      data-slot="callout-title"
      className={cn(
        "font-semibold leading-none",
        "[[data-size=blockCompact]_&]:inline [[data-size=blockCompact]_&]:mr-1",
        className
      )}
      {...props}
    />
  )
}

function CalloutDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="callout-description"
      className={cn(
        "text-sm [&_p]:leading-relaxed",
        "[[data-size=compact]_&]:text-xs",
        "[[data-size=blockCompact]_&]:text-xs [[data-size=blockCompact]_&]:inline",
        className
      )}
      {...props}
    />
  )
}

export { Callout, CalloutTitle, CalloutDescription, calloutVariants }
