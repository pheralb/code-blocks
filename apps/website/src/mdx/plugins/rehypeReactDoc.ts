import type { UnistNode, UnistTree } from "@/mdx/types/unist";
import type { RegistryComponent } from "@/components/registry/types";

import path from "path";
import { u } from "unist-builder";
import { visit } from "unist-util-visit";
import { parse } from "react-docgen-typescript";

// Components Registry:
import { RegistryData } from "@/components/registry/data";

const getComponent = (title: string): RegistryComponent | undefined => {
  return RegistryData.find((group) => group.shadcnRegistry.name === title);
};

export function rehypeReactDoc() {
  return (tree: UnistTree) => {
    visit(tree, (node: UnistNode) => {
      if (node.name === "ShowProps") {
        const title = getNodeAttributeByName(node, "component")
          ?.value as string;
        if (!title) return;
        try {
          const component = getComponent(title);

          if (!component?.fileSource) {
            console.warn(
              `|- ⚠️ mdx/rehypeReactDoc/plugin - Component "${title}" not found or missing sourceFile.`,
            );
            return;
          }
          const src = path.resolve(process.cwd(), component.fileSource);
          const docs = parse(src, { savePropValueAsString: true });
          if (!docs.length) {
            node.children?.push(
              u("element", {
                tagName: "p",
                children: [{ type: "text", value: "No props found." }],
              }),
            );
            return;
          }

          interface PropType {
            name: string;
            type: { name: string };
            required: boolean;
            description?: string;
          }

          const fullPropAttr = getNodeAttributeByName(node, "fullprop");
          const fullProp =
            fullPropAttr?.value === true || fullPropAttr?.value === "true";

          // Iterate through all components found in the file
          docs.forEach((doc) => {
            const props = doc.props;
            const componentName = doc.displayName;

            // Add component heading if there are multiple components
            if (docs.length > 1) {
              node.children?.push(
                u("element", {
                  tagName: "h3",
                  properties: {},
                  children: [{ type: "text", value: componentName }],
                }),
              );
            }

            const tableNode = u("element", {
              tagName: "table",
              properties: {},
              children: [
                u("element", {
                  tagName: "thead",
                  properties: {},
                  children: [
                    u("element", {
                      tagName: "tr",
                      properties: {},
                      children: [
                        u("element", {
                          tagName: "th",
                          properties: {},
                          children: [{ type: "text", value: "Prop" }],
                        }),
                        u("element", {
                          tagName: "th",
                          properties: {},
                          children: [{ type: "text", value: "Type" }],
                        }),
                        u("element", {
                          tagName: "th",
                          properties: {},
                          children: [{ type: "text", value: "Required" }],
                        }),
                      ],
                    }),
                  ],
                }),
                u("element", {
                  tagName: "tbody",
                  properties: {},
                  children: (() => {
                    const propEntries = Object.entries(props);
                    let filteredProps: [string, unknown][] = propEntries;
                    let reactParentName: string | null = null;
                    if (!fullProp) {
                      filteredProps = propEntries.filter(([_, prop]) => {
                        const parent = (
                          prop as {
                            parent?: { name?: string; fileName?: string };
                          }
                        ).parent;
                        if (parent) {
                          if (
                            parent.name === "HTMLAttributes" ||
                            parent.fileName?.includes("react")
                          ) {
                            reactParentName = parent.name ?? "React Props";
                            return false;
                          }
                        }
                        return true;
                      });
                    }

                    return [
                      ...filteredProps.map(([_, prop]) => {
                        const p = prop as PropType;
                        return u("element", {
                          tagName: "tr",
                          properties: {},
                          children: [
                            u("element", {
                              tagName: "td",
                              properties: {},
                              children: [{ type: "text", value: p.name }],
                            }),
                            u("element", {
                              tagName: "td",
                              properties: {},
                              children: [{ type: "text", value: p.type.name }],
                            }),
                            u("element", {
                              tagName: "td",
                              properties: {},
                              children: [
                                {
                                  type: "text",
                                  value: p.required ? "Yes" : "No",
                                },
                              ],
                            }),
                          ],
                        });
                      }),
                      // Check fullProp property:
                      ...(!fullProp && reactParentName
                        ? [
                            u("element", {
                              tagName: "tr",
                              properties: {},
                              children: [
                                u("element", {
                                  tagName: "td",
                                  properties: { colSpan: 4 },
                                  children: [
                                    {
                                      type: "text",
                                      value: `Included: ${String(reactParentName)}<HTMLDivElement>`,
                                    },
                                  ],
                                }),
                              ],
                            }),
                          ]
                        : []),
                    ];
                  })(),
                }),
              ],
            });
            node.children?.push(tableNode);
          });
        } catch (error) {
          console.error(
            `|- ❌ mdx/rehypeReactDoc/plugin - Error: ${String(error)}`,
          );
        }
      }
    });
  };
}

function getNodeAttributeByName(node: UnistNode, name: string) {
  return node.attributes?.find((attribute) => attribute.name === name);
}
