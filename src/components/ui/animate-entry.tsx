import type { ComponentProps } from "react";
import { cn } from "@/utils/cn";

const AnimateEntry = (props: ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "animate-in fill-mode-backwards fade-in slide-in-from-bottom-4 duration-500",
        props.className,
      )}
      {...props}
    >
      {props.children}
    </div>
  );
};

export default AnimateEntry;
