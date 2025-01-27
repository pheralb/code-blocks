import type { ReactNode } from "react";
import { SparkleSvg, type Position } from "@/components/ui/icons";
import { cn } from "@/utils/cn";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
  sparklePositions?: Position[];
  className?: string;
}

export const SparkleCard = ({
  children,
  sparklePositions = ["top-left"],
  className,
  ...props
}: SectionProps) => {
  return (
    <section
      className={cn(
        "rounded-none border border-neutral-200 bg-neutral-50 p-11 dark:border-neutral-800 dark:bg-neutral-900",
        sparklePositions.length > 0 && "relative",
        className,
      )}
      {...props}
    >
      {children}
      {sparklePositions.length > 0 &&
        sparklePositions.map((sparklePosition, index) => {
          return (
            <SparkleSvg
              key={`sparkle_${index}`}
              position={sparklePosition}
              className="hover:animate-rotate"
            />
          );
        })}
    </section>
  );
};
