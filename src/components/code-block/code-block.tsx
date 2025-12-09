import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/utils/cn";
import { LanguageSvgs } from "@/components/code-block/language-svgs";

interface CodeBlockHeaderProps {
  language?: string;
  title?: string;
  icon?: ReactNode;
  children?: ReactNode;
}

const CodeBlock = ({
  children,
  className,
  ...props
}: ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "not-prose",
        "flex w-full flex-col overflow-clip rounded-lg",
        "bg-neutral-200 dark:bg-neutral-900",
        "border border-neutral-300/60 dark:border-neutral-700/60",
        "text-neutral-950 dark:text-neutral-50",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const CodeBlockHeader = ({
  title,
  icon,
  language,
  children,
}: CodeBlockHeaderProps) => {
  const LanguageData = LanguageSvgs.find((lang) => lang.language === language);
  const LanguageIcon = LanguageData?.icon;
  return (
    <div
      className={cn(
        "not-prose", // Disable Markdown Styles
        "flex items-center justify-between px-2 py-1.5",
        "text-sm text-neutral-600 dark:text-neutral-400",
        "bg-neutral-200/40 dark:bg-neutral-800/40",
        "border-b border-neutral-200 dark:border-neutral-800",
      )}
    >
      <div className="flex items-center space-x-2">
        {icon
          ? icon
          : LanguageIcon && (
              <LanguageIcon
                width={18}
                height={18}
                aria-label={LanguageData?.title}
              />
            )}
        <p>{title ? title : LanguageData?.title}</p>
      </div>
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

export { CodeBlock, CodeBlockHeader, CodeBlockContent };
