import fs from "node:fs/promises";
import path from "node:path";
import { highlightCode } from "@/lib/highlight-code";
import { CopyButton } from "@/components/copy-button";

export async function ComponentSource({
  filePath,
  collapsible = true,
}: {
  filePath: string;
  collapsible?: boolean;
}) {
  const fullPath = path.join(process.cwd(), filePath);

  let code: string;
  try {
    code = await fs.readFile(fullPath, "utf-8");
  } catch {
    return (
      <p className="text-sm text-muted-foreground">
        Could not load source code.
      </p>
    );
  }

  // Extract just the render function content for cleaner display
  const renderMatch = code.match(/render:\s*\(\)\s*=>\s*\(?([\s\S]*?)\)?,?\s*};?\s*$/);
  const displayCode = renderMatch ? renderMatch[1].trim() : code;

  const highlightedCode = await highlightCode(displayCode, "tsx");

  if (!collapsible) {
    return (
      <div className="relative">
        <CodeBlock code={displayCode} highlightedCode={highlightedCode} />
      </div>
    );
  }

  return (
    <details className="group">
      <summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground transition-colors list-none flex items-center gap-2">
        <svg
          className="h-4 w-4 transition-transform group-open:rotate-90"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
        View code
      </summary>
      <div className="mt-3">
        <CodeBlock code={displayCode} highlightedCode={highlightedCode} />
      </div>
    </details>
  );
}

function CodeBlock({
  code,
  highlightedCode,
}: {
  code: string;
  highlightedCode: string;
}) {
  return (
    <div className="relative">
      <CopyButton text={code} />
      <div
        className="overflow-x-auto rounded-md border bg-muted/50 p-4 text-sm [&_pre]:!bg-transparent [&_pre]:!p-0 [&_code]:!bg-transparent"
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
      />
    </div>
  );
}
