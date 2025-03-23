import type { MDXComponents } from "mdx/types";

import { Code, Codeblock } from "@/codeblock/mdx";
import { MDXTypography } from "@/ui/typography";
import Separator from "@/ui/separator";

export const MDXCustomComponents: MDXComponents = {
  pre: (props) => <Codeblock showlang="bottom" {...props} />,
  code: (props) => <Code {...props} />,
  Separator,
  ...MDXTypography,
} satisfies MDXComponents;
