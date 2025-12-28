"use client";

import type { ComponentProps } from "react";

import { cn } from "@/utils/cn";
import { Tabs as TabsPrimitive } from "radix-ui";

function Tabs({
  className,
  ...props
}: ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function TabsList({
  className,
  ...props
}: ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "inline-flex h-9 w-fit items-center justify-center space-x-1 rounded-lg border border-neutral-200 bg-neutral-50 p-0.75 text-neutral-500 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400",
        className,
      )}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  ...props
}: ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "focus-visible:outline-ring dark: inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md px-2 py-2 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        "text-neutral-600 hover:text-neutral-950 data-[state=active]:text-neutral-950 dark:text-neutral-400 dark:hover:text-white dark:data-[state=active]:text-white",
        "focus-visible:border-neutral-950 dark:focus-visible:border-neutral-300",
        "focus-visible:ring-neutral-950/50 dark:focus-visible:ring-neutral-300/50",
        "data-[state=active]:bg-neutral-200/70 dark:data-[state=active]:bg-neutral-800/70",
        "data-[state=active]:border data-[state=active]:border-neutral-300 dark:data-[state=active]:border-neutral-700",
        className,
      )}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
