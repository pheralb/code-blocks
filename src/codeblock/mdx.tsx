import type { HTMLProps, ReactElement, ReactNode } from "react";

import { cn } from "@/utils/cn";
import CopyButton from "./copyToClipboard";
import { icons } from "./icons";
import { Document } from "@react-symbols/icons";

interface CodeblockProps extends HTMLProps<HTMLPreElement> {
  ["data-language"]?: string;
  showlang?: "top" | "bottom";
}

type CodeProps = HTMLProps<HTMLElement>;

const Codeblock = ({
  children,
  ["data-language"]: dataLanguage = "ts",
  ...props
}: CodeblockProps) => {
  const getIcon = (lang: string) => {
    const icon = icons.find((icon) => icon.lang === lang);
    return icon ? icon.icon : <Document width={14} height={14} />;
  };

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
        <div
          title={dataLanguage}
          aria-label={dataLanguage}
          className={cn(
            "absolute",
            props.showlang === "top" && "top-2 right-3",
            props.showlang === "bottom" && "right-3 bottom-2",
            "rounded-md font-mono text-xs uppercase",
            "text-neutral-500 dark:text-neutral-400",
          )}
        >
          {getIcon(dataLanguage)}
        </div>
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
        <CopyButton label="Copy to clipboard" text={content} />
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
