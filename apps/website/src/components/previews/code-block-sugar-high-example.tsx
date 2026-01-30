import {
  CodeBlock,
  CodeBlockHeader,
  CodeBlockContent,
  CodeBlockGroup,
  CodeBlockIcon,
} from "@/components/code-block/code-block";

import { CodeBlockSugarHigh } from "@/components/code-block/client/sugar-high";
import { CopyButton } from "@/components/code-block/copy-button";

const CodeBlockSugarHighExample = () => {
  const code = `console.log('Hello, world!');`;
  return (
    <CodeBlock>
      <CodeBlockHeader>
        <CodeBlockGroup>
          <CodeBlockIcon language="ts" />
          <span>Code Block + Sugar High</span>
        </CodeBlockGroup>
        <CopyButton content={code} />
      </CodeBlockHeader>
      <CodeBlockContent>
        <CodeBlockSugarHigh code={code} />
      </CodeBlockContent>
    </CodeBlock>
  );
};

export default CodeBlockSugarHighExample;
