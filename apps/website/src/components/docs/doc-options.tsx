"use client";

import { useState, type ComponentProps } from "react";

import { cn } from "@/utils/cn";
import { globals } from "@/globals";
import { copyToClipboard } from "@/utils/copy";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button, buttonVariants } from "../ui/button";
import {
  ArrowUpRightIcon,
  CheckCheckIcon,
  ChevronDownIcon,
  CopyIcon,
} from "lucide-react";
import { ExternalLink } from "../ui/external-link";

interface DocOptionsProps extends ComponentProps<"div"> {
  content: string;
  folder: string;
  file: string;
}

const DocOptions = ({ content, folder, file }: DocOptionsProps) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);

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
          className="rounded-r-none border-r-0"
        >
          {isCopied ? <CheckCheckIcon size={14} /> : <CopyIcon size={14} />}
          <span>{isCopied ? "Copied" : "Copy page"}</span>
        </Button>
        <DropdownMenuTrigger
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
        <DropdownMenuItem asChild>
          <ExternalLink href={`${window.location.href}.mdx`}>
            <span>View as Markdown</span>
            <ArrowUpRightIcon size={14} />
          </ExternalLink>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <ExternalLink
            href={`${globals.githubUrl}/blob/next/apps/website/src/docs/${folder}/${file}`}
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
