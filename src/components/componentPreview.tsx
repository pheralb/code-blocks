"use client";

import { createElement, Suspense, useMemo } from "react";
import { LoaderIcon } from "lucide-react";

import { cn } from "@/utils/cn";
import { Registry } from "@/registry";

interface ComponentSourceProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
}

const ComponentPreview = ({
  name,
  children,
  className,
  ...props
}: ComponentSourceProps) => {
  const componentEntry = useMemo(() => {
    return Registry.find((item) => item.registryName === name);
  }, [name]);

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
    <div
      className={cn(
        "relative my-4 flex flex-col space-y-4 lg:max-w-[120ch]",
        className,
      )}
      {...props}
    >
      <Suspense
        fallback={
          <div className="text-muted-foreground flex items-center text-sm">
            <LoaderIcon className="mr-2 h-4 w-4 animate-spin" />
            Loading...
          </div>
        }
      >
        {Preview}
      </Suspense>
      {children && (
        <div className="w-full rounded-md [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
          {children}
        </div>
      )}
    </div>
  );
};

const ComponentSource = ({ children }: ComponentSourceProps) => {
  return children && <>{children}</>;
};

export { ComponentSource, ComponentPreview };
