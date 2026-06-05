"use client";

import { useState } from "react";

import { usePackageManager } from "@/stores/packageManager";
import {
  CodeBlock,
  CodeBlockContent,
  CodeBlockHeader,
} from "@/components/code-block/code-block";
import { CopyButton } from "@/components/code-block/copy-button";
import { CodeblockShiki } from "@/components/code-block/client/shiki";
import { SelectPackageManager } from "@/components/code-block/blocks/copy-with-select-package-manager";
import { ShadcnUI } from "@/components/ui/svgs/shadcn";
import { Prismjs, Shiki, SugarHigh } from "@/components/ui/svgs";
import { cn } from "@/utils/cn";

type Highlighter = "shiki" | "sugar-high" | "prismjs";
type Variant = "client" | "mdx";

const registryUrl = "https://code-blocks.pheralb.dev/r/";

const Highlighters = [
  { id: "shiki" as Highlighter, label: "Shiki", icon: Shiki },
  { id: "sugar-high" as Highlighter, label: "Sugar High", icon: SugarHigh },
  { id: "prismjs" as Highlighter, label: "Prismjs", icon: Prismjs },
];

const Variants: { id: Variant; label: string }[] = [
  { id: "client", label: "Client" },
  { id: "mdx", label: "MDX" },
];

const pkgCommands: Record<string, string> = {
  npm: "npx shadcn@latest add",
  pnpm: "pnpm dlx shadcn@latest add",
  yarn: "yarn shadcn@latest add",
  bun: "bunx --bun shadcn@latest add",
};

const segmentBase =
  "flex cursor-pointer items-center gap-1.5 rounded-md px-3 py-1 text-xs font-medium transition-all duration-150 ease-out";
const segmentActive =
  "bg-neutral-900 text-white shadow-sm dark:bg-neutral-100 dark:text-neutral-900";
const segmentInactive =
  "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200";

const InstallCommands = () => {
  const { packageManager } = usePackageManager();
  const [highlighter, setHighlighter] = useState<Highlighter>("shiki");
  const [variant, setVariant] = useState<Variant>("client");

  const selectedHL =
    Highlighters.find((h) => h.id === highlighter) ?? Highlighters[0];
  const command = pkgCommands[packageManager] ?? pkgCommands.npm;
  const fullCommand = `${command} ${registryUrl}${variant}-${selectedHL.id}.json`;

  return (
    <div className="flex flex-col gap-1">
      <CodeBlock>
        <CodeBlockHeader>
          <div className="flex items-center space-x-2">
            <ShadcnUI width={14} height={14} />
            <span className="font-medium">shadcn/ui Command</span>
          </div>
          <div className="flex items-center divide-x divide-neutral-300 dark:divide-neutral-700">
            <SelectPackageManager />
            <CopyButton className="pl-2.5" content={fullCommand} />
          </div>
        </CodeBlockHeader>
        <CodeBlockContent>
          <CodeblockShiki language="bash" code={fullCommand} />
        </CodeBlockContent>
      </CodeBlock>
      <div className="flex flex-wrap items-center justify-center gap-2 rounded-lg bg-neutral-50 px-4 py-2 md:gap-4 dark:bg-neutral-900/60">
        <div className="flex items-center gap-0.5 rounded-lg border border-neutral-200 bg-white p-1 dark:border-neutral-800 dark:bg-neutral-900">
          {Variants.map((v) => (
            <button
              key={v.id}
              onClick={() => setVariant(v.id)}
              className={cn(
                segmentBase,
                variant === v.id ? segmentActive : segmentInactive,
              )}
            >
              {v.label}
            </button>
          ))}
        </div>
        <div className="hidden h-4 w-px bg-neutral-200 md:block dark:bg-neutral-700" />
        <div className="flex items-center gap-0.5 rounded-lg border border-neutral-200 bg-white p-1 dark:border-neutral-800 dark:bg-neutral-900">
          {Highlighters.map((hl) => {
            const Icon = hl.icon;
            return (
              <button
                key={hl.id}
                onClick={() => setHighlighter(hl.id)}
                className={cn(
                  segmentBase,
                  highlighter === hl.id ? segmentActive : segmentInactive,
                )}
              >
                <Icon className="size-3.5" />
                {hl.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InstallCommands;
