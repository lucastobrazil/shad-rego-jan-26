"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { CommandMenu } from "@/components/command-menu";
import { Badge } from "@/registry/vitality/ui/badge";
import { Button } from "@/registry/vitality/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/vitality/ui/card";
import { Separator } from "@/registry/vitality/ui/separator";
import { TooltipProvider } from "@/registry/vitality/ui/tooltip";
import { SidebarNav } from "@/components/sidebar-nav";
import { componentDemos, blockDemos, components, blocks } from "./demos";

const REGISTRY_URL = "https://lucastobrazil.github.io/shad-rego-jan-26";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = React.useState(false);

  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      className="h-8 w-8 p-0 shrink-0"
      onClick={copy}
    >
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      <span className="sr-only">Copy to clipboard</span>
    </Button>
  );
}

// Helper to look up isOfficial status by component title
function getIsOfficial(title: string): boolean {
  const component = components.find((c) => c.name === title);
  return component?.isOfficial ?? false;
}

// Helper to look up isOfficial status by block title
function getBlockIsOfficial(title: string): boolean {
  const block = blocks.find((b) => b.name === title);
  return block?.isOfficial ?? false;
}

function ComponentCard({
  id,
  title,
  description,
  componentName,
  children,
}: {
  id: string;
  title: string;
  description: string;
  componentName: string;
  children: React.ReactNode;
}) {
  const installCommand = `npx shadcn@latest add ${REGISTRY_URL}/r/${componentName}.json`;
  const isOfficial = getIsOfficial(title);

  return (
    <Card id={id} className="scroll-mt-20">
      <CardHeader>
        <div className="flex items-center gap-2">
          <CardTitle>{title}</CardTitle>
          {isOfficial && <Badge>Vitality</Badge>}
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {children}
        <div className="mt-4 pt-4 border-t">
          <p className="text-xs text-muted-foreground mb-2">Install</p>
          <div className="flex items-center gap-2 bg-muted px-3 py-2 rounded-md">
            <code className="text-xs font-mono overflow-x-auto flex-1">
              {installCommand}
            </code>
            <CopyButton text={installCommand} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function BlockCard({
  id,
  title,
  description,
  blockName,
  children,
  className,
}: {
  id: string;
  title: string;
  description: string;
  blockName: string;
  children: React.ReactNode;
  className?: string;
}) {
  const installCommand = `npx shadcn@latest add ${REGISTRY_URL}/r/${blockName}.json`;
  const isOfficial = getBlockIsOfficial(title);

  return (
    <Card id={id} className={`scroll-mt-20 ${className ?? ""}`}>
      <CardHeader>
        <div className="flex items-center gap-2">
          <CardTitle>{title}</CardTitle>
          <Badge>Block</Badge>
          {isOfficial && <Badge>Vitality</Badge>}
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {children}
        <div className="mt-4 pt-4 border-t">
          <p className="text-xs text-muted-foreground mb-2">Install</p>
          <div className="flex items-center gap-2 bg-muted px-3 py-2 rounded-md">
            <code className="text-xs font-mono overflow-x-auto flex-1">
              {installCommand}
            </code>
            <CopyButton text={installCommand} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function HomeContent({ globalsCss }: { globalsCss: string }) {
  return (
    <TooltipProvider>
      <div className="flex min-h-screen">
        <ThemeToggle />
        <CommandMenu />

        <SidebarNav />

        {/* Main Content */}
        <main className="flex-1 p-4 pt-16 lg:ml-64 lg:p-8 lg:pt-8">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="mb-12">
              <h1 className="text-4xl font-bold mb-2">
                Vitality Component Registry
              </h1>
              <p className="text-muted-foreground">
                A custom shadcn/ui component library built with the vitality
                theme.
              </p>
            </div>

            {/* Getting Started */}
            <Card id="getting-started" className="scroll-mt-20">
              <CardHeader>
                <CardTitle>Getting Started</CardTitle>
                <CardDescription>
                  Pull components into your project and optionally wrap them
                  with your own conventions.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <h4 className="font-medium">What is this?</h4>
                  <p className="text-sm text-muted-foreground">
                    This registry can be used to install the source code of a
                    number of UI components into your app (or a new one).{" "}
                    <a
                      href="https://ui.shadcn.com/docs"
                      className="text-primary hover:underline"
                    >
                      Read more
                    </a>
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>
                      A shadcn/ui registry with Vitality design system styling
                    </li>
                    <li>
                      <strong>Vitality</strong> — Custom-styled components
                    </li>
                    <li>
                      <strong>Not Vitality</strong> — Standard shadcn
                      passthroughs
                    </li>
                  </ul>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h4 className="font-medium">1. Install a component</h4>
                  <p className="text-sm text-muted-foreground">
                    Components are installed directly into your codebase using
                    the shadcn CLI. You own the code.
                  </p>
                  <div className="flex items-center gap-2 bg-muted px-3 py-2 rounded-md">
                    <code className="text-xs font-mono overflow-x-auto flex-1">
                      npx shadcn@latest add {REGISTRY_URL}/r/button.json
                    </code>
                    <CopyButton
                      text={`npx shadcn@latest add ${REGISTRY_URL}/r/button.json`}
                    />
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h4 className="font-medium">
                    2. Use as-is or wrap with your own opinion
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Registry components are intentionally thin. Teams can use
                    them directly or create product-specific wrappers that
                    enforce conventions.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-muted-foreground">
                        Direct usage
                      </p>
                      <pre className="bg-muted p-3 rounded-md text-xs font-mono overflow-x-auto">
                        <code>{`import { Button } from "@/components/ui/button"

<Button variant="primary">Save</Button>`}</code>
                      </pre>
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-muted-foreground">
                        With a product wrapper
                      </p>
                      <pre className="bg-muted p-3 rounded-md text-xs font-mono overflow-x-auto">
                        <code>{`// components/product/button.tsx
import { Button as Base } from "@/components/ui/button"

export function Button({ children, ...props }) {
  // Add tracking, enforce variants, etc.
  return <Base {...props}>{children}</Base>
}`}</code>
                      </pre>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h4 className="font-medium">3. Apply the theme</h4>
                  <p className="text-sm text-muted-foreground">
                    Copy the CSS variables from the Theming section below into
                    your{" "}
                    <code className="text-xs bg-muted px-1 py-0.5 rounded">
                      globals.css
                    </code>{" "}
                    to match the Vitality design language.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Theming */}
            <Card id="theming" className="scroll-mt-20">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>Theming</CardTitle>
                  <Badge>Vitality</Badge>
                </div>
                <CardDescription>
                  Add these CSS variables to your globals.css file to use the
                  Vitality theme.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs font-mono max-h-96 overflow-y-auto">
                    <code>{globalsCss}</code>
                  </pre>
                  <div className="absolute top-2 right-2">
                    <CopyButton text={globalsCss} />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Component Demos */}
            {componentDemos.map((demo) => (
              <ComponentCard
                key={demo.id}
                id={demo.id}
                title={demo.title}
                description={demo.description}
                componentName={demo.componentName}
              >
                {demo.render()}
              </ComponentCard>
            ))}

            {/* Blocks Section */}
            <div className="mt-12 mb-8">
              <h2 className="text-2xl font-bold">Blocks</h2>
              <p className="text-muted-foreground">
                Pre-built, composed components for common UI patterns.
              </p>
            </div>

            {/* Block Demos */}
            {blockDemos.map((demo) => (
              <BlockCard
                key={demo.id}
                id={demo.id}
                title={demo.title}
                description={demo.description}
                blockName={demo.componentName}
                className={demo.className}
              >
                {demo.render()}
              </BlockCard>
            ))}
          </div>
        </main>
      </div>
    </TooltipProvider>
  );
}
