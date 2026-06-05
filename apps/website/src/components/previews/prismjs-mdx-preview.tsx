import { highlight } from "@/utils/prismjs/highlight";
import type { Languages } from "@/utils/prismjs/highlight";

import {
  CodeBlock,
  CodeBlockHeader,
  CodeBlockContent,
  CodeBlockGroup,
} from "@/components/code-block/code-block";

import { cn } from "@/utils/cn";
import { CopyButton } from "@/components/code-block/copy-button";

interface PrismjsPreviewProps {
  code: string;
  language?: Languages;
  title?: string;
}

export function PrismjsPreview({
  code,
  language = "typescript",
  title,
}: PrismjsPreviewProps) {
  const codeHTML = highlight({ code, language });
  return (
    <CodeBlock className="group/code-block">
      {title && (
        <CodeBlockHeader>
          <CodeBlockGroup>
            <span>{title}</span>
          </CodeBlockGroup>
          <CopyButton content={code} />
        </CodeBlockHeader>
      )}
      <CodeBlockContent className={cn(!title && "relative")}>
        {!title && (
          <CopyButton
            content={code}
            className="sticky top-3 right-3 z-50 float-right rounded-md text-neutral-950 opacity-0 transition-opacity group-hover/code-block:opacity-100 hover:opacity-70 dark:text-neutral-50"
          />
        )}
        <pre className="prism-pre">
          <code dangerouslySetInnerHTML={{ __html: codeHTML }} />
        </pre>
      </CodeBlockContent>
    </CodeBlock>
  );
}
