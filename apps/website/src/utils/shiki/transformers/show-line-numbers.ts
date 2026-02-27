import type { ShikiTransformer } from "shiki";

interface ShowLineNumbersOptions {
  /**
   * Always show line numbers regardless of meta properties
   * @default false
   */
  activateByDefault?: boolean;
}

const showLineNumbers = (
  options: ShowLineNumbersOptions = {},
): ShikiTransformer => {
  const { activateByDefault = false } = options;

  return {
    name: "AddLineNumbers",
    pre(node) {
      const rawMeta = this.options.meta?.__raw;
      const hasLineNumbersMeta = rawMeta?.includes("lineNumbers") ?? false;
      const addLineNumbers = activateByDefault || hasLineNumbersMeta;

      if (!addLineNumbers) {
        return;
      }

      const existingClass = node.properties.class;
      const className = "shiki-line-numbers";

      if (Array.isArray(existingClass)) {
        if (!existingClass.includes(className)) {
          existingClass.push(className);
        }
      } else if (typeof existingClass === "string") {
        const classes = existingClass.split(" ");
        if (!classes.includes(className)) {
          node.properties.class = `${existingClass} ${className}`;
        }
      } else {
        node.properties.class = [className];
      }
    },
  };
};

export { showLineNumbers };
