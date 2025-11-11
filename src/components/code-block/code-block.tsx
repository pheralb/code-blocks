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
        "flex w-full flex-col overflow-clip rounded-xl",
        "bg-white dark:bg-zinc-900",
        "border border-zinc-200 dark:border-zinc-800",
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
