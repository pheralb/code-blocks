import type { ComponentProps } from "react";
import { cn } from "@/utils/cn";

const Container = ({ children, className }: ComponentProps<"div">) => {
  return (
    <div className={cn("container mx-auto w-full max-w-4xl px-4", className)}>
      {children}
    </div>
  );
};

export default Container;
