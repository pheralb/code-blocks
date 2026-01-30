import type { ShikiTransformer } from "shiki";

const wordWrapContent = (): ShikiTransformer => {
  return {
    name: "WordWrap",
    pre(node) {
      node.properties.style = "white-space: pre-wrap;";
    },
  };
};

export { wordWrapContent };