"use client";

import { usePkgManager, type PackageManager } from "@/stores/pkgManager";

import {
  CodeBlock,
  CodeBlockContent,
  CodeBlockHeader,
} from "@/components/code-block/code-block";
import { CopyButton } from "@/components/code-block/copy-button";
import { CodeblockShiki } from "@/components/code-block/client/shiki";

import { ShadcnUI } from "@/components/ui/svgs/shadcn";
import SelectPkgManager from "@/components/code-block/blocks/select-pkg-manager";

interface CopyShadcnCommandProps {
  name: string;
}

interface Command {
  package: PackageManager;
  command: string;
}

const registryUrl = "https://code-blocks.pheralb.dev/r/";

const Commands: Command[] = [
  {
    package: "npm",
    command: "npx shadcn@latest add",
  },
  {
    package: "pnpm",
    command: "pnpm dlx shadcn@latest add",
  },
  {
    package: "yarn",
    command: "yarn shadcn@latest add",
  },
  {
    package: "bun",
    command: "bunx --bun shadcn@latest add",
  },
];

const CopyShadcnCommand = ({ name }: CopyShadcnCommandProps) => {
  const { packageManager } = usePkgManager();

  const selectedPkg =
    Commands.find((pkg) => pkg.package === packageManager) ?? Commands[0];
  const fullCommand = `${selectedPkg.command} ${registryUrl}${name}.json`;

  return (
    <CodeBlock>
      <CodeBlockHeader
        title="shadcn/ui Command"
        language="bash"
        icon={<ShadcnUI width={14} height={14} />}
      >
        <div className="flex items-center space-x-2 divide-x divide-neutral-300 dark:divide-neutral-700">
          <SelectPkgManager />
          <CopyButton className="pl-1" content={fullCommand} />
        </div>
      </CodeBlockHeader>
      <CodeBlockContent>
        <CodeblockShiki language="bash" code={fullCommand} />
      </CodeBlockContent>
    </CodeBlock>
  );
};

export default CopyShadcnCommand;
