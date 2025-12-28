"use client";

import type { ReactNode } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface MDXCodeBlockSourceProps {
  children: ReactNode;
}

const MDXCodeBlockSource = ({ children }: MDXCodeBlockSourceProps) => {
  return (
    <Tabs defaultValue="shiki">
      <TabsList className="w-full">
        <TabsTrigger value="shiki">Shiki</TabsTrigger>
        <TabsTrigger value="sugar-high">Sugar High</TabsTrigger>
      </TabsList>
      {children}
    </Tabs>
  );
};

export default MDXCodeBlockSource;
