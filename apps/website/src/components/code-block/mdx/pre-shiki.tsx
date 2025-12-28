import type { ComponentProps } from "react";
import type { MDXComponents } from "mdx/types";

import { reactToText } from "@/utils/react-to-text";

import {
  CodeBlock,
  CodeBlockHeader,
  CodeBlockContent,
} from "@/components/code-block/code-block";
import { CopyButton } from "@/components/code-block/copy-button";

interface PreProps extends ComponentProps<"pre"> {
  ["data-language"]: string;
  ["data-title"]?: string;
}

const PreShikiComponent: MDXComponents = {
  pre: ({ children, ...props }: PreProps) => {
    const content = reactToText(children);
    const title = props["data-title"];
    const language = props["data-language"];
    return (
      <CodeBlock>
        <CodeBlockHeader language={language} title={title}>
          <CopyButton content={content} />
        </CodeBlockHeader>
        <CodeBlockContent>
          <pre {...props}>{children}</pre>
        </CodeBlockContent>
      </CodeBlock>
    );
  },
};

export { PreShikiComponent };
