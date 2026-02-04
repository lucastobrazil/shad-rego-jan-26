export { componentDemos } from "./components";
export { blockDemos } from "./blocks";
export type { Demo, BlockDemo } from "./types";

import { componentDemos } from "./components";
import { blockDemos } from "./blocks";

// Single source of truth for sidebar nav metadata
// Theming is a special section (not a demo), so add it first
export const components = [
  { name: "Theming", isOfficial: true },
  ...componentDemos.map((d) => ({
    name: d.title,
    isOfficial: d.isOfficial,
  })),
];

export const blocks = blockDemos.map((d) => ({
  name: d.title,
  isOfficial: d.isOfficial,
}));
