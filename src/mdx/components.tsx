import type { MDXComponents } from "mdx/types";
import CodeblockMDX from "@/components/codeblock/mdx";

export const MDXCustomComponents: MDXComponents = {
  pre: (props) => <CodeblockMDX {...props} />,
};
