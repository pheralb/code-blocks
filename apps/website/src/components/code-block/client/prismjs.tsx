"use client";

import type { ComponentProps } from "react";

import { cn } from "@/utils/cn";
import { highlight, type Languages } from "@/utils/prismjs/highlight";

interface CodeBlockPrismjsProps extends ComponentProps<"pre"> {
  code: string;
  language?: Languages;
  lineNumbers?: boolean;
}

const CodeBlockPrismjs = ({
  code,
  language = "typescript",
  className,
  lineNumbers = false,
  ...props
}: CodeBlockPrismjsProps) => {
  const highlightedHtml = highlight({ code, language });

  return (
    <pre
      className={cn(
        "w-full overflow-x-auto font-mono",
        "p-3",
        lineNumbers && "prism-line-numbers",
        className,
      )}
      {...props}
    >
      <code dangerouslySetInnerHTML={{ __html: highlightedHtml }} />
    </pre>
  );
};

export { CodeBlockPrismjs };
