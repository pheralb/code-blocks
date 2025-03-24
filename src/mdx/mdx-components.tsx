import type { MDXComponents } from "mdx/types";

import { Code, Codeblock } from "@/codeblock/mdx";
import {
  ComponentPreview,
  ComponentSource,
} from "@/components/componentPreview";
import { MDXTypography } from "@/ui/typography";
import Separator from "@/ui/separator";

export const MDXCustomComponents: MDXComponents = {
  pre: (props) => <Codeblock {...props} />,
  code: (props) => <Code {...props} />,
  Separator,
  ComponentPreview,
  ComponentSource,
  ...MDXTypography,
} satisfies MDXComponents;
