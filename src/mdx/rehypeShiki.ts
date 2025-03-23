import type { RehypeShikiOptions } from "@shikijs/rehype";

export const rehypeShikiOptions: RehypeShikiOptions = {
  themes: {
    light: "one-light",
    dark: "one-dark-pro",
  },
  transformers: [
    {
      name: "AddLineClass",
      code(node) {
        return {
          ...node,
          children: node.children.map((child) => {
            if (child.type === "element" && child.tagName === "span") {
              child.properties.className = ["line"];
            }
            return child;
          }),
        };
      },
    },
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
