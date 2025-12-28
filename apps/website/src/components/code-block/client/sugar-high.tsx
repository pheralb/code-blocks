"use client";

import type { ComponentProps } from "react";

import { cn } from "@/utils/cn";
import { highlight } from "@/utils/sugar-high";

interface CodeBlockSugarHighProps extends ComponentProps<"pre"> {
  code: string;
}

const CodeBlockSugarHigh = ({
  code,
  className,
  ...props
}: CodeBlockSugarHighProps) => {
  const highlightedHtml = highlight({
    code,
  });

  return (
    <pre
      className={cn("w-full overflow-x-auto font-mono", "p-3", className)}
      dangerouslySetInnerHTML={{ __html: highlightedHtml }}
      {...props}
    />
  );
};

export { CodeBlockSugarHigh };
