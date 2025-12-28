import {
  CodeBlock,
  CodeBlockHeader,
  CodeBlockContent,
} from "@/components/code-block/code-block";

import { CodeBlockSugarHigh } from "@/components/code-block/client/sugar-high";

const CodeBlockSugarHighExample = () => {
  return (
    <CodeBlock>
      <CodeBlockHeader
        language="ts"
        title="Code block + Sugar High"
      />
      <CodeBlockContent>
        <CodeBlockSugarHigh code="console.log('Hello, world!');" />
      </CodeBlockContent>
    </CodeBlock>
  );
};

export default CodeBlockSugarHighExample;
