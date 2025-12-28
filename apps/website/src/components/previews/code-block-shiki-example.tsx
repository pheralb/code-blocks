import {
  CodeBlock,
  CodeBlockHeader,
  CodeBlockContent,
} from "@/components/code-block/code-block";

import { CodeblockShiki } from "@/components/code-block/client/shiki";

const CodeBlockShikiExample = () => {
  return (
    <CodeBlock>
      <CodeBlockHeader
        language="ts"
        title="Code block + Shiki"
      />
      <CodeBlockContent>
        <CodeblockShiki language="ts" code="console.log('Hello, world!');" />
      </CodeBlockContent>
    </CodeBlock>
  );
};

export default CodeBlockShikiExample;
