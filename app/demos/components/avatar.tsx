import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/vitality/ui/avatar";
import type { Demo } from "../types";

export const avatarDemo: Demo = {
  id: "avatar",
  title: "Avatar",
  description: "An image element with a fallback for representing the user.",
  componentName: "avatar",
  isOfficial: true,
  render: () => (
    <div className="space-y-4">
      <div className="flex items-end gap-4">
        <Avatar size="xs">
          <AvatarFallback>XS</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarFallback>SM</AvatarFallback>
        </Avatar>
        <Avatar size="md">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>MD</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarFallback>LG</AvatarFallback>
        </Avatar>
        <Avatar size="xl">
          <AvatarFallback>XL</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex gap-4">
        <Avatar variant="neutral">
          <AvatarFallback variant="neutral">N</AvatarFallback>
        </Avatar>
        <Avatar variant="primary">
          <AvatarFallback variant="primary">P</AvatarFallback>
        </Avatar>
      </div>
    </div>
  ),
};
