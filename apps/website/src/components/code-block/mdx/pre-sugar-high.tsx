import type { ComponentProps } from "react";
import type { MDXComponents } from "mdx/types";

import { highlight } from "@/utils/sugar-high";
import { reactToText } from "@/utils/react-to-text";

import {
  CodeBlock,
  CodeBlockHeader,
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
      <CodeBlock>
        <CodeBlockHeader>
          <CopyButton content={content} />
        </CodeBlockHeader>
        <CodeBlockContent>
          <pre>
            <code dangerouslySetInnerHTML={{ __html: codeHTML }} />
          </pre>
        </CodeBlockContent>
      </CodeBlock>
    );
  },
};

export { PreSugarHighComponent };
