import { defineCollection, defineConfig } from "@content-collections/core";
import path from "node:path";
import fs from "node:fs/promises";

// MDX Plugins:
import { compileMDX } from "@content-collections/mdx";
import rehypeShiki from "@shikijs/rehype";
import { rehypeShikiOptions } from "./src/mdx/rehypeShiki";
import { visit } from "unist-util-visit";
import remarkGfm from "remark-gfm";

// Global Config:
const mainDomain = "codeblocks.pheralb.dev";

const docs = defineCollection({
  name: "docs",
  directory: "src/docs",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    category: z.string(),
  }),
  transform: async (document, context) => {
    const filePath = path.join(
      context.collection.directory,
      document._meta.filePath,
    );
    const { mtimeMs, birthtimeMs } = await fs.stat(filePath);
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        // Shiki:
        [rehypeShiki, rehypeShikiOptions],
        // Open External Links:
        () => (tree) => {
          visit(tree, "element", (e) => {
            if (
              e.tagName === "a" &&
              e.properties?.href &&
              e.properties.href.toString().startsWith("http") &&
              !e.properties.href.toString().includes(mainDomain)
            ) {
              e.properties!["target"] = "_blank";
            }
          });
        },
      ],
    });
    return {
      ...document,
      mdxSource: mdx,
      slug: document._meta.path,
      url: `/${document._meta.path}`,
      createdAt: new Date(birthtimeMs),
      updatedAt: new Date(mtimeMs),
    };
  },
});

export default defineConfig({
  collections: [docs],
});
