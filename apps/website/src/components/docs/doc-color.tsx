"use client";

import { useState } from "react";

import { cn } from "@/utils/cn";
import { copyToClipboard } from "@/utils/copy";
import { CheckCheckIcon, CopyIcon } from "lucide-react";

interface DocColorProps {
  shade: string;
  color: string;
}

const DocColor = ({ shade, color }: DocColorProps) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  return (
    <button
      onClick={async () => {
        await copyToClipboard(color as string);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1000);
      }}
      className={cn(
        "group relative cursor-pointer",
        "flex flex-col items-center px-2 py-4",
        "border border-dashed border-neutral-200 dark:border-neutral-800",
        "hover:border-neutral-300 dark:hover:border-neutral-700",
      )}
    >
      <div
        className="mb-2 size-10 rounded-full border border-neutral-200 shadow-sm dark:border-neutral-800"
        style={{ backgroundColor: color }}
      />
      <div className="flex flex-col items-center justify-center space-y-0.5">
        <p className="text-sm font-medium">{shade}</p>
        <p className="font-mono text-xs tracking-tight text-neutral-500">
          {color}
        </p>
      </div>
      {isCopied ? (
        <CheckCheckIcon size={12} className={cn("absolute top-2 right-2")} />
      ) : (
        <CopyIcon
          size={12}
          className={cn(
            "absolute top-2 right-2 opacity-0 transition-opacity group-hover:opacity-100",
          )}
        />
      )}
    </button>
  );
};

export default DocColor;
