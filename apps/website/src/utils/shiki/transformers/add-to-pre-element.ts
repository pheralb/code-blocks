import type { ShikiTransformer } from "shiki";

const addTitleProperty = (): ShikiTransformer => {
  return {
    name: "AddTitleProperty",
    pre(node) {
      const rawMeta = this.options.meta?.__raw;
      if (!rawMeta) return;
      const title = rawMeta.match(/title=(["'])(.*?)\1/)?.[2];
      node.properties["data-title"] = title;
    },
  };
};

const addLanguageProperty = (): ShikiTransformer => {
  return {
    name: "AddLanguageProperty",
    pre(node) {
      node.properties["data-language"] = this.options.lang || "plaintext";
    },
  };
};

export { addTitleProperty, addLanguageProperty };
