"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden rounded-full select-none",
  {
    variants: {
      variant: {
        neutral: "",
        primary: "",
      },
      size: {
        xs: "size-4 text-[0.5rem]",
        sm: "size-5 text-[0.625rem]",
        md: "size-6 text-[0.75rem]",
        lg: "size-8 text-[0.875rem]",
        xl: "size-10 text-[1rem]",
      },
    },
    defaultVariants: {
      variant: "neutral",
      size: "lg",
    },
  }
)

const avatarFallbackVariants = cva(
  "flex size-full items-center justify-center rounded-full font-medium",
  {
    variants: {
      variant: {
        neutral: "bg-muted text-muted-foreground",
        primary: "bg-primary text-primary-foreground",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  }
)

interface AvatarProps
  extends React.ComponentProps<typeof AvatarPrimitive.Root>,
    VariantProps<typeof avatarVariants> {}

function Avatar({ className, variant, size, ...props }: AvatarProps) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-variant={variant}
      data-size={size}
      className={cn(avatarVariants({ variant, size }), className)}
      {...props}
    />
  )
}

interface AvatarFallbackProps
  extends React.ComponentProps<typeof AvatarPrimitive.Fallback>,
    VariantProps<typeof avatarFallbackVariants> {}

function AvatarFallback({ className, variant, ...props }: AvatarFallbackProps) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(avatarFallbackVariants({ variant }), className)}
      {...props}
    />
  )
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  )
}

function AvatarBadge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="avatar-badge"
      className={cn(
        "bg-primary text-primary-foreground ring-background absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full ring-2 select-none size-2.5",
        className
      )}
      {...props}
    />
  )
}

function AvatarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group"
      className={cn(
        "*:data-[slot=avatar]:ring-background group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2",
        className
      )}
      {...props}
    />
  )
}

function AvatarGroupCount({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group-count"
      className={cn(
        "bg-muted text-muted-foreground ring-background relative flex size-8 shrink-0 items-center justify-center rounded-full text-sm ring-2",
        className
      )}
      {...props}
    />
  )
}

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
}
