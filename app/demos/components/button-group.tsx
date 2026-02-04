import { Button } from "@/registry/vitality/ui/button";
import { ButtonGroup } from "@/registry/vitality/ui/button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/vitality/ui/dropdown-menu";
import { MoreHorizontalIcon } from "lucide-react";
import type { Demo } from "../types";

export const buttonGroupDemo: Demo = {
  id: "button-group",
  title: "Button Group",
  description:
    "A container that groups related buttons together with consistent styling.",
  componentName: "button-group",
  isOfficial: true,
  filePath: "app/demos/components/button-group.tsx",
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Horizontal</p>
        <ButtonGroup>
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </div>
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">With Primary</p>
        <ButtonGroup>
          <Button>Cancel</Button>
          <Button variant="primary">Save</Button>
        </ButtonGroup>
      </div>
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Vertical</p>
        <ButtonGroup orientation="vertical" className="w-32">
          <Button>Top</Button>
          <Button>Middle</Button>
          <Button>Bottom</Button>
        </ButtonGroup>
      </div>
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Dropdown</p>
        <ButtonGroup className="w-32">
          <Button>Action</Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon">
                <MoreHorizontalIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ButtonGroup>
      </div>
    </div>
  ),
};
