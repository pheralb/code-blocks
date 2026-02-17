import {
  CodeBlock,
  CodeBlockContent,
  CodeBlockGroup,
  CodeBlockHeader,
  CodeBlockIcon,
} from "@/components/code-block/code-block";
import { CodeblockShiki } from "@/components/code-block/client/shiki";
import { CopyTextMorph } from "@/components/code-block/blocks/copy-text-morph";

const code = `export default function Page() {
  return <h1>Hello</h1>
}`;

const CopyMorphExample = () => {
  return (
    <CodeBlock>
      <CodeBlockHeader>
        <CodeBlockGroup>
          <CodeBlockIcon language="tsx" />
          <span>Copy with Text Morph</span>
        </CodeBlockGroup>
        <CopyTextMorph content={code} />
      </CodeBlockHeader>
      <CodeBlockContent>
        <CodeblockShiki language="tsx" code={code} />
      </CodeBlockContent>
    </CodeBlock>
  );
};

export default CopyMorphExample;
