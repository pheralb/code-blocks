import type { ComponentProps } from "react";
import { cn } from "@/utils/cn";

type GridProps = ComponentProps<"div">;

const Grid = ({ className, ...props }: GridProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4",
        className,
      )}
      {...props}
    >
      {props.children}
    </div>
  );
};

export default Grid;
