"use client";

import { usePathname } from "next/navigation";
import { useState, type ComponentProps } from "react";

import { cn } from "@/utils/cn";
import { globals } from "@/globals";
import { copyToClipboard } from "@/utils/copy";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  ArrowUpRightIcon,
  CheckCheckIcon,
  ChevronDownIcon,
  CopyIcon,
} from "lucide-react";
import { ExternalLink } from "@/components/ui/external-link";

interface DocOptionsProps extends ComponentProps<"div"> {
  content: string;
  folder: string;
  file: string;
}

const DocOptions = ({ content, folder, file }: DocOptionsProps) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const pathname = usePathname();

  const handleCopyMarkdown = () => {
    copyToClipboard(content);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <DropdownMenu open={openDropdown} onOpenChange={setOpenDropdown}>
      <div className="flex items-center">
        <Button
          size="sm"
          variant="outline"
          onClick={handleCopyMarkdown}
          className="w-full rounded-r-none border-r-0"
        >
          {isCopied ? <CheckCheckIcon size={14} /> : <CopyIcon size={14} />}
          <span>{isCopied ? "Copied" : "Copy"}</span>
        </Button>
        <DropdownMenuTrigger
          title="More options"
          className={cn(
            buttonVariants({
              variant: "outline",
              size: "sm",
              className: "rounded-l-none",
            }),
          )}
        >
          <ChevronDownIcon
            size={14}
            className={cn("transition-transform", openDropdown && "rotate-180")}
          />
        </DropdownMenuTrigger>
      </div>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <ExternalLink
            href={`${pathname}.mdx`}
            className="flex items-center space-x-2"
          >
            <span>View as Markdown</span>
            <ArrowUpRightIcon size={14} />
          </ExternalLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ExternalLink
            className="flex items-center space-x-2"
            href={`${globals.githubUrl}/blob/main/apps/website/src/docs/${folder}/${file}`}
          >
            <span>Edit on GitHub</span>
            <ArrowUpRightIcon size={14} />
          </ExternalLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DocOptions;
