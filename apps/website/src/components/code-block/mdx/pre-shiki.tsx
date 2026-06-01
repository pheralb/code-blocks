import type { ComponentProps } from "react";
import type { MDXComponents } from "mdx/types";
import type { Languages } from "@/utils/shiki/highlight";

import { reactToText } from "@/utils/react-to-text";

import {
  CodeBlock,
  CodeBlockHeader,
  CodeBlockContent,
  CodeBlockIcon,
  CodeBlockGroup,
} from "@/components/code-block/code-block";
import { CopyButton } from "@/components/code-block/copy-button";
import { cn } from "@/utils/cn";

interface PreProps extends ComponentProps<"pre"> {
  ["data-language"]: string;
  ["data-title"]?: string;
}

const langTitles: Record<Languages, string> = {
  bash: "Bash",
  css: "CSS",
  html: "HTML",
  js: "JavaScript",
  json: "JSON",
  mdx: "MDX",
  ts: "TypeScript",
  tsx: "React",
};

const PreShikiComponent: MDXComponents = {
  pre: ({ children, ...props }: PreProps) => {
    const content = reactToText(children);
    const title = props["data-title"];
    const language = props["data-language"];
    const displayLanguage = langTitles[language as Languages] || language;
    return (
      <CodeBlock className="group/code-block">
        <CodeBlockHeader>
          <CodeBlockGroup>
            <CodeBlockIcon language={language} />
            <span>{title || displayLanguage}</span>
          </CodeBlockGroup>
          <CopyButton content={content} />
        </CodeBlockHeader>
        <CodeBlockContent className={cn(!title && "relative")}>
          {!title && (
            <CopyButton
              content={content}
              className="sticky top-3 right-3 z-50 float-right rounded-md text-neutral-950 opacity-0 transition-opacity group-hover/code-block:opacity-100 hover:opacity-70 dark:text-neutral-50"
            />
          )}
          <pre {...props}>{children}</pre>
        </CodeBlockContent>
      </CodeBlock>
    );
  },
};

export { PreShikiComponent };
