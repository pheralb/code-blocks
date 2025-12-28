"use client";

import { type FC, type SVGProps, useState } from "react";

import { cn } from "@/utils/cn";
import { usePkgManager, type PackageManager } from "@/stores/pkgManager";

import {
  CodeBlock,
  CodeBlockContent,
  CodeBlockHeader,
} from "@/components/code-block/code-block";
import { CodeblockShiki } from "@/components/code-block/client/shiki";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CopyButton } from "@/components/code-block/copy-button";

import { CheckIcon, ChevronDown } from "lucide-react";
import { Bun, NPM, PNPM, Yarn } from "@react-symbols/icons/files";

interface CopyWithPkgManagerProps {
  command: string;
  title: string;
  type: "install" | "dlx";
}

interface PackageOption {
  name: PackageManager;
  icon: FC<SVGProps<SVGSVGElement>>;
  install: string;
  dlx: string;
}

const packages: PackageOption[] = [
  {
    name: "npm",
    icon: NPM,
    install: "npm i",
    dlx: "npx",
  },
  {
    name: "pnpm",
    icon: PNPM,
    install: "pnpm i",
    dlx: "pnpm dlx",
  },
  {
    name: "yarn",
    icon: Yarn,
    install: "yarn add",
    dlx: "yarn dlx",
  },
  {
    name: "bun",
    icon: Bun,
    install: "bun add",
    dlx: "bunx --bun",
  },
];

const CopyWithPkgManager = ({
  title,
  command,
  type,
}: CopyWithPkgManagerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { packageManager, setPackageManager } = usePkgManager();

  const selectedPkg =
    packages.find((pkg) => pkg.name === packageManager) || packages[0];
  const Icon = selectedPkg.icon;
  const fullCommand = `${selectedPkg[type]} ${command}`;

  return (
    <CodeBlock>
      <CodeBlockHeader language="bash" title={title}>
        <div className="flex items-center space-x-2 divide-x divide-neutral-300 dark:divide-neutral-700">
          <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger
              title={`Select Package Manager`}
              className={cn(
                "group flex cursor-pointer items-center space-x-1 px-2",
              )}
            >
              <Icon className="size-4" />
              <ChevronDown
                size={13}
                className={cn(
                  "transform transition-transform duration-200 ease-in-out",
                  "group-hover:text-black dark:group-hover:text-white",
                  isOpen && "rotate-180 text-black dark:text-white",
                )}
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" alignOffset={2}>
              {packages.map((pkg) => {
                const PkgIcon = pkg.icon;
                return (
                  <DropdownMenuItem
                    key={pkg.name}
                    title={`Using ${pkg.name}`}
                    onClick={() =>
                      setPackageManager(pkg.name as PackageManager)
                    }
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
          <CopyButton className="pl-1" content={fullCommand} />
        </div>
      </CodeBlockHeader>
      <CodeBlockContent>
        <CodeblockShiki language="bash" code={fullCommand} />
      </CodeBlockContent>
    </CodeBlock>
  );
};

export default CopyWithPkgManager;
