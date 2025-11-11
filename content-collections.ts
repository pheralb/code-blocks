import { z } from "zod";

import {
  defineCollection,
  defineConfig,
  type Context,
  type Document,
} from "@content-collections/core";

// Plugins:
import remarkGfm from "remark-gfm";
import rehypeShiki from "@shikijs/rehype/core";
import { compileMDX } from "@content-collections/mdx";
import { shikiHighlighter } from "./src/utils/shiki";
import { rehypeShikiOptions } from "./src/mdx/rehypeShiki";
import { getTableOfContents } from "./src/mdx/generateToC";

// Schema:
const docSchema = z.object({
  title: z.string(),
  description: z.string(),
  category: z.string(),
  content: z.string(),
});

type DocSchema = z.infer<typeof docSchema>;
type DocsDocument = Document & DocSchema;

// Transform:
const docTransform = async (document: DocsDocument, context: Context) => {
  const highlighter = await shikiHighlighter();
  const tableOfContents = getTableOfContents(document.content);
  const mdx = await compileMDX(context, document, {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypeShiki, highlighter, rehypeShikiOptions]],
  });
  return {
    ...document,
    tableOfContents,
    mdx,
  };
};

// Collections:
const generalDocs = defineCollection({
  name: "general",
  directory: "src/docs",
  include: "**/*.mdx",
  schema: docSchema,
  transform: docTransform,
});

const shikiDocs = defineCollection({
  name: "shiki",
  directory: "src/docs/shiki",
  include: "**/*.mdx",
  schema: docSchema,
  transform: docTransform,
});

export default defineConfig({
  collections: [generalDocs, shikiDocs],
});
