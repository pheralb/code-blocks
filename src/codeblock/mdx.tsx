import type { HTMLProps, ReactElement, ReactNode } from "react";

import { cn } from "@/utils/cn";
import CopyButton from "./copyToClipboard";

interface CodeblockProps extends HTMLProps<HTMLPreElement> {
  ["data-language"]?: string;
  showlang?: "top" | "bottom";
}

type CodeProps = HTMLProps<HTMLElement>;

const Codeblock = ({
  children,
  ["data-language"]: dataLanguage = "typescript",
  ...props
}: CodeblockProps) => {
  // Utility function to get the text content of a ReactNode:
  const getTextContent = (children: ReactNode): string => {
    if (typeof children === "string") {
      return children;
    } else if (Array.isArray(children)) {
      return children.map(getTextContent).join("");
    } else if (
      children &&
      typeof children === "object" &&
      "props" in children
    ) {
      const childElement = children as ReactElement<{ children?: ReactNode }>;
      return getTextContent(childElement.props.children);
    }
    return "";
  };

  const content = getTextContent(children);

  return (
    <div
      className={cn(
        "not-prose",
        "group relative",
        "rounded-md border border-neutral-200 p-2 dark:border-neutral-800",
        props.className,
      )}
    >
      {props.showlang && (
        <p
          className={cn(
            "absolute",
            props.showlang === "top" && "top-2 right-3",
            props.showlang === "bottom" && "right-3 bottom-2",
            "rounded-md font-mono text-xs uppercase",
            "text-neutral-500 dark:text-neutral-400",
          )}
        >
          {dataLanguage}
        </p>
      )}
      <pre {...props}>{children}</pre>
      <div
        className={cn(
          "absolute",
          props.showlang === "top" && "right-2 bottom-2",
          props.showlang === "bottom" && "top-2 right-2",
          "animate-in group-hover:fade-in-30 hidden group-hover:block",
        )}
      >
        <CopyButton text={content} />
      </div>
    </div>
  );
};

const Code = (props: CodeProps) => {
  return (
    <code
      className={cn("font-mono text-sm dark:bg-transparent", props.className)}
      {...props}
    />
  );
};

export { Codeblock, Code };
