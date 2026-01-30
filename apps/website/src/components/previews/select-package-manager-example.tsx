import { CodeBlockSelectPkg } from "@/components/code-block/blocks/copy-with-select-package-manager";

const CopyWithPkgManagerExample = () => {
  return (
    <CodeBlockSelectPkg
      type="install"
      title="Install React-Symbols Icons"
      command="@react-symbols/icons"
    />
  );
};

export default CopyWithPkgManagerExample;
