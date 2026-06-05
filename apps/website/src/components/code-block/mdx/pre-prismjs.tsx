import type { ComponentProps } from "react";
import type { MDXComponents } from "mdx/types";

import { reactToText } from "@/utils/react-to-text";
import { highlight, type Languages } from "@/utils/prismjs/highlight";

import {
  CodeBlock,
  CodeBlockContent,
} from "@/components/code-block/code-block";
import { CopyButton } from "@/components/code-block/copy-button";

type PreProps = ComponentProps<"pre"> & {
  ["data-language"]?: string;
};

const PrePrismComponent: MDXComponents = {
  pre: ({ children, ...props }: PreProps) => {
    const content = reactToText(children);
    const language = props["data-language"] as Languages;
    const codeHTML = highlight({ code: content, language });
    return (
      <CodeBlock className="group/code-block">
        <CodeBlockContent className="relative">
          <CopyButton
            content={content}
            className="sticky top-3 right-3 z-50 float-right rounded-md text-neutral-950 opacity-0 transition-opacity group-hover/code-block:opacity-100 hover:opacity-70 dark:text-neutral-50"
          />
          <pre className="prism-pre">
            <code dangerouslySetInnerHTML={{ __html: codeHTML }} />
          </pre>
        </CodeBlockContent>
      </CodeBlock>
    );
  },
};

export { PrePrismComponent };
