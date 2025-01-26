import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";

// MDX Plugins:
import {
  remarkGfm,
  remarkHeading,
  remarkStructure,
} from "fumadocs-core/mdx-plugins";
import GithubSlugger from "github-slugger";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { visit } from "unist-util-visit";
import rehypeShiki, { type RehypeShikiOptions } from "@shikijs/rehype";

// Domain:
const domain = "codeblocks.pheralb.dev";

// Shiki Options:
const shikiOptions: RehypeShikiOptions = {
  themes: {
    light: "github-light",
    dark: "github-dark",
  },
  transformers: [
    {
      name: "AddPreProperties",
      pre(node) {
        node.properties["data-language"] = this.options.lang || "plaintext";
        node.properties["data-code"] = this.source;
      },
    },
  ],
};

// Docs Collection:
const docs = defineCollection({
  name: "docs",
  directory: "src/docs",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm, remarkHeading, remarkStructure],
      rehypePlugins: [
        [rehypeShiki, shikiOptions],
        // Open External Links in New Tab:
        () => (tree) => {
          visit(tree, "element", (e) => {
            if (
              e.tagName === "a" &&
              e.properties?.href &&
              e.properties.href.toString().startsWith("http") &&
              !e.properties.href.toString().includes(domain)
            ) {
              e.properties!["target"] = "_blank";
            }
          });
        },
        [rehypeAutolinkHeadings],
      ],
    });
    const slugger = new GithubSlugger();
    const regXHeader = /\n(?<flag>#+)\s+(?<content>.+)/g;
    const tableOfContents = Array.from(
      document.content.matchAll(regXHeader)
    ).map(({ groups }) => {
      const flag = groups?.flag;
      const content = groups?.content;
      return {
        level: flag?.length,
        text: content,
        slug: content ? slugger.slug(content) : undefined,
      };
    });
    return {
      ...document,
      mdx,
      slug: document._meta.path,
      url: `/${document._meta.path}`,
      toc: tableOfContents,
    };
  },
});

export default defineConfig({
  collections: [docs],
});
