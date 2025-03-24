import type { UnistNode, UnistTree } from "./types";

import fs from "fs";
import path from "path";
import { u } from "unist-builder";
import { visit } from "unist-util-visit";

import { Registry } from "@/registry";

export function rehypeComponent() {
  return async (tree: UnistTree) => {
    visit(tree, (node: UnistNode) => {
      if (node.name === "ComponentSource" || node.name === "ComponentPreview") {
        const name = getNodeAttributeByName(node, "name")?.value as string;

        if (!name) {
          return null;
        }

        try {
          const component = Registry.find((item) => item.registryName === name);
          if (!component) {
            console.warn(`Component "${name}" not found in registry.`);
            return;
          }
          const src = path.join(process.cwd(), component.sourceFile);
          const source = fs.readFileSync(src, "utf8");

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
          console.error(error);
        }
      }
    });
  };
}

function getNodeAttributeByName(node: UnistNode, name: string) {
  return node.attributes?.find((attribute) => attribute.name === name);
}
