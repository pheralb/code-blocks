import type { ShikiTransformer } from "shiki";

/**
 * Transformer to highlight specific lines or line ranges
 * Usage: ```js {1,3-5,7}
 * This will highlight lines 1, 3 through 5, and 7
 */
const highlightLines = (): ShikiTransformer => {
  return {
    name: "HighlightLines",
    line(node, line) {
      const rawMeta = this.options.meta?.__raw;
      if (!rawMeta) return;

      // Match patterns like {1,3-5,7} or {1-3}
      const highlightMatch = rawMeta.match(/\{([0-9,-]+)\}/);
      if (!highlightMatch) return;

      const highlightRanges = highlightMatch[1];
      const linesToHighlight = parseLineNumbers(highlightRanges);

      if (linesToHighlight.includes(line)) {
        node.properties.class = node.properties.class
          ? `${node.properties.class} highlighted`
          : "highlighted";
      }
    },
  };
};

/**
 * Parse line number ranges from meta string
 * Examples:
 * - "1,3,5" -> [1, 3, 5]
 * - "1-3,5" -> [1, 2, 3, 5]
 * - "1-3,5-7" -> [1, 2, 3, 5, 6, 7]
 */
function parseLineNumbers(ranges: string): number[] {
  const lines: number[] = [];
  const parts = ranges.split(",");

  for (const part of parts) {
    if (part.includes("-")) {
      const [start, end] = part.split("-").map(Number);
      for (let i = start; i <= end; i++) {
        lines.push(i);
      }
    } else {
      lines.push(Number(part));
    }
  }

  return lines;
}

export { highlightLines };
