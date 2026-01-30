"use client";

import type { ComponentProps } from "react";

import { cn } from "@/utils/cn";
import { highlight } from "@/utils/sugar-high";

interface CodeBlockSugarHighProps extends ComponentProps<"pre"> {
  code: string;
  lineNumbers?: boolean;
}

const CodeBlockSugarHigh = ({
  code,
  className,
  lineNumbers = false,
  ...props
}: CodeBlockSugarHighProps) => {
  const highlightedHtml = highlight({
    code,
  });

  return (
    <pre
      className={cn(
        "w-full overflow-x-auto font-mono",
        "p-3",
        lineNumbers && "sh-line-numbers",
        className,
      )}
      {...props}
    >
      <code dangerouslySetInnerHTML={{ __html: highlightedHtml }} />
    </pre>
  );
};

export { CodeBlockSugarHigh };
