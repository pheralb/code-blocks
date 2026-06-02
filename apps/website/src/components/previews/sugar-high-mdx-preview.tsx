import { highlight } from "@/utils/sugar-high/highlight";

import {
  CodeBlock,
  CodeBlockHeader,
  CodeBlockContent,
  CodeBlockGroup,
} from "@/components/code-block/code-block";

import { cn } from "@/utils/cn";
import { CopyButton } from "@/components/code-block/copy-button";

interface SugarHighPreviewProps {
  code: string;
  title?: string;
}

export function SugarHighPreview({ code, title }: SugarHighPreviewProps) {
  const codeHTML = highlight({ code });
  return (
    <CodeBlock className="group/code-block">
      {title && (
        <CodeBlockHeader>
          <CodeBlockGroup>
            <span>{title}</span>
          </CodeBlockGroup>
          <CopyButton content={codeHTML} />
        </CodeBlockHeader>
      )}
      <CodeBlockContent className={cn(!title && "relative")}>
        {!title && (
          <CopyButton
            content={codeHTML}
            className="sticky top-3 right-3 z-50 float-right rounded-md text-neutral-950 opacity-0 transition-opacity group-hover/code-block:opacity-100 hover:opacity-70 dark:text-neutral-50"
          />
        )}
        <pre className="sh-pre">
          <code dangerouslySetInnerHTML={{ __html: codeHTML }} />
        </pre>
      </CodeBlockContent>
    </CodeBlock>
  );
}
