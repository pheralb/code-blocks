import type { ComponentProps, ReactNode } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/utils/cn";
import { buttonVariants } from "./button";
import { MenuIcon } from "lucide-react";

interface SidebarProps {
  children: ReactNode;
  position: "left" | "right";
}

interface SidebarPageContentProps {
  children: ReactNode;
  className?: string;
}

const Sidebar = ({ children, position }: SidebarProps) => {
  return (
    <aside
      className={cn(
        "fixed w-57.5",
        "h-[calc(100vh-3.5rem)]",
        "hidden md:block",
        "overflow-x-hidden overflow-y-auto",
        "border-neutral-200 dark:border-neutral-800",
        "bg-neutral-50 dark:bg-neutral-900",
        position === "left" ? "left-0 border-r" : "right-0 border-l",
      )}
    >
      <div className="flex h-full flex-col space-y-6 overscroll-none py-6">
        {children}
      </div>
    </aside>
  );
};

const SidebarMobile = ({ children }: ComponentProps<"div">) => {
  return (
    <Sheet>
      <SheetTrigger
        className={cn(
          buttonVariants({ variant: "outline" }),
          "flex w-full rounded-none border-t-0 md:hidden",
        )}
      >
        <MenuIcon size={16} />
        <span>Menu</span>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="border-b border-neutral-200 dark:border-neutral-800">
          <SheetTitle>Code Blocks</SheetTitle>
          <SheetDescription>
            Components and utilities for building code block components.
          </SheetDescription>
        </SheetHeader>
        <div className="overflow-y-auto pb-10">{children}</div>
      </SheetContent>
    </Sheet>
  );
};

const SidebarPageContent = ({
  children,
  className,
}: SidebarPageContentProps) => {
  return (
    <main className={cn("ml-0 md:ml-57.5 lg:ml-57.5 xl:mx-57.5", className)}>
      {children}
    </main>
  );
};

export { Sidebar, SidebarMobile, SidebarPageContent };
