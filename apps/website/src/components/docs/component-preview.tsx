import type { ComponentProps, ReactNode } from "react";
import type { RegistryComponent } from "@/components/registry/types";

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
    return RegistryData.find((entry) => entry.title === component);
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
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <TabsContent value="preview" className="mt-1.5">
        {componentEntry?.reactComponent && (
          <Showcase title="Preview">
            <Suspense
              fallback={
                <div className="flex items-center justify-center text-sm">
                  <LoaderIcon className="mr-2 h-4 w-4 animate-spin" />
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
