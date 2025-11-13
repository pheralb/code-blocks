import type { ShikiTransformer } from "shiki";

export const getShikiLanguage = (): ShikiTransformer => {
  return {
    name: "GetShikiLanguage",
    pre(node) {
      node.properties["data-language"] = this.options.lang || "plaintext";
    },
  };
};

export const getCodeBlockTitle = (): ShikiTransformer => {
  return {
    name: "GetCodeBlockTitle",
    pre(node) {
      const rawMeta = this.options.meta?.__raw;
      if (!rawMeta) return;
      const title = rawMeta.match(/title=(["'])(.*?)\1/)?.[2];
      node.properties["data-title"] = title;
    },
  };
};

export const showLineNumbers = (): ShikiTransformer => {
  return {
    name: "AddLineNumbers",
    pre(node) {
      const rawMeta = this.options.meta?.__raw;
      const addLineNumbers = rawMeta?.includes("linenumbers") || false;
      const shikiStyles = node.properties.class;
      if (addLineNumbers) {
        node.properties.class = `${shikiStyles} shiki-line-numbers`;
      }
    },
  };
};

export const wordWrapContent = (): ShikiTransformer => {
  return {
    name: "WordWrap",
    pre(node) {
      node.properties.style = "white-space: pre-wrap;";
    },
  };
};
