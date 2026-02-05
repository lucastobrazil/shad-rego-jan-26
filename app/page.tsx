import fs from "fs";
import path from "path";
import HomeContent from "./home-content";
import { componentDemos, blockDemos } from "./demos";
import { highlightCode } from "@/lib/highlight-code";

// Extract imports and render function body from demo source
function extractDemoCode(code: string): string {
  // Extract all import blocks (handles multi-line imports)
  // Match from "import" to the semicolon after the from clause
  const importMatches = code.match(/^import\s+[\s\S]*?from\s+["'][^"']+["'];?/gm) || [];

  // Filter out type imports from "../types"
  const imports = importMatches
    .filter(imp => !imp.includes('from "../types"') && !imp.includes("from '../types'"))
    .join('\n');

  // Extract content between render: () => ( and the closing ), at the end
  const renderMatch = code.match(/render:\s*\(\)\s*=>\s*\(\s*([\s\S]*)\s*\),?\s*\};?\s*$/);

  let renderContent = "";
  if (renderMatch) {
    renderContent = renderMatch[1];

    // Dedent: find minimum indentation of non-empty lines and remove it
    const lines = renderContent.split('\n');
    const nonEmptyLines = lines.filter(l => l.trim().length > 0);

    if (nonEmptyLines.length > 0) {
      const minIndent = Math.min(
        ...nonEmptyLines.map(l => {
          const match = l.match(/^(\s*)/);
          return match ? match[1].length : 0;
        })
      );

      renderContent = lines
        .map(l => (l.length >= minIndent ? l.slice(minIndent) : l))
        .join('\n')
        .trim();
    }
  }

  if (imports && renderContent) {
    return `${imports}\n\n${renderContent}`;
  }
  return renderContent || code;
}

export default async function Home() {
  const globalsCss = fs.readFileSync(
    path.join(process.cwd(), "app/globals.css"),
    "utf-8"
  );

  // Highlight the globals.css content
  const globalsCssHighlighted = await highlightCode(globalsCss, "css");

  // Pre-read and highlight all demo sources
  const demoSources: Record<string, string> = {};

  const allDemos = [...componentDemos, ...blockDemos];

  await Promise.all(
    allDemos.map(async (demo) => {
      try {
        const fullPath = path.join(process.cwd(), demo.filePath);
        const code = fs.readFileSync(fullPath, "utf-8");
        const renderContent = extractDemoCode(code);
        const highlighted = await highlightCode(renderContent, "tsx");
        demoSources[demo.id] = highlighted;
      } catch {
        demoSources[demo.id] = "";
      }
    })
  );

  return (
    <HomeContent
      globalsCss={globalsCss}
      globalsCssHighlighted={globalsCssHighlighted}
      demoSources={demoSources}
    />
  );
}
