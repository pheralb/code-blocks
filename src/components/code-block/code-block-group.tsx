import type { ComponentProps } from "react";
import { cn } from "@/utils/cn";

const CodeBlockGroup = ({
  className,
  children,
  ...props
}: ComponentProps<"div">) => {
  return (
    <div
      className={cn("flex items-center justify-between", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export { CodeBlockGroup };
