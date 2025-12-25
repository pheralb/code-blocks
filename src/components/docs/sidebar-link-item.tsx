import type { ReactNode } from "react";

import { cn } from "@/utils/cn";
import Link, { type LinkProps } from "next/link";

interface SidebarLinkItemProps extends LinkProps {
  isActive?: boolean;
  children: ReactNode;
}

const SidebarItemStyle = cn(
  "flex items-center space-x-2.5 px-1 py-1.5 text-sm",
);

const SidebarLinkItem = ({ isActive, ...props }: SidebarLinkItemProps) => {
  return (
    <Link
      href={props.href}
      className={cn(
        "flex items-center space-x-2.5 rounded-md px-2 py-1.5 text-sm",
        "text-neutral-600 dark:text-neutral-400",
        "hover:bg-neutral-200/40 dark:hover:bg-neutral-800/40",
        "hover:text-neutral-950 dark:hover:text-neutral-50",
        isActive &&
          "bg-neutral-200/60 font-medium text-neutral-950 dark:bg-neutral-800/60 dark:text-neutral-50",
      )}
    >
      {props.children}
    </Link>
  );
};

export { SidebarItemStyle, SidebarLinkItem };
