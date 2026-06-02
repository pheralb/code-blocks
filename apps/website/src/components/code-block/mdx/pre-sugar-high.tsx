import type { ComponentProps } from "react";
import type { MDXComponents } from "mdx/types";

import { highlight } from "@/utils/sugar-high/highlight";
import { reactToText } from "@/utils/react-to-text";

import {
  CodeBlock,
  CodeBlockContent,
} from "@/components/code-block/code-block";
import { CopyButton } from "@/components/code-block/copy-button";

type PreProps = ComponentProps<"pre">;

const PreSugarHighComponent: MDXComponents = {
  pre: ({ children }: PreProps) => {
    const content = reactToText(children);
    const codeHTML = highlight({
      code: content,
    });
    return (
      <CodeBlock className="group/code-block">
        <CodeBlockContent className="relative">
          <CopyButton
            content={content}
            className="sticky top-3 right-3 z-50 float-right rounded-md text-neutral-950 opacity-0 transition-opacity group-hover/code-block:opacity-100 hover:opacity-70 dark:text-neutral-50"
          />
          <pre className="sh-pre">
            <code dangerouslySetInnerHTML={{ __html: codeHTML }} />
          </pre>
        </CodeBlockContent>
      </CodeBlock>
    );
  },
};

export { PreSugarHighComponent };
