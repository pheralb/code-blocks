import type { HTMLProps, ReactElement, ReactNode } from "react";
import { Document } from "@react-symbols/icons";

import CopyButton from "./copyToClipboard";
import { cn } from "@/utils/cn";
import { icons } from "./icons";

/** Types **/

interface CodeblockProps extends HTMLProps<HTMLPreElement> {
  ["data-language"]?: string;
  ["data-extra"]?: string;
  title?: string;
}

type CodeProps = HTMLProps<HTMLElement>;

/** Components **/

const Codeblock = ({
  children,
  ["data-language"]: dataLanguage = "ts",
  ["data-extra"]: dataExtra = "",
  ...props
}: CodeblockProps) => {

  // Get the icon for the language:
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
        "not-prose my-1",
        "group relative",
        "overflow-hidden rounded-md border border-neutral-200 dark:border-neutral-800",
        props.className,
      )}
    >
      {dataExtra ? (
        <div
          className={cn(
            "flex items-center justify-between text-sm",
            "px-2 py-1",
            "bg-neutral-200/30 dark:bg-neutral-800/30",
            "border-b border-neutral-200 dark:border-neutral-800",
          )}
        >
          <div className="flex items-center space-x-2">
            {getIcon(dataLanguage)}
            <span>{dataExtra.split("title=").pop()}</span>
          </div>
          <CopyButton label="Copy to clipboard" text={content} />
        </div>
      ) : (
        <CopyButton
          label="Copy to clipboard"
          text={content}
          className="absolute top-2 right-2"
        />
      )}
      <div className="not-prose max-h-64 overflow-y-auto px-2.5 py-3">
        <pre {...props}>{children}</pre>
      </div>
    </div>
  );
};

const Code = (props: CodeProps) => {
  return (
    <code
      className={cn(
        "line not-prose font-mono text-sm dark:bg-transparent",
        props.className,
      )}
      {...props}
    />
  );
};

export { Codeblock, Code };
