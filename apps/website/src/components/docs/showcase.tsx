import type { ReactNode } from "react";
import { cn } from "@/utils/cn";
import { SquareDashedMousePointerIcon } from "lucide-react";

interface ShowcaseProps {
  children: ReactNode;
  title?: string;
  containerClassName?: string;
  subtitle?: string;
}

const Showcase = ({
  children,
  title,
  subtitle,
  containerClassName,
}: ShowcaseProps) => {
  return (
    <div className="not-prose overflow-hidden rounded-lg border border-dashed border-neutral-200 dark:border-neutral-800">
      <div className="flex items-center space-x-2 border-b border-neutral-200 bg-neutral-200/30 p-2 text-neutral-600 dark:border-neutral-800 dark:bg-neutral-800/30 dark:text-neutral-400">
        <SquareDashedMousePointerIcon size={16} />
        <p className="text-sm tracking-tight">{title ?? "Preview"}</p>
      </div>
      <div
        className={cn(
          "p-4",
          "flex flex-col items-center justify-center",
          containerClassName,
        )}
      >
        {children}
        {subtitle && (
          <div className="mt-3 flex w-full items-center justify-center">
            <p className="text-center text-sm text-neutral-500 dark:text-neutral-400">
              {subtitle}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Showcase;
