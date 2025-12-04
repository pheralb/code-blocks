import type { MDXComponents } from "mdx/types";
import type { ComponentProps } from "react";

// Utils
import { reactToText } from "@/utils/react-to-text";

// MDX Components
import ShowSource from "@/components/show-source";

// Registry Components
import { CodeBlock } from "@/components/code-block/code-block";
import { CopyContent } from "@/components/code-block/copy-content";
import { CodeBlockHeader } from "@/components/code-block/code-block-header";
import { CodeBlockContent } from "@/components/code-block/code-block-content";

// Get data from Shiki transformers
interface PreProps extends ComponentProps<"pre"> {
  ["data-language"]: string;
  ["data-title"]?: string;
}

const MDXCustomComponents: MDXComponents = {
  pre: ({ children, ...props }: PreProps) => {
    const content = reactToText(children);
    const title = props["data-title"];
    const language = props["data-language"];
    return (
      <CodeBlock>
        <CodeBlockHeader language={language} title={title}>
          <CopyContent content={content} />
        </CodeBlockHeader>
        <CodeBlockContent>
          <pre {...props}>{children}</pre>
        </CodeBlockContent>
      </CodeBlock>
    );
  },
  ShowSource,
};

export { MDXCustomComponents };
