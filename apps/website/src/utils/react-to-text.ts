import {
  isValidElement,
  type ReactNode,
  type JSXElementConstructor,
} from "react";

type ResolverMap = Map<
  string | JSXElementConstructor<object>,
  (props: object) => string
>;

const reactToText = (node: ReactNode, resolvers?: ResolverMap): string => {
  if (node == null || typeof node === "boolean") return "";

  if (typeof node === "string" || typeof node === "number") return String(node);

  if (Array.isArray(node))
    return node.map((n) => reactToText(n, resolvers)).join("");

  if (isValidElement(node)) {
    const resolver = resolvers?.get(
      node.type as string | JSXElementConstructor<object>,
    );
    if (resolver) return resolver(node.props as object);
    return reactToText(
      (node.props as { children?: ReactNode }).children,
      resolvers,
    );
  }

  return "";
};

export { reactToText };