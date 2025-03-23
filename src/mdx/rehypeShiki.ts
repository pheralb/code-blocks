import type { RehypeShikiOptions } from "@shikijs/rehype";
import { transformerNotationHighlight } from "@shikijs/transformers";

export const rehypeShikiOptions: RehypeShikiOptions = {
  themes: {
    light: "one-light",
    dark: "one-dark-pro",
  },
  transformers: [
    transformerNotationHighlight(),
    {
      name: "AddPreProperties",
      pre(node) {
        node.properties["data-language"] = this.options.lang || "plaintext";
        node.properties["data-extra"] = this.options.meta?.__raw || "";
      },
    },
    {
      name: "WordWrap",
      pre(node) {
        node.properties["style"] = "white-space: pre-wrap;";
      },
    },
  ],
};
