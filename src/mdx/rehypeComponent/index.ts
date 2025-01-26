import type { UnistNode, UnistTree } from "./types";

import fs from "fs";
import path from "path";
import { u } from "unist-builder";
import { visit } from "unist-util-visit";

import { Registry } from "@/registry";

export function rehypeComponent() {
  return async (tree: UnistTree) => {
    visit(tree, (node: UnistNode) => {
      const { value: srcPath } =
        (getNodeAttributeByName(node, "src") as {
          name: string;
          value?: string;
          type?: string;
        }) || {};

      if (node.name === "ComponentPreview") {
        const name = getNodeAttributeByName(node, "name")?.value as string;
        const fileName = getNodeAttributeByName(node, "fileName")?.value as
          | string
          | undefined;

        if (!name && !srcPath) {
          return null;
        }

        try {
          const component = Registry.find((item) => item.registryName === name);

          if (!component) {
            console.warn(`Component "${name}" not found in registry.`);
            return;
          }

          const src = srcPath
            ? path.join(process.cwd(), srcPath)
            : fileName
              ? path.join(
                  process.cwd(),
                  path.dirname(component.sourceFile),
                  fileName,
                )
              : path.join(process.cwd(), component.sourceFile);

          const source = fs.readFileSync(src, "utf8");

          node.children?.push(
            u("element", {
              tagName: "pre",
              properties: {
                __src__: src,
                __registryname__: component.registryName,
              },
              attributes: [
                {
                  name: "registryName",
                  type: "mdxJsxAttribute",
                  value: component.registryName,
                },
              ],
              children: [
                u("element", {
                  tagName: "code",
                  properties: {
                    className: ["language-tsx"],
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

      if (node.name === "ComponentSource") {
        const name = getNodeAttributeByName(node, "name")?.value as string;
        const fileName = getNodeAttributeByName(node, "fileName")?.value as
          | string
          | undefined;

        if (!name && !srcPath) {
          return null;
        }

        try {
          const component = Registry.find((item) => item.registryName === name);

          if (!component) {
            console.warn(`Component "${name}" not found in registry.`);
            return;
          }

          const src = srcPath
            ? path.join(process.cwd(), srcPath)
            : fileName
              ? path.join(
                  process.cwd(),
                  path.dirname(component.sourceFile),
                  fileName,
                )
              : path.join(process.cwd(), component.sourceFile);

          const source = fs.readFileSync(src, "utf8");

          node.children?.push(
            u("element", {
              tagName: "pre",
              properties: {
                __src__: src,
                __registryname__: component.registryName,
              },
              attributes: [
                {
                  name: "registryName",
                  type: "mdxJsxAttribute",
                  value: component.registryName,
                },
              ],
              children: [
                u("element", {
                  tagName: "code",
                  properties: {
                    className: ["language-tsx"],
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
