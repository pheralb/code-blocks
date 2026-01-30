import {
  CodeBlock,
  CodeBlockHeader,
  CodeBlockContent,
  CodeBlockGroup,
  CodeBlockIcon,
} from "@/components/code-block/code-block";

import { CodeBlockSugarHigh } from "@/components/code-block/client/sugar-high";
import { CopyButton } from "@/components/code-block/copy-button";

const code = `export default function App() {
  return (
    <>
      <h1 id="title">
        Hello
        <span> world</span>
      </h1>
      <div style={styles.bar} />
    </>
  )
}`;

const CodeBlockSugarHighExample = () => {
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
        <CodeBlockSugarHigh lineNumbers={true} code={code} />
      </CodeBlockContent>
    </CodeBlock>
  );
};

export default CodeBlockSugarHighExample;
