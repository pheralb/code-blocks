import type { HTMLProps, ReactElement, ReactNode } from "react";
import type { IconsData } from "@/codeblock/icons";

import CopyButton from "@/codeblock/copyToClipboard";
import { cn } from "@/utils/cn";
import { icons } from "@/codeblock/icons";

/** Types **/

interface CodeblockProps extends HTMLProps<HTMLPreElement> {
  ["data-language"]?: string;
  ["data-extra"]?: string;
  title?: string;
}

type CodeProps = HTMLProps<HTMLElement>;

/** Components **/

const CodeblockMDX = ({
  children,
  ["data-language"]: dataLanguage = "ts",
  ["data-extra"]: dataExtra = "",
  ...props
}: CodeblockProps) => {
  // Get the icon for the language:
  const getIcon = (lang: string): IconsData => {
    const icon = icons.find((icon) => icon.lang === lang);
    return icon || icons[0];
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

  // Extract the title from the data-extra attribute:
  const handleExtractTitle = (input: string) => {
    const match = input.match(/title="([^"]+)"/);
    return match ? match[1] : null;
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
      <div
        className={cn(
          "flex items-center justify-between text-sm",
          "px-2 py-1",
          "bg-neutral-200/30 dark:bg-neutral-800/30",
          "border-b border-neutral-200 dark:border-neutral-800",
        )}
      >
        <div className="flex items-center space-x-2">
          {getIcon(dataLanguage).icon}
          {dataExtra ? (
            <p>{handleExtractTitle(dataExtra)}</p>
          ) : (
            <p className="text-neutral-600 dark:text-neutral-400">
              {getIcon(dataLanguage).name}
            </p>
          )}
        </div>
        <CopyButton label="Copy to clipboard" text={content} />
      </div>
      <div className="not-prose max-h-64 overflow-y-auto px-2.5 py-3">
        <pre {...props}>{children}</pre>
      </div>
    </div>
  );
};

const CodeMDX = (props: CodeProps) => {
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

export { CodeblockMDX, CodeMDX };
