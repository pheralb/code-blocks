import type { RehypeShikiCoreOptions } from "@shikijs/rehype/core";

// Shiki custom transformers
import {
  getCodeBlockTitle,
  getShikiLanguage,
  showLineNumbers,
  wordWrapContent,
} from "@/utils/shiki-transformers";

const rehypeShikiOptions: RehypeShikiCoreOptions = {
  themes: {
    light: "one-light",
    dark: "one-dark-pro",
  },
  transformers: [
    getShikiLanguage(),
    wordWrapContent(),
    getCodeBlockTitle(),
    showLineNumbers(),
  ],
};

export { rehypeShikiOptions };
