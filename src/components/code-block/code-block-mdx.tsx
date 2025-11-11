import type { ComponentProps } from "react";

const CodeBlockMDX = (props: ComponentProps<"pre">) => {
  return (
    <div>
      <pre {...props} />
    </div>
  );
};

export { CodeBlockMDX };
