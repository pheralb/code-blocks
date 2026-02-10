"use client";

import type { ReactNode } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface MDXCodeBlockSourceProps {
  children: ReactNode;
}

const MDXHighlightTabs = ({ children }: MDXCodeBlockSourceProps) => {
  return (
    <Tabs defaultValue="shiki">
      <TabsList className="w-full border border-neutral-200 dark:border-neutral-800">
        <TabsTrigger value="shiki">Shiki</TabsTrigger>
        <TabsTrigger value="sugar-high">Sugar High</TabsTrigger>
      </TabsList>
      {children}
    </Tabs>
  );
};

export default MDXHighlightTabs;
