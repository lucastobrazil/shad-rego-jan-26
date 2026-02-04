import { Header } from "@/registry/vitality/blocks/header";
import type { BlockDemo } from "../types";

export const headerDemo: BlockDemo = {
  id: "header",
  title: "Header",
  description: "A responsive header with navigation and mobile menu.",
  componentName: "header",
  isOfficial: false,
  render: () => (
    <div className="border rounded-lg overflow-hidden">
      <Header
        user={{
          name: "Andrew Demo",
          email: "john@example.com",
          avatarFallback: "AD",
        }}
      />
      <div className="h-[400px] border border-t-0" />
    </div>
  ),
};
