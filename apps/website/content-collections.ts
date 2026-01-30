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
import { rehypeComponent } from "./src/mdx/plugins/rehypeComponent";
import { rehypeReactDoc } from "./src/mdx/plugins/rehypeReactDoc";
import { HEADING_LINK_ANCHOR } from "./src/components/ui/headings";

// Schema:
const docSchema = z.object({
  title: z.string(),
  description: z.string(),
  category: z.string().array(),
  content: z.string(),
});

type DocSchema = z.infer<typeof docSchema>;
type DocsDocument = Document & DocSchema;

interface DocTransformParams {
  folder: string;
  subFolder?: string;
  document: DocsDocument;
  context: Context;
}

// Transform:
const docTransform = async ({
  folder,
  subFolder,
  document,
  context,
}: DocTransformParams) => {
  const highlighter = await highlight();
  const code = await compileMDX(context, document, {
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
    subFolder,
    mdx: code,
  };
};

// Collections:
const generalDocs = defineCollection({
  name: "general",
  directory: "src/docs",
  include: "*.mdx",
  schema: docSchema,
  transform: (document, context) =>
    docTransform({ folder: "general", document, context }),
  onSuccess: (docs) => {
    console.log(
      `|- (content-collections) ✅ generalDocs Collection - Successfully processed ${docs.length} documents.`,
    );
  },
});

const gstartedDocs = defineCollection({
  name: "gstarted",
  directory: "src/docs/getting-started",
  include: "**/*.mdx",
  schema: docSchema,
  transform: (document, context) =>
    docTransform({ folder: "getting-started", document, context }),
  onSuccess: (docs) => {
    console.log(
      `|- (content-collections) ✅ getting-started Collection - Successfully processed ${docs.length} documents.`,
    );
  },
});

const reactDocs = defineCollection({
  name: "react",
  directory: "src/docs/react",
  include: "**/*.mdx",
  schema: docSchema,
  transform: (document, context) =>
    docTransform({ folder: "react", document, context }),
  onSuccess: (docs) => {
    console.log(
      `|- (content-collections) ✅ react Collection - Successfully processed ${docs.length} documents.`,
    );
  },
});

const shikiDocs = defineCollection({
  name: "shiki",
  directory: "src/docs/shiki",
  include: "**/*.mdx",
  schema: docSchema,
  transform: (document, context) =>
    docTransform({ folder: "shiki", document, context }),
  onSuccess: (docs) => {
    console.log(
      `|- (content-collections) ✅ shiki Collection - Successfully processed ${docs.length} documents.`,
    );
  },
});

const sugarHighDocs = defineCollection({
  name: "shigh",
  directory: "src/docs/sugar-high",
  include: "**/*.mdx",
  schema: docSchema,
  transform: (document, context) =>
    docTransform({ folder: "sugar-high", document, context }),
  onSuccess: (docs) => {
    console.log(
      `|- (content-collections) ✅ sugar-high Collection - Successfully processed ${docs.length} documents.`,
    );
  },
});

export default defineConfig({
  collections: [
    generalDocs,
    gstartedDocs,
    reactDocs,
    shikiDocs,
    sugarHighDocs,
  ],
});
