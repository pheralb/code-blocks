import type { ShikiTransformer } from "shiki";

const wordWrapContent = (): ShikiTransformer => {
  return {
    name: "WordWrap",
    pre(node) {
      const shikiStyles = node.properties.class;
      node.properties.class = `${shikiStyles} shiki-word-wrap`;
    },
  };
};

export { wordWrapContent };
