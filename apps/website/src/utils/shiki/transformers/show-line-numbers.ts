import type { ShikiTransformer } from "shiki";

const showLineNumbers = (): ShikiTransformer => {
  return {
    name: "AddLineNumbers",
    pre(node) {
      const rawMeta = this.options.meta?.__raw;
      const addLineNumbers = rawMeta?.includes("lineNumbers") || false;

      if (!addLineNumbers) {
        return;
      }

      const existingClass = node.properties.class;
      if (Array.isArray(existingClass)) {
        existingClass.push("shiki-line-numbers");
      } else if (typeof existingClass === "string") {
        node.properties.class = `${existingClass} shiki-line-numbers`;
      } else {
        node.properties.class = "shiki-line-numbers";
      }
    },
  };
};

export { showLineNumbers };
