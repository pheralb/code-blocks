import {
  CodeBlock,
  CodeBlockContent,
  CodeBlockGroup,
  CodeBlockHeader,
  CodeBlockIcon,
} from "@/components/code-block/code-block";
import { CodeblockShiki } from "@/components/code-block/client/shiki";
import { CopyTextMorph } from "@/components/code-block/blocks/copy-text-morph";

const code = `const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Text copied to clipboard");
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }
};`;

const CopyMorphExample = () => {
  return (
    <CodeBlock>
      <CodeBlockHeader>
        <CodeBlockGroup>
          <CodeBlockIcon language="js" />
          <span>Copy with Text Morph</span>
        </CodeBlockGroup>
        <CopyTextMorph content={code} />
      </CodeBlockHeader>
      <CodeBlockContent>
        <CodeblockShiki language="ts" code={code} />
      </CodeBlockContent>
    </CodeBlock>
  );
};

export default CopyMorphExample;
