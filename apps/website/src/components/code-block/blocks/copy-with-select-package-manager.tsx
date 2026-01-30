"use client";

import { useState, type FC, type SVGProps } from "react";
import {
  usePackageManager,
  type PackageManager,
} from "@/stores/packageManager";

import {
  CodeBlock,
  CodeBlockContent,
  CodeBlockHeader,
  CodeBlockIcon,
} from "@/components/code-block/code-block";
import { CopyButton } from "@/components/code-block/copy-button";
import { CodeblockShiki } from "@/components/code-block/client/shiki";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { cn } from "@/utils/cn";
import { Bun, NPM, PNPM, Yarn } from "@react-symbols/icons";
import { CheckIcon, ChevronDownIcon } from "lucide-react";

interface CodeBlockSelectPkgProps {
  command: string;
  title: string;
  type: "install" | "dlx";
}

interface Command {
  name: PackageManager;
  install: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  dlx: string;
}

const Commands: Command[] = [
  {
    name: "npm",
    install: "npm i",
    icon: NPM,
    dlx: "npx",
  },
  {
    name: "pnpm",
    install: "pnpm i",
    icon: PNPM,
    dlx: "pnpm dlx",
  },
  {
    name: "yarn",
    install: "yarn add",
    icon: Yarn,
    dlx: "yarn dlx",
  },
  {
    name: "bun",
    install: "bun add",
    icon: Bun,
    dlx: "bunx --bun",
  },
];

const SelectPackageManager = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { packageManager, setPackageManager } = usePackageManager();

  const selectedPkg =
    Commands.find((pkg) => pkg.name === packageManager) ?? Commands[0];
  const Icon = selectedPkg.icon;

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger
        title="Select Package Manager"
        className="group flex cursor-pointer items-center space-x-1 px-2"
      >
        <Icon className="size-4" />
        <ChevronDownIcon
          size={13}
          className={cn(
            "transform transition-transform duration-200 ease-in-out",
            "group-hover:text-black dark:group-hover:text-white",
            isOpen && "rotate-180 text-black dark:text-white",
          )}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" alignOffset={2}>
        {Commands.map((pkg) => {
          const PkgIcon = pkg.icon;
          return (
            <DropdownMenuItem
              key={pkg.name}
              title={`Using ${pkg.name}`}
              onClick={() => setPackageManager(pkg.name)}
              className="flex w-full items-center justify-between"
            >
              <div className="flex items-center space-x-2">
                <PkgIcon className="size-4" />
                <span>{pkg.name}</span>
              </div>
              {selectedPkg.name === pkg.name && <CheckIcon width={14} />}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const CodeBlockSelectPkg = ({
  title,
  type,
  command,
}: CodeBlockSelectPkgProps) => {
  const { packageManager } = usePackageManager();

  const selectedPkg =
    Commands.find((pkg) => pkg.name === packageManager) ?? Commands[0];
  const fullCommand = `${selectedPkg[type]} ${command}`;

  return (
    <CodeBlock>
      <CodeBlockHeader>
        <div className="flex items-center space-x-2">
          <CodeBlockIcon language="bash" />
          <span className="font-medium">{title}</span>
        </div>
        <div className="flex items-center space-x-2 divide-x divide-neutral-300 dark:divide-neutral-700">
          <SelectPackageManager />
          <CopyButton className="pl-1" content={fullCommand} />
        </div>
      </CodeBlockHeader>
      <CodeBlockContent>
        <CodeblockShiki language="bash" code={fullCommand} />
      </CodeBlockContent>
    </CodeBlock>
  );
};

export { CodeBlockSelectPkg, SelectPackageManager };
