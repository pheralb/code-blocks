import type { MDXComponents } from "mdx/types";

import CodeblockMDX from "@/components/codeblock/mdx";
import { ComponentPreview, ComponentSource } from "@/components/sourcePreview";

export const MDXCustomComponents: MDXComponents = {
  pre: (props) => <CodeblockMDX {...props} />,
  ComponentPreview,
  ComponentSource,
};
