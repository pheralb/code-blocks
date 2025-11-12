import type { ShikiTransformer } from "shiki";

const getShikiLanguage: ShikiTransformer = {
  name: "GetShikiLanguage",
  pre(node) {
    node.properties["data-language"] = this.options.lang || "plaintext";
  },
};

const wordWrapContent: ShikiTransformer = {
  name: "WordWrap",
  pre(node) {
    node.properties.style = "white-space: pre-wrap;";
  },
};

export { getShikiLanguage, wordWrapContent };