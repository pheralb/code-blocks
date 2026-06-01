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
  CodeIcon,
  CopyIcon,
} from "lucide-react";
import { TextMorph } from "@/components/ui/text-morph";
import { ExternalLink } from "@/components/ui/external-link";
import { GitHub, Claude, OpenAI } from "@/components/ui/svgs";

interface DocOptionsProps extends ComponentProps<"div"> {
  content: string;
  folder: string;
  file: string;
}

const aiPrompt = ({ url }: { url: string }) =>
  `Read ${url} I want to ask questions about it`;

const aiLinks = [
  {
    label: "Open in ChatGPT",
    icon: OpenAI,
    href: "https://chat.openai.com/?prompt=",
  },
  {
    label: "Open in Claude",
    icon: Claude,
    href: "https://claude.ai/new?q=",
  },
];

const DocOptions = ({ content, folder, file }: DocOptionsProps) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const pathname = usePathname();
  const fullUrl = `${globals.apiWebsiteUrl}${pathname}.mdx`;

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
          <TextMorph>{isCopied ? "Copied" : "Copy"}</TextMorph>
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
        <DropdownMenuItem
          render={
            <ExternalLink href={`${globals.apiWebsiteUrl}${pathname}.mdx`} />
          }
        >
          <CodeIcon width={16} height={16} />
          <span>View as Markdown</span>
          <ArrowUpRightIcon
            size={14}
            className="ml-auto text-neutral-400 dark:text-neutral-600"
          />
        </DropdownMenuItem>
        <DropdownMenuItem
          render={
            <ExternalLink
              href={`${globals.githubUrl}/blob/main/apps/website/src/docs/${folder}/${file}`}
            />
          }
        >
          <GitHub width={16} height={16} />
          <span>Edit on GitHub</span>
          <ArrowUpRightIcon
            size={14}
            className="ml-auto text-neutral-400 dark:text-neutral-600"
          />
        </DropdownMenuItem>
        {aiLinks.map((link) => (
          <DropdownMenuItem
            key={link.label}
            render={
              <ExternalLink
                href={`${link.href}${encodeURIComponent(aiPrompt({ url: fullUrl }))}`}
              />
            }
          >
            <link.icon width={16} height={16} />
            <span>{link.label}</span>
            <ArrowUpRightIcon
              size={14}
              className="ml-auto text-neutral-400 dark:text-neutral-600"
            />
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DocOptions;
