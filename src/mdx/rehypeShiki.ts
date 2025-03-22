import type { RehypeShikiOptions } from "@shikijs/rehype";

export const rehypeShikiOptions: RehypeShikiOptions = {
  themes: {
    light: "one-light",
    dark: "one-dark-pro",
  },
  transformers: [
    {
      name: "AddPreProperties",
      pre(node) {
        node.properties["data-language"] = this.options.lang || "plaintext";
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
