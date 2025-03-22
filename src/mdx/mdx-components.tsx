import type { MDXComponents } from "mdx/types";
import { Code, Codeblock } from "@/codeblock/mdx";

export const MDXCustomComponents: MDXComponents = {
  pre: (props) => <Codeblock showlang="bottom" {...props} />,
  code: (props) => <Code {...props} />,
} satisfies MDXComponents;
