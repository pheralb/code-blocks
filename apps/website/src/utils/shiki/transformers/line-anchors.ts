import type { ShikiTransformer } from "shiki";

interface LineAnchorsOptions {
  addPrefix?: string;
}

const lineAnchors = ({ addPrefix }: LineAnchorsOptions = {}): ShikiTransformer => {
  return {
    name: "LineAnchors",
    line(node, line) {
      const rawMeta = this.options.meta?.__raw;
      if (!rawMeta) return;
      const prefix = rawMeta.match(/prefix=(["'])(.*?)\1/)?.[2] ?? addPrefix;
      if (!prefix) return;
      node.properties.id = `${prefix}-l${line}`;
      node.properties["data-line"] = line;
    },
    pre(node) {
      const existingClass = node.properties.class;
      if (Array.isArray(existingClass)) {
        existingClass.push("shiki-line-anchors");
      } else if (typeof existingClass === "string") {
        node.properties.class = `${existingClass} shiki-line-anchors`;
      } else {
        node.properties.class = "shiki-line-anchors";
      }
    },
  };
};

export { lineAnchors };
