import { z } from "zod";

import {
  defineCollection,
  defineConfig,
  type Context,
  type Document,
} from "@content-collections/core";

// Plugins:
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeShiki from "@shikijs/rehype/core";

import { compileMDX } from "@content-collections/mdx";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import { highlight } from "./src/utils/shiki";
import { rehypeShikiOptions } from "./src/mdx/plugins/rehypeShiki";
import { getTableOfContents } from "./src/mdx/plugins/generateToC";
import { rehypeComponent } from "./src/mdx/plugins/rehypeComponent";
import { rehypeReactDoc } from "./src/mdx/plugins/rehypeReactDoc";
import { HEADING_LINK_ANCHOR } from "./src/components/ui/headings";

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
const docTransform = async (
  folder: string,
  document: DocsDocument,
  context: Context,
) => {
  const highlighter = await highlight();
  const tableOfContents = getTableOfContents(document.content);
  const mdx = await compileMDX(context, document, {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeComponent,
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: [HEADING_LINK_ANCHOR],
          },
        },
      ],
      rehypeReactDoc,
      [rehypeShiki, highlighter, rehypeShikiOptions],
    ],
  });
  return {
    ...document,
    folder,
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
  transform: (document, context) => docTransform("general", document, context),
});

const gstartedDocs = defineCollection({
  name: "gstarted",
  directory: "src/docs/getting-started",
  include: "**/*.mdx",
  schema: docSchema,
  transform: (document, context) =>
    docTransform("getting-started", document, context),
});

const componentsDocs = defineCollection({
  name: "components",
  directory: "src/docs/components",
  include: "**/*.mdx",
  schema: docSchema,
  transform: (document, context) =>
    docTransform("components", document, context),
});

const shikiDocs = defineCollection({
  name: "shiki",
  directory: "src/docs/shiki",
  include: "**/*.mdx",
  schema: docSchema,
  transform: (document, context) => docTransform("shiki", document, context),
});

export default defineConfig({
  collections: [generalDocs, gstartedDocs, componentsDocs, shikiDocs],
});
