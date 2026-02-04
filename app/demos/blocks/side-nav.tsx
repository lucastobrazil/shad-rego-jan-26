import { Header } from "@/registry/vitality/blocks/header";
import { SideNav } from "@/registry/vitality/blocks/side-nav";
import type { BlockDemo } from "../types";

export const sideNavDemo: BlockDemo = {
  id: "side-nav",
  title: "Side Nav",
  description:
    "A collapsible sidebar navigation with icon and text items. Note that this demo includes the header component too.",
  componentName: "side-nav",
  isOfficial: false,
  render: () => (
    <>
      <Header />
      <div className="border rounded-lg overflow-hidden flex">
        <SideNav defaultExpanded={true} className="h-[500px]" />
        <div className="flex-1 h-auto bg-muted/30 flex items-center justify-center">
          <p className="text-muted-foreground">Main content area</p>
        </div>
      </div>
    </>
  ),
};
