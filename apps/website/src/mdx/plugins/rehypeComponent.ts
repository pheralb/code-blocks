import type { UnistNode, UnistTree } from "@/mdx/types/unist";

import fs from "fs";
import path from "path";
import { u } from "unist-builder";
import { visit } from "unist-util-visit";

// Components Registry:
import { getComponent } from "@/components/registry/get-component";

export function rehypeComponent() {
  return (tree: UnistTree) => {
    visit(tree, (node: UnistNode) => {
      if (node.name === "ComponentPreview") {
        const title = getNodeAttributeByName(node, "component")
          ?.value as string;

        if (!title) {
          return null;
        }

        try {
          const component = getComponent(title);

          if (!component) {
            console.warn(
              `|- ⚠️ mdx/rehypeComponent/plugin - Component "${title}" not found in registry.`,
            );
            return;
          }

          const sourceFile =
            component.exampleFileSource || component.fileSource;

          if (!sourceFile) {
            console.warn(
              `|- ⚠️ mdx/rehypeComponent/plugin - Component "${title}" does not have a fileSource or exampleFileSource. Fix component registry.`,
            );
            return;
          }

          const src = path.resolve(process.cwd(), sourceFile);
          const source = fs.readFileSync(src, "utf8");

          if (!source) {
            throw new Error(
              `|- ❌ mdx/rehypeComponent/plugin - Source code for component "${title}" is empty or not found.`,
            );
          }

          node.children?.push(
            u("element", {
              tagName: "pre",
              properties: {
                className: [`language-${component.fileType}`],
              },
              children: [
                u("element", {
                  tagName: "code",
                  properties: {
                    className: [`language-${component.fileType}`],
                  },
                  children: [
                    {
                      type: "text",
                      value: source,
                    },
                  ],
                }),
              ],
            }),
          );
        } catch (error) {
          console.error(
            `|- ❌ mdx/rehypeComponent/plugin - Error: ${error as string}`,
          );
        }
      }

      if (node.name === "ShowSource") {
        const title = getNodeAttributeByName(node, "component")
          ?.value as string;

        if (!title) {
          return null;
        }

        try {
          const component = getComponent(title);

          if (!component) {
            console.warn(
              `|- ⚠️ mdx/rehypeComponent/plugin - Component "${title}" not found in registry.`,
            );
            return;
          }

          const src = path.resolve(process.cwd(), component.fileSource);
          const source = fs.readFileSync(src, "utf8");

          if (!source) {
            throw new Error(
              `|- ❌ mdx/rehypeComponent/plugin - Source code for component "${title}" is empty or not found.`,
            );
          }

          node.children?.push(
            u("element", {
              tagName: "pre",
              properties: {
                className: [`language-${component.fileType}`],
              },
              children: [
                u("element", {
                  tagName: "code",
                  properties: {
                    className: [`language-${component.fileType}`],
                  },
                  children: [
                    {
                      type: "text",
                      value: source,
                    },
                  ],
                }),
              ],
            }),
          );
        } catch (error) {
          console.error(
            `|- ❌ mdx/rehypeComponent/plugin - Error: ${error as string}`,
          );
        }
      }
    });
  };
}

function getNodeAttributeByName(node: UnistNode, name: string) {
  return node.attributes?.find((attribute) => attribute.name === name);
}
