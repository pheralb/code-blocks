import { lazy } from "react";

export const Registry = [
  // MDX Component:
  {
    registryName: "codeblock-mdx",
    sourceFile: "src/codeblock/mdx.tsx",
    fileType: "tsx",
  },
  {
    registryName: "codeblock-mdx-styles",
    sourceFile: "src/styles/codeblock.css",
    fileType: "css",
  },
  // Client Component:
  {
    registryName: "codeblock-client",
    sourceFile: "src/codeblock/client.tsx",
    fileType: "tsx",
  },
  {
    registryName: "codeblock-client-example",
    sourceFile: "src/codeblock/client.tsx",
    fileType: "tsx",
    reactComponent: lazy(() => import("@/components/examples/codeblockClient")),
  },
];
