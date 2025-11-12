"use client";

import { useEffect, useState, type ComponentProps } from "react";

import { cn } from "@/utils/cn";
import { CheckIcon, CopyIcon } from "lucide-react";
import { copyToClipboard } from "@/utils/copy";

interface CopyContentProps extends ComponentProps<"button"> {
  content: string;
}

const CopyContent = ({ content, ...props }: CopyContentProps) => {
  const iconSize = 14;
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
        "text-zinc-600 dark:text-zinc-400",
        "hover:text-zinc-950 hover:dark:text-zinc-50",
        props.className,
      )}
      onClick={handleCopy}
      {...props}
    >
      {isCopied ? (
        <CheckIcon
          size={iconSize}
          className="text-green-900 dark:text-green-400"
        />
      ) : (
        <CopyIcon size={iconSize} />
      )}
    </button>
  );
};

export { CopyContent };
