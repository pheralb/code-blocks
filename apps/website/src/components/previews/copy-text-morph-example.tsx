import { CopyTextMorph } from "@/components/code-block/blocks/copy-text-morph";

const code = `export default function Page() {
  return <h1>Hello</h1>
}`;

const CopyMorphExample = () => {
  return <CopyTextMorph content={code} />;
};

export default CopyMorphExample;
