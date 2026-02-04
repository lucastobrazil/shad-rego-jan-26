import {
  Callout,
  CalloutTitle,
  CalloutDescription,
} from "@/registry/vitality/ui/callout";
import {
  AlertCircle,
  AlertTriangle,
  CheckCircle,
  Info,
} from "lucide-react";
import type { Demo } from "../types";

export const calloutDemo: Demo = {
  id: "callout",
  title: "Callout",
  description: "Displays important messages with severity variants.",
  componentName: "callout",
  isOfficial: true,
  filePath: "app/demos/components/callout.tsx",
  render: () => (
    <div className="space-y-4">
      <Callout>
        <Info className="size-4" />
        <CalloutTitle>Muted</CalloutTitle>
        <CalloutDescription>
          This is a muted callout for general information.
        </CalloutDescription>
      </Callout>
      <Callout variant="info">
        <Info className="size-4" />
        <CalloutTitle>Info</CalloutTitle>
        <CalloutDescription>
          This is an info callout for helpful information.
        </CalloutDescription>
      </Callout>
      <Callout variant="success">
        <CheckCircle className="size-4" />
        <CalloutTitle>Success</CalloutTitle>
        <CalloutDescription>
          This is a success callout for positive feedback.
        </CalloutDescription>
      </Callout>
      <Callout variant="warning">
        <AlertTriangle className="size-4" />
        <CalloutTitle>Warning</CalloutTitle>
        <CalloutDescription>
          This is a warning callout for cautionary messages.
        </CalloutDescription>
      </Callout>
      <Callout variant="destructive">
        <AlertCircle className="size-4" />
        <CalloutTitle>Destructive</CalloutTitle>
        <CalloutDescription>
          This is a destructive callout for errors.
        </CalloutDescription>
      </Callout>
      <Callout variant="info" size="compact">
        <CalloutDescription>Compact inline callout</CalloutDescription>
      </Callout>
      <Callout variant="warning" size="blockCompact">
        <AlertTriangle className="size-3" />
        <CalloutTitle>Block Compact</CalloutTitle>
        <CalloutDescription>A smaller block-level callout.</CalloutDescription>
      </Callout>
    </div>
  ),
};
