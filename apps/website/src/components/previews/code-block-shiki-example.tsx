import {
  CodeBlock,
  CodeBlockHeader,
  CodeBlockContent,
  CodeBlockGroup,
  CodeBlockIcon,
} from "@/components/code-block/code-block";

import { CopyButton } from "@/components/code-block/copy-button";
import { CodeblockShiki } from "@/components/code-block/client/shiki";

const CodeBlockShikiExample = () => {
  const code = `console.log('Hello, world!');`;
  return (
    <CodeBlock>
      <CodeBlockHeader>
        <CodeBlockGroup>
          <CodeBlockIcon language="ts" />
          <span>Code Block + Shiki</span>
        </CodeBlockGroup>
        <CopyButton content={code} />
      </CodeBlockHeader>
      <CodeBlockContent>
        <CodeblockShiki language="ts" code={code} />
      </CodeBlockContent>
    </CodeBlock>
  );
};

export default CodeBlockShikiExample;
