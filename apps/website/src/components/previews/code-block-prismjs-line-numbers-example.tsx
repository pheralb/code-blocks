import {
  CodeBlock,
  CodeBlockHeader,
  CodeBlockContent,
  CodeBlockGroup,
  CodeBlockIcon,
} from "@/components/code-block/code-block";

import { CodeBlockPrismjs } from "@/components/code-block/client/prismjs";
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

const CodeBlockPrismjsLineNumbersExample = () => {
  return (
    <CodeBlock>
      <CodeBlockHeader>
        <CodeBlockGroup>
          <CodeBlockIcon language="tsx" />
          <span>Code Block with Prismjs and Line Numbers</span>
        </CodeBlockGroup>
        <CopyButton content={code} />
      </CodeBlockHeader>
      <CodeBlockContent>
        <CodeBlockPrismjs language="tsx" lineNumbers={true} code={code} />
      </CodeBlockContent>
    </CodeBlock>
  );
};

export default CodeBlockPrismjsLineNumbersExample;
