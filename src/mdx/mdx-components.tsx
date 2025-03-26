import type { MDXComponents } from "mdx/types";

import { CodeMDX, CodeblockMDX } from "@/codeblock/mdx";
import {
  ComponentPreview,
  ComponentSource,
} from "@/components/componentPreview";
import { MDXTypography } from "@/ui/typography";
import Separator from "@/ui/separator";

export const MDXCustomComponents: MDXComponents = {
  pre: (props) => <CodeblockMDX {...props} />,
  code: (props) => <CodeMDX {...props} />,
  Separator,
  ComponentPreview,
  ComponentSource,
  ...MDXTypography,
} satisfies MDXComponents;
