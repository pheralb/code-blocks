"use client";

import type { HTMLAttributes } from "react";
import { createElement, Suspense, useMemo } from "react";
import { BoxIcon, LoaderIcon } from "lucide-react";

import { cn } from "@/utils/cn";
import { Registry } from "@/registry";

interface ComponentSourceProps extends HTMLAttributes<HTMLDivElement> {
  registry: string;
}

const ComponentPreview = ({
  registry,
  title,
  children,
  className,
  ...props
}: ComponentSourceProps) => {
  const componentEntry = useMemo(() => {
    return Registry.find((item) => item.registryName === registry);
  }, [registry]);

  const Preview = useMemo(() => {
    if (!componentEntry) {
      return <p className="text-sm">Component not found in registry.</p>;
    }

    if (!componentEntry.reactComponent) {
      return (
        <p className="text-sm">Component does not have a reactComponent.</p>
      );
    }

    return createElement(componentEntry.reactComponent);
  }, [componentEntry]);

  return (
    <section className={cn(className)} {...props}>
      <div className="flex flex-col space-y-1.5">
        <div className="flex flex-col">
          <header className="flex w-fit items-center space-x-2 rounded-t-md border-x border-t p-2 text-sm text-neutral-500 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400">
            <BoxIcon size={14} />
            <span>{title}</span>
          </header>
          <div className="rounded-r-md rounded-b-md border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-800 dark:bg-neutral-900">
            <Suspense
              fallback={
                <div className="flex items-center justify-center text-sm">
                  <LoaderIcon className="mr-2 h-4 w-4 animate-spin" />
                  <span>Loading...</span>
                </div>
              }
            >
              {Preview}
            </Suspense>
          </div>
        </div>
        {children && children}
      </div>
    </section>
  );
};

const ComponentSource = ({ children }: ComponentSourceProps) => {
  return children && <>{children}</>;
};

export { ComponentSource, ComponentPreview };
