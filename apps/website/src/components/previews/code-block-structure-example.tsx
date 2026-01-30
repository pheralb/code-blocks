import {
  CodeBlock,
  CodeBlockHeader,
  CodeBlockContent,
  CodeBlockIcon,
  CodeBlockGroup,
} from "@/components/code-block/code-block";

import { CopyButton } from "@/components/code-block/copy-button";

const CodeBlockStructure = () => {
  return (
    <CodeBlock>
      <CodeBlockHeader>
        <CodeBlockGroup>
          <CodeBlockIcon language="ts" />
          <span>example.ts</span>
        </CodeBlockGroup>
        <CopyButton content="Your syntax highlighted code goes here." />
      </CodeBlockHeader>
      <CodeBlockContent>
        <div className="p-2">
          <p>Your syntax highlighted code goes here.</p>
        </div>
      </CodeBlockContent>
    </CodeBlock>
  );
};

export default CodeBlockStructure;
