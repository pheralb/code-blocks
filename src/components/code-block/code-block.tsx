import type { ComponentProps } from "react";
import { cn } from "@/utils/cn";

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
        "bg-zinc-200 dark:bg-zinc-900",
        "border border-zinc-300/60 dark:border-zinc-700/60",
        "text-zinc-950 dark:text-zinc-50",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { CodeBlock };
