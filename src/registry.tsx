import { lazy } from "react";

export const Registry = [
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
  {
    registryName: "codeblock-client",
    sourceFile: "src/codeblock/client.tsx",
    fileType: "tsx",
    reactComponent: lazy(() => import("@/codeblock/client")),
  },
];
