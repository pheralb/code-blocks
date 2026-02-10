import {
  CodeBlock,
  CodeBlockHeader,
  CodeBlockContent,
  CodeBlockGroup,
  CodeBlockIcon,
} from "@/components/code-block/code-block";

import { CodeBlockSugarHigh } from "@/components/code-block/client/sugar-high";
import { CopyButton } from "@/components/code-block/copy-button";

interface CodeBlockSugarHighExampleProps {
  title?: string;
  code?: string;
  lineNumbers?: boolean;
}

const CodeBlockSugarHighExample = ({
  title,
  code,
  lineNumbers,
}: CodeBlockSugarHighExampleProps) => {
  return (
    <CodeBlock>
      <CodeBlockHeader>
        <CodeBlockGroup>
          <CodeBlockIcon language="ts" />
          <span>{title ?? "Code Block + Sugar High"}</span>
        </CodeBlockGroup>
        <CopyButton content={code ?? `console.log('Hello, world!');`} />
      </CodeBlockHeader>
      <CodeBlockContent>
        <CodeBlockSugarHigh
          lineNumbers={lineNumbers}
          code={code ?? `console.log('Hello, world!');`}
        />
      </CodeBlockContent>
    </CodeBlock>
  );
};

export default CodeBlockSugarHighExample;
