import type { RehypeShikiCoreOptions } from "@shikijs/rehype/core";

// Shiki custom transformers
import { getShikiLanguage } from "@/utils/shiki/transformers/get-language";
import { getCodeBlockTitle } from "@/utils/shiki/transformers/get-title";
import { showLineNumbers } from "@/utils/shiki/transformers/show-line-numbers";
import { wordWrapContent } from "@/utils/shiki/transformers/word-wrap";

// Shiki Core Transformers
import {
  transformerMetaHighlight,
  transformerNotationDiff,
} from "@shikijs/transformers";

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
    transformerNotationDiff(),
    transformerMetaHighlight({
      className: "shiki-line-highlight",
    }),
  ],
};

export { rehypeShikiOptions };
