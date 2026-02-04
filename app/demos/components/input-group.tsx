import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
} from "@/registry/vitality/ui/input-group";
import { DollarSign, Mail, Search } from "lucide-react";
import type { Demo } from "../types";

export const inputGroupDemo: Demo = {
  id: "input-group",
  title: "Input Group",
  description: "Combines an input with addons like icons, text, or buttons.",
  componentName: "input-group",
  isOfficial: false,
  filePath: "app/demos/components/input-group.tsx",
  render: () => (
    <div className="space-y-4 max-w-sm">
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>
            <Search />
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="Search..." />
      </InputGroup>

      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>
            <Mail />
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="Email address" type="email" />
      </InputGroup>

      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>
            <DollarSign />
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="0.00" type="number" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>USD</InputGroupText>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput placeholder="90" type="number" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>1h 30m</InputGroupText>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="example.com" />
      </InputGroup>

      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon align="inline-end">
          <InputGroupButton>
            <Search className="size-4" />
            Search
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};
