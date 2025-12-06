import type { ReactNode } from "react";

import { cn } from "@/utils/cn";
import { LanguageSvgs } from "@/components/code-block/language-svgs";

interface CodeBlockHeaderProps {
  language: string;
  title?: string;
  icon?: ReactNode;
  children?: ReactNode;
}

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
        "not-markdown", // Disable Markdown Styles
        "flex items-center justify-between px-2 py-1.5",
        "text-sm text-zinc-600 dark:text-zinc-400",
        "bg-zinc-200/40 dark:bg-zinc-800/40",
        "border-b border-zinc-200 dark:border-zinc-800",
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

export { CodeBlockHeader };
