import type { ReactNode } from "react";

import { cn } from "@/utils/cn";

interface SidebarGroupProps {
  title: string;
  children: ReactNode;
}

const SidebarGroup = ({ title, children }: SidebarGroupProps) => {
  return (
    <section>
      <div
        className={cn(
          "group flex w-full items-center justify-between px-5 pb-2",
          "text-xs font-medium text-neutral-600 dark:text-neutral-400",
        )}
      >
        <span>{title}</span>
      </div>
      <div className="flex flex-col space-y-0.5 px-3">{children}</div>
    </section>
  );
};

export default SidebarGroup;
