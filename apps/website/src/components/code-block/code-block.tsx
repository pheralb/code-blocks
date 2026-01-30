import type { ComponentProps } from "react";

import { cn } from "@/utils/cn";
import { FileIcon } from "@react-symbols/icons/utils";

const CodeBlock = ({
  children,
  className,
  ...props
}: ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "not-prose",
        "flex w-full flex-col overflow-clip rounded-lg shadow-xs",
        "bg-neutral-200/40 dark:bg-neutral-800/70",
        "border border-neutral-200 dark:border-neutral-800",
        "text-neutral-950 dark:text-neutral-50",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

type CodeBlockHeaderProps = ComponentProps<"div">;

const CodeBlockHeader = ({
  children,
  className,
  ...props
}: CodeBlockHeaderProps) => {
  return (
    <div
      className={cn(
        "not-prose", // Disable Markdown Styles
        "flex h-9 items-center justify-between px-2 py-1.5",
        "text-sm text-neutral-600 dark:text-neutral-400",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

interface CodeBlockIconProps extends ComponentProps<"div"> {
  language?: string;
}

const CodeBlockIcon = ({ language, className }: CodeBlockIconProps) => {
  return (
    <FileIcon
      width={16}
      height={16}
      fileName={`.${language ?? ""}`}
      autoAssign={true}
      className={cn(className)}
    />
  );
};

type CodeBlockGroupProps = ComponentProps<"div">;

const CodeBlockGroup = ({
  children,
  className,
  ...props
}: CodeBlockGroupProps) => {
  return (
    <div
      className={cn(
        "flex items-center space-x-2",
        "text-sm text-neutral-600 dark:text-neutral-400",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const CodeBlockContent = ({
  className,
  children,
  ...props
}: ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "max-h-96 overflow-y-auto",
        "bg-neutral-50 dark:bg-neutral-900",
        "rounded-lg font-mono text-sm leading-5 whitespace-pre",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export {
  CodeBlock,
  CodeBlockHeader,
  CodeBlockIcon,
  CodeBlockGroup,
  CodeBlockContent,
};
