import type { ShikiTransformer } from "shiki";

/**
 * Transformer to add anchor links to line numbers
 * Allows users to link to specific lines in code blocks
 * Usage: Automatically works with lineNumbers transformer
 * Result: Each line gets an id like "L1", "L2", etc.
 */
const lineAnchors = (): ShikiTransformer => {
  return {
    name: "LineAnchors",
    line(node, line) {
      // Add id attribute to each line for anchor linking
      node.properties.id = `L${line}`;
      
      // Add data attribute for styling targeted lines
      node.properties["data-line"] = line;
    },
    pre(node) {
      // Add class to enable anchor styling
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
