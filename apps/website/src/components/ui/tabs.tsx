"use client";

import { cn } from "@/utils/cn";
import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import { cva, type VariantProps } from "class-variance-authority";

const tabsListVariants = cva(
  "rounded-lg p-0.75 group-data-horizontal/tabs:h-9 data-[variant=line]:rounded-none group/tabs-list text-neutral-500 inline-flex w-fit items-center justify-center group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col dark:text-neutral-400",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        line: "gap-1 bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Tabs({
  className,
  orientation = "horizontal",
  ...props
}: TabsPrimitive.Root.Props) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      className={cn(
        "group/tabs flex gap-2 data-[orientation=horizontal]:flex-col",
        className,
      )}
      {...props}
    />
  );
}

function TabsList({
  className,
  variant = "default",
  ...props
}: TabsPrimitive.List.Props & VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  );
}

function TabsTrigger({ className, ...props }: TabsPrimitive.Tab.Props) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        "flex items-center gap-1",
        "border border-transparent",
        "text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50",
        "data-active:border-neutral-300/60 dark:data-active:border-neutral-700/60",
        "data-active:bg-neutral-200/40 dark:data-active:bg-neutral-800/40",
        "data-active:text-neutral-950 dark:data-active:text-neutral-50",
        "focus-visible:ring-neutral-200/50 dark:focus-visible:ring-neutral-800/50",
        "z-1 flex-1 items-center justify-center gap-1.5 rounded-md px-2 py-1 text-sm text-nowrap whitespace-nowrap outline-none focus-visible:ring-[3px] data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className,
      )}
      {...props}
    />
  );
}

function TabsContent({ className, ...props }: TabsPrimitive.Panel.Props) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
