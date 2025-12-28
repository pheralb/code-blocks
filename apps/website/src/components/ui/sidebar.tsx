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
        "fixed h-full w-56",
        "hidden md:block",
        "overflow-x-hidden overflow-y-auto",
        "border-neutral-200 dark:border-neutral-800",
        "bg-neutral-100 dark:bg-neutral-900",
        position === "left" ? "left-0 border-r" : "right-0 border-l",
      )}
    >
      <div className="py-6">{children}</div>
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
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  );
};

const SidebarPageContent = ({
  children,
  className,
}: SidebarPageContentProps) => {
  return (
    <main className={cn("ml-0 md:ml-56 lg:ml-56 xl:mx-56", className)}>
      {children}
    </main>
  );
};

export { Sidebar, SidebarMobile, SidebarPageContent };
