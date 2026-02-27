import type { ComponentProps, ReactNode } from "react";
import type { RegistryComponent } from "@/types/registry";

import { Suspense } from "react";
import { createElement, useMemo } from "react";

import { LoaderIcon } from "lucide-react";
import Showcase from "@/components/docs/showcase";
import { RegistryData } from "@/components/registry/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ComponentPreviewProps extends ComponentProps<"div"> {
  component: RegistryComponent["title"];
  children?: ReactNode;
}

const ComponentPreview = ({ component, children }: ComponentPreviewProps) => {
  const componentEntry = useMemo(() => {
    return RegistryData.find(
      (entry) => entry.shadcnRegistry.name === component,
    );
  }, [component]);

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
    <Tabs defaultValue="preview" className="my-4 flex w-full flex-col gap-0">
      <TabsList className="gap-1 border border-neutral-200 bg-transparent dark:border-neutral-800 dark:bg-transparent">
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <TabsContent value="preview" className="mt-1.5">
        {componentEntry?.reactComponent && (
          <Showcase title="Preview">
            <Suspense
              fallback={
                <div className="flex flex-col items-center justify-center text-sm text-neutral-700 dark:text-neutral-300">
                  <LoaderIcon size={14} className="animate-spin" />
                  <span>Preparing...</span>
                </div>
              }
            >
              {Preview}
            </Suspense>
          </Showcase>
        )}
      </TabsContent>
      <TabsContent value="code" className="mt-1.5">
        {children}
      </TabsContent>
    </Tabs>
  );
};

export default ComponentPreview;
