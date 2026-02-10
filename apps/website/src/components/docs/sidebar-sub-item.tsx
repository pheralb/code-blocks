import type { LucideIcon } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { useState, type ReactNode } from "react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/utils/cn";

interface SidebarSubItemProps {
  title: string;
  icon?: LucideIcon;
  children: ReactNode;
  defaultOpen?: boolean;
}

const SidebarSubItem = ({
  title,
  icon: Icon,
  children,
  defaultOpen = false,
}: SidebarSubItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);
  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger
        className={cn(
          "cursor-pointer",
          "flex w-full items-center justify-between rounded-md px-2 py-1.5 text-sm",
          "text-neutral-600 dark:text-neutral-400",
          "hover:bg-neutral-200/40 dark:hover:bg-neutral-800/40",
          "hover:text-neutral-950 dark:hover:text-neutral-50",
        )}
      >
        <div className="flex items-center space-x-2.5">
          {Icon && <Icon size={16} className="shrink-0" />}
          <span className="truncate">{title}</span>
        </div>
        <ChevronRight
          size={12}
          className={cn(
            "shrink-0 transition-transform duration-200",
            isOpen && "rotate-90",
          )}
        />
      </CollapsibleTrigger>
      <CollapsibleContent
        className={cn(
          "my-0.5 ml-2 pl-2",
          "flex flex-col space-y-0.5",
          "border-l border-neutral-200 dark:border-neutral-800",
        )}
      >
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default SidebarSubItem;
