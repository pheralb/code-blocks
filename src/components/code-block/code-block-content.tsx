import type { ComponentProps } from "react";
import { cn } from "@/utils/cn";

const CodeBlockContent = ({
  className,
  children,
  ...props
}: ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "rounded-lg font-mono text-sm leading-5 whitespace-pre",
        "bg-zinc-50 dark:bg-zinc-900",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { CodeBlockContent };
