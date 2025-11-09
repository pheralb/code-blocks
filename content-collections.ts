import { z } from "zod";

import {
  defineCollection,
  defineConfig,
  type Context,
  type Document,
} from "@content-collections/core";

// Plugins:
import { compileMDX } from "@content-collections/mdx";

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
  const mdx = await compileMDX(context, document);
  return {
    ...document,
    mdx,
  };
};

// Collection:
const docs = defineCollection({
  name: "docs",
  directory: "src/docs",
  include: "**/*.mdx",
  schema: docSchema,
  transform: docTransform,
});

export default defineConfig({
  collections: [docs],
});
