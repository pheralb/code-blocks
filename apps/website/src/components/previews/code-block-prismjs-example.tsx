import {
  CodeBlock,
  CodeBlockHeader,
  CodeBlockContent,
  CodeBlockGroup,
  CodeBlockIcon,
} from "@/components/code-block/code-block";

import { CodeBlockPrismjs } from "@/components/code-block/client/prismjs";
import { CopyButton } from "@/components/code-block/copy-button";
import type { Languages } from "@/utils/prismjs/highlight";

interface CodeBlockPrismjsExampleProps {
  title?: string;
  code?: string;
  language?: Languages;
  lineNumbers?: boolean;
}

const CodeBlockPrismjsExample = ({
  title,
  code,
  language = "typescript",
  lineNumbers,
}: CodeBlockPrismjsExampleProps) => {
  return (
    <CodeBlock>
      <CodeBlockHeader>
        <CodeBlockGroup>
          <CodeBlockIcon language={language} />
          <span>{title ?? "Code Block + Prismjs"}</span>
        </CodeBlockGroup>
        <CopyButton content={code ?? `console.log('Hello, world!');`} />
      </CodeBlockHeader>
      <CodeBlockContent>
        <CodeBlockPrismjs
          language={language}
          lineNumbers={lineNumbers}
          code={code ?? `console.log('Hello, world!');`}
        />
      </CodeBlockContent>
    </CodeBlock>
  );
};

export default CodeBlockPrismjsExample;
