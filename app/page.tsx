import fs from "fs";
import path from "path";
import HomeContent from "./home-content";
import { componentDemos, blockDemos } from "./demos";
import { highlightCode } from "@/lib/highlight-code";

// Extract imports and render function body from demo source
function extractDemoCode(code: string): string {
  // Extract all import statements (handles multi-line imports)
  const importRegex = /^import\s+(?:(?:\{[^}]*\}|[^;]+)\s+from\s+)?["'][^"']+["'];?$/gm;
  const multiLineImportRegex = /^import\s+\{[\s\S]*?\}\s+from\s+["'][^"']+["'];?$/gm;

  // Get all imports, filtering out type imports from "../types"
  const imports: string[] = [];

  // Handle multi-line imports first
  const multiLineMatches = code.match(/import\s+\{[^}]*\}\s+from\s+["'][^"']+["'];?/g) || [];
  for (const match of multiLineMatches) {
    if (!match.includes('from "../types"') && !match.includes("from '../types'")) {
      imports.push(match.replace(/\s+/g, ' ').replace(/{ /g, '{\n  ').replace(/ }/g, '\n}').replace(/, /g, ',\n  '));
    }
  }

  // Simpler approach: get everything before "export const" and filter
  const beforeExport = code.split(/export const \w+Demo/)[0];
  const importSection = beforeExport
    .split('\n')
    .filter(line => line.trim().length > 0)
    .filter(line => !line.includes('from "../types"') && !line.includes("from '../types'"))
    .join('\n');

  // Match the render function content
  const renderMatch = code.match(
    /render:\s*\(\)\s*=>\s*(?:\(\s*)?([\s\S]*?)(?:\s*\))?,?\s*};?\s*$/
  );

  let renderContent = "";
  if (renderMatch) {
    renderContent = renderMatch[1].trim();
    // Remove trailing parenthesis if present
    if (renderContent.endsWith("),")) {
      renderContent = renderContent.slice(0, -2);
    }
  }

  // Combine imports and render content
  if (importSection && renderContent) {
    return `${importSection}\n\n${renderContent}`;
  }
  return renderContent || code;
}

export default async function Home() {
  const globalsCss = fs.readFileSync(
    path.join(process.cwd(), "app/globals.css"),
    "utf-8"
  );

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

  return <HomeContent globalsCss={globalsCss} demoSources={demoSources} />;
}
