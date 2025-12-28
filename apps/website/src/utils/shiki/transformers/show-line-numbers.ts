import type { ShikiTransformer } from "shiki";

const showLineNumbers = (): ShikiTransformer => {
  return {
    name: "AddLineNumbers",
    pre(node) {
      const rawMeta = this.options.meta?.__raw;
      const addLineNumbers = rawMeta?.includes("lineNumbers") || false;
      const shikiStyles = node.properties.class;
      if (addLineNumbers) {
        node.properties.class = `${shikiStyles} shiki-line-numbers`;
      }
    },
  };
};

export { showLineNumbers };