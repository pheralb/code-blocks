import type { ComponentProps } from "react";

import { cn } from "@/utils/cn";
import { SparklesIcon } from "@/components/ui/lucide-animated/sparkles";

type Position = "top-left" | "top-right" | "bottom-left" | "bottom-right";

export interface SectionProps extends ComponentProps<"div"> {
  position?: Position[];
  useTopDivider?: boolean;
  useBottomDivider?: boolean;
}

export const SparkleCard = ({
  children,
  position = ["top-left"],
  useTopDivider = false,
  useBottomDivider = true,
  className,
  ...props
}: SectionProps) => {
  return (
    <>
      {useTopDivider && <div className="h-4 border-b" />}
      <section
        className={cn(
          "p-3 shadow-sm sm:p-6",
          position.length > 0 && "relative",
          className,
        )}
        {...props}
      >
        {children}
        {position.length > 0 &&
          position.map((sparklePosition, index) => {
            return (
              <SparklesIcon
                key={`sparkle_${index}`}
                className={cn(
                  "absolute z-10 size-4",
                  sparklePosition === "top-right" && "-top-2 -right-2",
                  sparklePosition === "bottom-left" && "-bottom-2 -left-2",
                  sparklePosition === "bottom-right" && "-right-2 -bottom-2",
                  sparklePosition === "top-left" && "-top-2 -left-2",
                  className,
                )}
              />
            );
          })}
      </section>
      {useBottomDivider && (
        <div className="mb-2 h-4 border-b-2 border-dotted dark:border-neutral-800" />
      )}
    </>
  );
};
