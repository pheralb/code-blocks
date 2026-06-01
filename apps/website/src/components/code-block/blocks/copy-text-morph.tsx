"use client";

import { cn } from "@/utils/cn";
import { copyToClipboard } from "@/utils/copy";
import { TextMorph } from "@/components/ui/text-morph";
import { useEffect, useState, type ComponentProps } from "react";

interface CopyTextAnimatedProps extends ComponentProps<"button"> {
  content: string;
  size?: "xs" | "sm";
}

const CopyTextMorph = ({
  content,
  size = "sm",
  className,
  ...props
}: CopyTextAnimatedProps) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  useEffect(() => {
    if (!isCopied) return;

    const timeout = setTimeout(() => {
      setIsCopied(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [isCopied]);

  const handleCopy = async () => {
    await copyToClipboard(content);
    setIsCopied(true);
  };

  return (
    <button
      title="Copy to clipboard"
      className={cn(
        "cursor-pointer",
        "transition-colors duration-200 ease-in-out",
        "text-neutral-700 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-neutral-50",
        "rounded-md bg-neutral-300/60 px-1.5 py-1 dark:bg-neutral-700/60",
        "border border-transparent hover:border-neutral-400/60 dark:hover:border-neutral-600/60",
        size === "xs" && "text-xs",
        size === "sm" && "text-sm",
        isCopied && "text-neutral-950 dark:text-neutral-50",
        className,
      )}
      onClick={handleCopy}
      {...props}
    >
      <TextMorph>{isCopied ? `Copied` : `Copy`}</TextMorph>
    </button>
  );
};

export { CopyTextMorph };
