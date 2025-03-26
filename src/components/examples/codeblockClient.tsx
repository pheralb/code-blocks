import { CodeblockClient, CodeClient } from "@/codeblock/client";

const CodeblockClientExample = () => {
  return (
    <CodeblockClient>
      <CodeClient code={`const hello = "world";`} language="typescript" />
    </CodeblockClient>
  );
};

export default CodeblockClientExample;
