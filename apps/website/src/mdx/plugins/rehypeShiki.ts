import type { RehypeShikiCoreOptions } from "@shikijs/rehype/core";

// Shiki custom transformers
import {
  addTitleProperty,
  addLanguageProperty,
} from "@/utils/shiki/transformers/add-to-pre-element";
import { showLineNumbers } from "@/utils/shiki/transformers/show-line-numbers";
import { wordWrapContent } from "@/utils/shiki/transformers/word-wrap";

// Shiki Core Transformers
import {
  transformerMetaHighlight,
  transformerNotationDiff,
  transformerNotationFocus,
} from "@shikijs/transformers";

const rehypeShikiOptions: RehypeShikiCoreOptions = {
  themes: {
    light: "one-light",
    dark: "one-dark-pro",
  },
  transformers: [
    addTitleProperty(),
    addLanguageProperty(),
    wordWrapContent(),
    showLineNumbers(),
    transformerNotationDiff(),
    transformerNotationFocus({
      classActivePre: "shiki-has-focused",
    }),
    transformerMetaHighlight({
      className: "shiki-line-highlight",
    }),
  ],
};

export { rehypeShikiOptions };
